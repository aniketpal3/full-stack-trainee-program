# User CRUD API MongoDB

## Features

- Create User
- Read Users
- Update User
- Delete User
- Validation
- Admin Filter
- Average Age Route

## Install

```bash
npm install
```

## Run

```bash
node server.js
```

## Routes

GET /users

GET /users/:id

POST /users

PUT /users/:id

DELETE /users/:id

GET /admins

GET /users/average-age

## Example User

```json
{
  "name": "Aniket",
  "email": "aniket@example.com",
  "age": 22,
  "role": "admin"
}
```
