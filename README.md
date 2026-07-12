# Passport Auth

Учебный проект на Node.js и Express.

В проекте реализована авторизация пользователей с помощью Passport.js, а также добавлено подключение к MongoDB Atlas для получения и отображения данных из базы данных.

---

## Реализовано

В проекте есть:

- регистрация пользователя через email и пароль
- авторизация через Passport Local Strategy
- сессии пользователей через express-session
- защищённая страница для авторизованных пользователей
- выход из аккаунта
- хеширование паролей с помощью bcrypt
- подключение MongoDB Atlas
- получение данных из коллекции MongoDB и вывод их на страницу

---

## Маршруты

Авторизация:

- `/register` — страница регистрации
- `/login` — страница входа
- `/protected` — закрытая страница для авторизованных пользователей
- `/logout` — выход из аккаунта

MongoDB:

- `/users` — вывод пользователей, полученных из MongoDB Atlas

---

## Подключение MongoDB Atlas

Для подключения к базе данных используется официальный MongoDB Node.js Driver.

В файле `.env` необходимо указать:

```env
SECRET_KEY=your_secret_key
PORT=3000
MONGO_CONNECTION_STRING=your_mongodb_connection_string
```

---

## Установка и запуск

Установить зависимости:

```bash
npm install
```

Запуск проекта:

```bash
npm run dev
```

После запуска сервер будет доступен:

```text
http://localhost:3000
```

Страница с данными из MongoDB:

```text
http://localhost:3000/users
```

---

## Используемые технологии

- Node.js
- Express.js
- Passport.js
- express-session
- bcrypt
- dotenv
- MongoDB Atlas
- MongoDB Driver

---

## Репозиторий

https://github.com/chebanilia2018-lab/passport-auth.git