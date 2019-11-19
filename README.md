# Mesto Backend v0.0.3

- Серверная часть для проекта Mesto

### Функционал:
| Запрос                                            | Ответ                                                               |
|---------------------------------------------------|---------------------------------------------------------------------|
| GET /users                                        | возвращает всех пользователей                                       |
| GET /cards                                        | возвращает все карточки                                             |
| GET /users/:userId                                | возвращает пользователя по _id                                      |
| POST /users                                       | создаёт пользователя                                                |             
| POST /cards                                       | создаёт карточку                                                    |
| DELETE /cards/:cardId                             | удаляет карточку по идентификатору                                  |
| PATCH /users/me                                   | обновить профиль                                                    |
| PATCH /users/me/avatar                            | обновить аватар                                                     |
| PUT /cards/:cardId/likes                          | поставить лайк карточке                                             |
| DELETE /cards/:cardId/likes                       | убрать лайк карточке                                                |

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
