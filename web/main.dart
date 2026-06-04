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
  final r = _calc.calculate(_profile());

  final list = web.document.getElementById('list');
  if (list != null) {
    list.textContent = '';
    for (final b in r.results) {
      final card = web.HTMLDivElement()..className = 'benefit';
      final row = web.HTMLDivElement()..className = 'row';
      row.appendChild(
        web.HTMLDivElement()
          ..className = 'name'
          ..textContent = '${b.icon} ${b.name}',
      );
      row.appendChild(
        web.HTMLDivElement()
          ..className = 'amt'
          ..textContent = b.amtStr,
      );
      card.appendChild(row);
      if (b.desc.isNotEmpty) {
        card.appendChild(
          web.HTMLDivElement()
            ..className = 'desc'
            ..textContent = b.desc,
        );
      }
      list.appendChild(card);
    }
  }

  final res = web.document.getElementById('result');
  if (res != null) {
    res.textContent = '';
    res.appendChild(
      web.HTMLDivElement()
        ..className = 'total'
        ..textContent = r.results.isEmpty
            ? 'Пока ничего не найдено'
            : '≈ ${fmt(r.monthlyTotal)}/мес',
    );
    final parts = <String>[
      '${pluralBenefitLabel(r.results.length)}: ${r.results.length}',
    ];
    if (r.onceTotal > 0) parts.add('${fmt(r.onceTotal)} разово');
    res.appendChild(
      web.HTMLDivElement()
        ..className = 'sub'
        ..textContent = parts.join(' · '),
    );
  }
}
