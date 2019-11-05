# Mesto Backend v0.0.2

- Серверная часть для проекта Mesto

### Стек: 
- Javascript(ES5/ES6), Node.js, Express.js

### Функционал:
| Запрос                                            | Ответ                                                               |
|---------------------------------------------------|---------------------------------------------------------------------|
| GET localhost:3000/users                          | JSON-список всех пользователей                                      |
| GET localhost:3000/cards                          | JSON-список всех карточек                                           |
| GET localhost:3000/users/8340d0ec33270a25f2413b69 | JSON-пользователя с переданным после /users  идентификатором. Если такого нет, API должно возвращать 404 статус  ответа и JSON:`{ "message": "Нет пользователя с таким id" }`        |                                                                                                          
| Несуществующий адрес                              | `{ "message": "Запрашиваемый ресурс не найден" }`                   |                                                   

## Установка

Для установки необходимо наличие Node.js и npm

Сохраните проект у себя на компьютере:  
```
git clone https://github.com/ablehope/mesto-backend.git
```

В корне проекта через консоль/терминал запустите команду:  
```
npm install
```
#### После успешной установки станут доступны команды:  
Запуск локального сервера:  
```
npm run dev
```  
Запуск продакшн сервера:  
```
npm run start
```
