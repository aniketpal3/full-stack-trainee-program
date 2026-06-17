# MongoDB Product API Assignment

## Objective

Create a Product model with fields `name`, `price`, and `category`, then perform CRUD operations using Express.js, MongoDB, and Mongoose.

---

## Features

- Create product
- Get all products
- Get product by ID
- Update product
- Delete product
- Mongoose validation
- Error handling
- MongoDB persistent storage

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Folder Structure

```txt
mongodb-product-api/
├── package.json
├── server.js
└── README.md
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Server

```bash
node server.js
```

or

```bash
npm start
```

---

## Base URL

```txt
http://localhost:4000
```

---

## MongoDB Database

```txt
day14-products-db
```

---

## Routes

### Home

```txt
GET /
```

### Create Product

```txt
POST /products
```

Body:

```json
{
  "name": "Laptop",
  "price": 55000,
  "category": "Electronics"
}
```

### Get All Products

```txt
GET /products
```

### Get Single Product

```txt
GET /products/:id
```

### Update Product

```txt
PUT /products/:id
```

Body:

```json
{
  "price": 60000
}
```

### Delete Product

```txt
DELETE /products/:id
```

---

## Testing Tools

Use:

- Postman
- Thunder Client
- Browser for GET requests

---

## Important Note

This project uses local MongoDB:

```txt
mongodb://127.0.0.1:27017/day14-products-db
```

For MongoDB Atlas, replace `MONGO_URI` in `server.js`.

---

## Learning Outcomes

After completing this assignment, students will understand:

- How to create a Mongoose schema
- How to create a Mongoose model
- How to save documents in MongoDB
- How to fetch documents from MongoDB
- How to update documents
- How to delete documents
- How to connect Express API with MongoDB