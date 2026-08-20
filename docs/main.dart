import 'dart:js_interop';

import 'package:benefits_core/benefits_core.dart';
import 'package:web/web.dart' as web;

final BenefitCalculator _calc = BenefitCalculator();
final Set<String> _checks = <String>{};

void main() {
  _fillSelect('employment', [
    ('', 'Выберите'),
    for (final o in StepCatalog.employmentOptions) (o.value, o.label),
  ]);
  _fillSelect('region', [for (final r in regionConfigs) (r.id, r.label)]);
  _fillSelect('marital', const [
    ('', 'Выберите'),
    ('single', 'Не в браке'),
    ('married', 'В браке'),
    ('divorced', 'Разведён(а)'),
    ('widow', 'Вдовец / вдова'),
  ]);
  _fillSelect('youngestChildAge', [
    for (final o in StepCatalog.youngestChildOptions.where((o) => o.value != '99'))
      (o.value, o.label),
  ]);

  _buildChips('childChecks', StepCatalog.childChecksFemale);
  _buildChips('familyChecks', StepCatalog.familyMemberChecks);
  _buildChips('housingChecks', StepCatalog.housingChecks);
  _buildChips('taxChecks', StepCatalog.taxChecks);
  _buildChips('specialChecks', StepCatalog.specialStatusChecks);

  const watched = [
    'age', 'gender', 'employment', 'region', 'marital',
    'children', 'youngestChildAge', 'income', 'familySize',
  ];
  for (final id in watched) {
    final el = web.document.getElementById(id);
    el?.addEventListener('input', ((web.Event _) => _recalc()).toJS);
    el?.addEventListener('change', ((web.Event _) => _recalc()).toJS);
  }

  _renderEvent();
  _recalc();
}

/// Баннер события: срок подачи заканчивается, суммы изменились.
///
/// Календарь общий с мобильным приложением — лежит в benefits_core. Иначе
/// дата на сайте и в приложении разъехались бы после первой же правки.
void _renderEvent() {
  final box = web.document.getElementById('eventBanner');
  if (box == null) return;

  final dismissed = (web.window.localStorage.getItem(_dismissedKey) ?? '')
      .split(',')
      .where((s) => s.isNotEmpty)
      .toSet();
  final event = currentEvent(DateTime.now(), dismissed: dismissed);
  if (event == null) return;

  final banner = web.HTMLDivElement()..className = 'event';
  banner.appendChild(
    web.HTMLDivElement()
      ..className = 'ev-ico'
      ..textContent = '🗓',
  );

  final body = web.HTMLDivElement()..className = 'ev-body';
  body.appendChild(
    web.HTMLDivElement()
      ..className = 'ev-title'
      ..textContent = event.title,
  );
  body.appendChild(
    web.HTMLDivElement()
      ..className = 'ev-text'
      ..textContent = event.subtitle,
  );
  // У расчёта ссылки нет: калькулятор и так на этой странице.
  final href = _eventHref(event.target);
  if (href != null) {
    body.appendChild(
      web.HTMLAnchorElement()
        ..className = 'ev-cta'
        ..href = href
        ..text = '${event.actionLabel} →',
    );
  }
  banner.appendChild(body);

  final close = web.HTMLButtonElement()
    ..className = 'ev-close'
    ..textContent = '✕'
    ..title = 'Больше не показывать'
    ..ariaLabel = 'Закрыть';
  close.addEventListener('click', ((web.Event _) {
    dismissed.add(event.id);
    web.window.localStorage.setItem(_dismissedKey, dismissed.join(','));
    banner.remove();
  }).toJS);
  banner.appendChild(close);

  box.appendChild(banner);
}

const _dismissedKey = 'dismissed_events';

String? _eventHref(EventTarget target) => switch (target) {
      EventTarget.familyPayment => '/post/aug_family_cashback.html',
      EventTarget.instructions => '/instrukcii/',
      EventTarget.calculator => null,
    };

void _fillSelect(String id, List<(String, String)> opts) {
  final el = web.document.getElementById(id) as web.HTMLSelectElement?;
  if (el == null) return;
  for (final (value, label) in opts) {
    final o = web.HTMLOptionElement()
      ..value = value
      ..text = label;
    el.appendChild(o);
  }
}

void _buildChips(String id, List<ToggleOption> opts) {
  final box = web.document.getElementById(id);
  if (box == null) return;
  for (final o in opts) {
    final chip = web.HTMLDivElement()
      ..className = 'chip'
      ..textContent = o.label;
    chip.addEventListener('click', ((web.Event _) {
      if (_checks.remove(o.value)) {
        chip.classList.remove('on');
      } else {
        _checks.add(o.value);
        chip.classList.add('on');
      }
      _recalc();
    }).toJS);
    box.appendChild(chip);
  }
}

String _inp(String id) =>
    (web.document.getElementById(id) as web.HTMLInputElement?)?.value ?? '';
String _selVal(String id) =>
    (web.document.getElementById(id) as web.HTMLSelectElement?)?.value ?? '';

