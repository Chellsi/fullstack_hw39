# React Components Learning Project

## Опис проекту

Цей проект створений для навчання основам React компонентів. Він демонструє різні типи компонентів та їх використання:

- **Stateless Components** - функціональні компоненти без внутрішнього стану
- **Stateful Components** - компоненти з використанням useState hook для управління станом
- **Class Components** - класові компоненти (застарілий, але важливий для розуміння)

### Основні компоненти

1. **WelcomeStateless** - простий компонент, що приймає пропси (ім'я та номер домашньої роботи)
2. **CounterStateful** - лічильник з використанням useState для демонстрації управління станом
3. **ClassComponent** - приклад класового компонента

## Технології

- React 18
- Vite (для швидкої розробки)
- JavaScript (JSX)

## Встановлення та запуск

### Передумови

Переконайтеся, що у вас встановлено:
- Node.js (версія 14 або вище)
- npm або yarn

### Кроки встановлення

1. **Клонуйте репозиторій:**
   ```bash
   git clone <url-репозиторію>
   cd fullstack_hw39/my-react-app
   ```

2. **Встановіть залежності:**
   ```bash
   npm install
   ```

3. **Запустіть проект в режимі розробки:**
   ```bash
   npm run dev
   ```

4. **Відкрийте браузер:**
   Проект буде доступний за адресою [http://localhost:5173](http://localhost:5173)

### Доступні команди

```bash
npm run dev          # Запуск в режимі розробки
npm run build        # Збірка для продакшену
npm run preview      # Попередній перегляд збірки
npm run lint         # Перевірка коду ESLint
```

## Демо-версія

🌐 **Демо-версія проекту:** [https://your-demo-link.com](https://your-demo-link.com)

*Примітка: Замініть посилання на актуальну демо-версію вашого проекту*

## Структура проекту

```
my-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ClassComponent.jsx
│   │   ├── StatefulComponents.jsx
│   │   └── StatelessComponents.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Що вивчається

### Stateless Components
- Функціональні компоненти без внутрішнього стану
- Отримання та використання пропсів
- Правильна деструктуризація об'єкта пропсів

### Stateful Components
- Використання useState hook
- Управління внутрішнім станом компонента
- Обробка подій та оновлення стану

### Class Components
- Класові компоненти (для розуміння історії React)
- Метод render() та this.props

## Автор

Створено в рамках навчання React на FullStack курсі.

## Ліцензія

MIT License
