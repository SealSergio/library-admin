# Роутинг проекта

На фронтенде `api` в путях атоматически заменяется на `http://localhost:4000`, реализовано [здесь](../frontend/vite.config.js).

## Auth

- /auth/login

- /auth/logout

- /auth/me

## Admins

Роуты /admins доступны только root-пользователям.

- /admins/register

## Books

- /books - GET, получение данных о книгах

- /books/authors

- /books/cycles

- /books/genres

## Users
