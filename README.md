# Passport Auth MongoDB

## Описание проекта

В этом проекте реализован простой сервер на Node.js и Express.js с авторизацией пользователей через Passport.js и подключением к MongoDB.

Также добавлены CRUD операции для работы с товарами из базы данных MongoDB.

## Используемые технологии

* Node.js
* Express.js
* MongoDB
* Passport.js
* Passport Local Strategy
* bcrypt
* express-session
* dotenv

## Установка проекта

Скачать проект и установить зависимости:

```bash
npm install
```

Запуск сервера:

```bash
npm run dev
```

После запуска сервер доступен по адресу:

```
http://localhost:3000
```

## Авторизация

В проекте реализованы:

* регистрация пользователя
* вход в систему
* проверка авторизации через Passport
* защищённая страница
* выход из аккаунта

## Маршруты пользователей

### Страница главного меню

```
GET /
```

### Регистрация

```
GET /register
POST /register
```

### Вход

```
GET /login
POST /login
```

### Защищённая страница

```
GET /protected
```

### Выход

```
GET /logout
```

## Работа с товарами MongoDB

Добавлены CRUD операции:

### Получение всех товаров

```
GET /products
```

### Создание товара

```
POST /products
```

Пример данных:

```json
{
    "name": "Keyboard",
    "price": 50,
    "type": "computer"
}
```

### Создание нескольких товаров

```
POST /products/many
```

### Обновление товара

```
PUT /products/:name
```

### Обновление нескольких товаров

```
PUT /products
```

### Замена товара

```
PATCH /products/:name
```

### Удаление товара

```
DELETE /products/:name
```

### Удаление нескольких товаров

```
DELETE /products
```

## Структура проекта

```
passport-auth

│── routes
│   ├── usersRouter.js
│   └── productsRouter.js

│── services
│   ├── usersService.js
│   └── productsService.js

│── db.js
│── server.js
│── package.json
│── .env
│── README.md
```

## Подключение MongoDB

Для подключения используется переменная окружения:

```
MONGO_CONNECTION_STRING
```

Также в файле `.env` хранится секретный ключ для сессий:

```
SECRET_KEY
```

## Выполнено

В проекте реализованы:

* настройка Express сервера
* подключение MongoDB
* авторизация через Passport
* работа с сессиями
* хеширование паролей через bcrypt
* CRUD операции с MongoDB
## GitHub

Ссылка на репозиторий:

https://github.com/chebanilia2018-lab/passport-auth.git