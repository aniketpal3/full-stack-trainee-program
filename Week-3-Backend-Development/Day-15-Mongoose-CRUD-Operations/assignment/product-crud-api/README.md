# Product CRUD API

## Features

- Create Product
- Read Products
- Update Product
- Delete Product

## Install

```bash
npm install
```

## Run

```bash
node server.js
```

## Routes

GET /products

POST /products

PUT /products/:id

DELETE /products/:id

## Example Body

```json
{
  "name": "Laptop",
  "price": 50000,
  "stock": 20
}
```