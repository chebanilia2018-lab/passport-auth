# Passport Auth MongoDB Products

## Описание проекта

В проекте реализован сервер на Node.js и Express.js с авторизацией пользователей через Passport.js и подключением к MongoDB Atlas.

Также реализована работа с коллекцией `products` в MongoDB:

- CRUD операции
- пагинация данных
- сортировка
- использование skip и limit
- работа с MongoDB Cursor
- агрегационный запрос для получения статистики товаров


## Используемые технологии

- Node.js
- Express.js
- MongoDB Atlas
- MongoDB Driver
- Passport.js
- Passport Local Strategy
- bcrypt
- express-session
- dotenv


## Установка проекта

Установить зависимости:

```bash
npm install
```

Запуск сервера:

```bash
npm run dev
```

После запуска сервер доступен:

```
http://localhost:3000
```


# Авторизация пользователей

В проекте реализованы:

- регистрация пользователя
- вход в систему
- проверка авторизации через Passport.js
- защищённая страница
- выход из аккаунта


## Маршруты пользователей


### Главная страница

```
GET /
```


### Регистрация

```
GET /register

POST /register
```


### Авторизация

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



# Работа с Products MongoDB


## Получение товаров с пагинацией

Маршрут:

```
GET /products
```


Поддерживаются параметры:

```
?page=1&limit=5
```


Пример:

```
GET /products?page=1&limit=5
```


Используются:

- find()
- sort()
- skip()
- limit()


Пример ответа:

```json
{
    "totalProducts": 10,
    "currentPage": 1,
    "pageSize": 5,
    "products": [
        {
            "name": "Monitor",
            "price": 300,
            "type": "screen"
        }
    ]
}
```



# Cursor маршрут


Для перебора документов используется MongoDB Cursor.


Маршрут:

```
GET /products/cursor
```


Логика работы:

- создаётся cursor через find()
- документы перебираются методом hasNext()
- каждый документ получается через next()


Пример ответа:

```json
[
    {
        "name": "Monitor",
        "price": 300,
        "type": "screen"
    },
    {
        "name": "Table",
        "price": 250,
        "type": "furniture"
    }
]
```



# Aggregation статистика


Для анализа данных используется MongoDB Aggregation Pipeline.


Маршрут:

```
GET /products/statistics
```


Выполняется:

- группировка товаров по типу
- подсчёт количества товаров
- вычисление средней цены


Используются:

- $group
- $sum
- $avg
- $sort


Пример ответа:

```json
[
    {
        "_id": "screen",
        "totalProducts": 5,
        "averagePrice": 300
    },
    {
        "_id": "furniture",
        "totalProducts": 3,
        "averagePrice": 250
    }
]
```



# CRUD операции Products


## Создание товара

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



## Создание нескольких товаров

```
POST /products/many
```



## Обновление товара

```
PUT /products/:name
```



## Обновление нескольких товаров

```
PUT /products
```



## Полная замена товара

```
PATCH /products/:name
```



## Удаление товара

```
DELETE /products/:name
```



## Удаление нескольких товаров

```
DELETE /products
```



# Структура проекта


```
passport-auth

│── public
│   └── index.html

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



# MongoDB подключение


Для подключения используется переменная:

```
MONGO_CONNECTION_STRING
```


В файле `.env` также хранится секретный ключ:

```
SECRET_KEY
```



# Выполнено


В проекте реализовано:

- Express сервер
- подключение MongoDB Atlas
- Passport авторизация
- работа с сессиями
- хеширование паролей bcrypt
- CRUD операции MongoDB
- пагинация данных
- сортировка данных
- использование skip и limit
- работа с MongoDB Cursor
- агрегационный запрос для статистики



# GitHub


Ссылка на репозиторий:

https://github.com/chebanilia2018-lab/passport-auth.git