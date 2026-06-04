import 'dart:js_interop';

import 'package:benefits_core/benefits_core.dart';
import 'package:web/web.dart' as web;

final BenefitCalculator _calc = BenefitCalculator();
final Set<String> _checks = <String>{};

void main() {
  _fillSelect('employment', [
    ('', '— выберите —'),
    for (final o in StepCatalog.employmentOptions) (o.value, o.label),
  ]);
  _fillSelect('region', [for (final r in regionConfigs) (r.id, r.label)]);
  _fillSelect('marital', const [
    ('', '— выберите —'),
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

  _recalc();
}

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

  // Итог снизу (зелёно-голубой градиент, как в приложении).
  final res = web.document.getElementById('result');
  if (res != null) {
    res.textContent = '';
    final left = web.HTMLDivElement();
    left.appendChild(
      web.HTMLDivElement()
        ..className = 'cnt'
        ..textContent = '${r.results.length}',
    );
    left.appendChild(
      web.HTMLDivElement()
        ..className = 'lbl'
        ..textContent = 'Найдено выплат',
    );
    res.appendChild(left);

    final right = web.HTMLDivElement()..className = 'right';
    right.appendChild(
      web.HTMLDivElement()
        ..className = 'm'
        ..textContent = r.monthlyTotal > 0 ? '≈ ${fmt(r.monthlyTotal)}/мес' : '—',
    );
    if (r.onceTotal > 0) {
      right.appendChild(
        web.HTMLDivElement()
          ..className = 'o'
          ..textContent = '${fmt(r.onceTotal)} разово',
      );
    }
    res.appendChild(right);
  }

  // Список по категориям.
  final list = web.document.getElementById('list');
  if (list == null) return;
  list.textContent = '';
  if (r.results.isEmpty) {
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
        ..textContent = entry.value,
    );
    for (final b in inCat) {
      list.appendChild(_benefitCard(b, profile));
    }
  }
}

web.HTMLElement _benefitCard(Benefit b, UserProfile profile) {
  final card = web.HTMLDivElement()..className = 'benefit';

  final head = web.HTMLDivElement()..className = 'head';
  if (b.icon.isNotEmpty) {
    head.appendChild(
      web.HTMLSpanElement()
        ..className = 'ico'
        ..textContent = b.icon,
    );
  }
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
        ..textContent = '🔎 Почему положено',
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
