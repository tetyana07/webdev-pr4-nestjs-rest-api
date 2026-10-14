# Практична робота №4. REST-ендпоінти на NestJS

Варіант 1: Електроніка та гаджети, маршрут `/gadgets`.

## Опис

REST API для керування гаджетами інтернет-магазину на NestJS. Реалізовано CRUD, query-фільтрацію, DTO, in-memory сервіс, обробку виключень та кастомні заголовки відповіді.

Поля сутності: `title`, `price`, `warrantyMonths`, `cpu`, `ramGb`.

## Структура

- `src/gadgets/gadgets.controller.ts` — контролер, маршрути та декоратори
- `src/gadgets/gadgets.service.ts` — бізнес-логіка та in-memory сховище
- `src/gadgets/dto/` — `CreateGadgetDto`, `UpdateGadgetDto`
- `requests.http` — запити для тестування (VS Code REST Client)

## Запуск

```bash
npm install
npm run start:dev
```

Сервер: http://localhost:3000

## Ендпоінти

| Метод | Маршрут | Опис | Статус |
|-------|---------|------|--------|
| GET | /gadgets | Список (`?search=`, `?limit=`) | 200 |
| GET | /gadgets/:id | Один запис | 200 / 404 |
| POST | /gadgets | Створення | 201 |
| PATCH | /gadgets/:id | Часткове оновлення | 200 / 404 |
| DELETE | /gadgets/:id | Видалення | 204 / 404 |

Заголовки відповіді для `GET /gadgets`: `X-API-Version: 1.0`, `X-Service-Status: operational`.

## Результати тестування

### Запуск сервера (без помилок)
![server](docs/09-server-log.png)

### GET /gadgets
![list](docs/01-list.png)

### GET /gadgets?search=ноут
![search](docs/02-search.png)

### GET /gadgets?limit=2
![limit](docs/03-limit.png)

### GET /gadgets/1
![get one](docs/04-get-one.png)

### GET /gadgets/99999 (404 Not Found)
![404](docs/05-404.png)

### POST /gadgets (201 Created)
![post](docs/06-post-201.png)

### PATCH /gadgets/:id
![patch](docs/07-patch.png)

### DELETE /gadgets/:id (204 No Content)
![delete](docs/08-delete-204.png)