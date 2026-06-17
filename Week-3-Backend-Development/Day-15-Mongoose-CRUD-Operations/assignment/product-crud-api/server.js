const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/day15-product-db")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err.message));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  }
});

const Product = mongoose.model(
  "Product",
  productSchema
);

app.get("/", (req, res) => {
  res.send("Product CRUD API");
});

// CREATE
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// READ ALL
app.get("/products", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

// READ ONE
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.json(product);
  } catch {
    res.status(400).json({
      message: "Invalid ID"
    });
  }
});

// UPDATE
app.put("/products/:id", async (req, res) => {
  try {
    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// DELETE
app.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Product deleted"
    });
  } catch {
    res.status(400).json({
      message: "Invalid ID"
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});