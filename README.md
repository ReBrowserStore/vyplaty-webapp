# vyplaty_webapp — Telegram Mini App

Мини-приложение «Калькулятор выплат» для Telegram: форма с полями и чипами,
**мгновенный пересчёт прямо в браузере** через ядро
[`benefits_core`](../benefits_core), скомпилированное в JS. Сервер не нужен —
вся логика в `main.dart.js` (~160 КБ).

## Сборка

```bash
dart pub get
dart compile js web/main.dart -o web/main.dart.js -O2
```

Готовая статика — папка `web/` (`index.html`, `main.dart.js`, `styles.css`).
Пересобирать после обновления ядра `benefits_core`.

## Локальный просмотр

```bash
python3 -m http.server 8088 --directory web
# открыть http://localhost:8088
```

## Размещение (для Telegram нужен HTTPS)

Telegram открывает Mini App только по HTTPS. Самый простой бесплатный путь —
**GitHub Pages**:

1. Создать репозиторий, запушить содержимое (важно: `web/main.dart.js` уже в git).
2. Settings → Pages → Source: ветка `main`, папка `/web` (или положить файлы из
   `web/` в корень и выбрать `/`).
3. Адрес вида `https://<логин>.github.io/<репозиторий>/`.

Альтернативы: Netlify / Vercel / Cloudflare Pages (перетащить папку `web/`).

## Подключение к боту

В `.env` бота указать адрес:
```
WEBAPP_URL=https://<логин>.github.io/<репозиторий>/
```
Тогда в меню `/start` появится кнопка «🧮 Открыть калькулятор», открывающая это
Mini App внутри Telegram.

## Структура

```
web/index.html   — каркас формы (секции, контейнеры чипов, плашка итога)
web/styles.css   — стиль, тема Telegram через CSS-переменные (--tg-theme-*)
web/main.dart    — форма из StepCatalog + live-пересчёт через BenefitCalculator
web/main.dart.js — скомпилированное ядро + UI (этот файл и хостится)
```