UserProfile _profile() {
  final children = int.tryParse(_inp('children')) ?? 0;

  // Показ/скрытие возраста младшего ребёнка.
  final yw = web.document.getElementById('youngestWrap');
  if (children > 0) {
    yw?.classList.remove('hidden');
  } else {
    yw?.classList.add('hidden');
  }

  final region = _selVal('region');
  final familySize = _inp('familySize');
  final youngest = _selVal('youngestChildAge');

  return UserProfile(
    age: _inp('age'),
    gender: _selVal('gender'),
    employment: _selVal('employment'),
    region: region.isEmpty ? 'regular' : region,
    marital: _selVal('marital'),
    children: children,
    youngestChildAge:
        children > 0 ? (youngest.isEmpty ? '3' : youngest) : '99',
    checks: Set<String>.from(_checks),
    income: _inp('income'),
    familySize: familySize.isEmpty ? '1' : familySize,
  );
}

void _recalc() {
  final profile = _profile();
  final r = _calc.calculate(profile);

  final hasData = r.results.isNotEmpty;

  // Итоговая панель: крупная сумма в месяц + разовые выплаты отдельной строкой.
  final panel = web.document.getElementById('resultPanel');
  if (panel != null) {
    panel.textContent = '';
    panel.appendChild(
      web.HTMLDivElement()
        ..className = 'cap'
        ..textContent = hasData
            ? 'Ежемесячно вашей семье положено'
            : 'Заполните форму',
    );
    panel.appendChild(
      web.HTMLDivElement()
        ..className = 'sum'
        ..textContent =
            r.monthlyTotal > 0 ? fmt(r.monthlyTotal.roundToDouble()) : '—',
    );
    if (r.onceTotal > 0) {
      panel.appendChild(
        web.HTMLDivElement()
          ..className = 'once'
          ..textContent =
              'и ещё ${fmt(r.onceTotal.roundToDouble())} единовременно',
      );
    } else if (!hasData) {
      panel.appendChild(
        web.HTMLDivElement()
          ..className = 'once'
          ..textContent = 'Суммы появятся здесь по мере заполнения',
      );
    }
  }

  // Липкая полоска — тот же итог, но виден, пока прокручиваешь форму.
  final cnt = web.document.getElementById('stickyCount');
  final sum = web.document.getElementById('stickySum');
  if (cnt != null && sum != null) {
    cnt.textContent =
        hasData ? 'Найдено выплат: ${r.results.length}' : 'Заполните форму';
    sum.textContent = r.monthlyTotal > 0
        ? '${fmt(r.monthlyTotal.roundToDouble())}/мес'
        : (r.onceTotal > 0 ? fmt(r.onceTotal.roundToDouble()) : '—');
  }

  // Список по категориям.
  final list = web.document.getElementById('list');
  if (list == null) return;
  list.textContent = '';
  if (!hasData) {
    list.appendChild(
      web.HTMLDivElement()
        ..className = 'muted'
        ..textContent = 'Заполните форму — здесь появятся положенные выплаты.',
    );
    return;
  }
  for (final entry in BenefitCalculator.categoryNames.entries) {
    final inCat = r.results.where((x) => x.cat == entry.key).toList();
    if (inCat.isEmpty) continue;
    list.appendChild(
      web.HTMLDivElement()
        ..className = 'cat'
        ..textContent = _noEmoji(entry.value),
    );
    for (final b in inCat) {
      list.appendChild(_benefitCard(b, profile));
    }
  }
}

web.HTMLElement _benefitCard(Benefit b, UserProfile profile) {
  final card = web.HTMLDivElement()..className = 'benefit';

  final head = web.HTMLDivElement()..className = 'head';
  head.appendChild(
    web.HTMLDivElement()
      ..className = 'nm'
      ..textContent = b.name,
  );
  final amtCls = b.type == 'monthly'
      ? 'month'
      : b.type == 'once'
          ? 'once'
          : 'relief';
  head.appendChild(
    web.HTMLDivElement()
      ..className = 'amt $amtCls'
      ..textContent = b.amtStr,
  );
  card.appendChild(head);

  if (b.desc.isNotEmpty) {
    card.appendChild(
      web.HTMLDivElement()
        ..className = 'desc'
        ..textContent = b.desc,
    );
  }

  final ev = BenefitEvidenceService.resolve(b, profile);
  if (ev != null) {
    final det = web.HTMLDetailsElement();
    det.appendChild(
      (web.document.createElement('summary') as web.HTMLElement)
        ..textContent = 'Почему положено',
    );
    det.appendChild(
      web.HTMLDivElement()
        ..className = 'why'
        ..textContent = ev.eligibilityReason,
    );
    final p = ev.passportEntry;
    if (p != null) {
      det.appendChild(
        web.HTMLDivElement()
          ..className = 'src'
          ..textContent = p.sourceName,
      );
    }
    card.appendChild(det);
  }

  return card;
}

/// Убирает эмодзи из строки (для названий категорий из ядра).
String _noEmoji(String s) => s
    .replaceAll(
      RegExp(
        r'[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}️‍]',
        unicode: true,
      ),
      '',
    )
    .trim();
