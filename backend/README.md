# Серверная часть

## Запуск

```shell
    npm install
```

```shell
    npm run dev
```

## Роуты

<b>POST - методы<b>

- `/login` - авторизация, принимает параметры:

```json
{
  "email": "example@mail.com",
  "password": "password"
}
```

- `/register` - регистрация, принимает параметры:

```json
{
  "username": "username",
  "email": "example@mail.com",
  "password": "password"
}
```

- `/logout` - прекращение авторизации пользователя, параметров не принимает.


- `/notes` - создание заметки, принимает параметры:

```json
{
  "title": "Some large title",
  "text": "Very very large text"
}
```

<b>GET - методы<b>

- `/users/me` - регистрация, формат ответа:

```json
{
  "id": "4080a8c6-7f64-4a27-8dbd-85e6c7a15f28",
  "email": "example@mail.com",
  "username": "user"
}
```

- `/books` - список книг, формат ответа:

```json
{
  "list": [
    {
      // Добавить формат ответа
    }
  ],
  "pageCount": 1
}
```
