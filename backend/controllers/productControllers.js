import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch All products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch signle product
// @route GET /api/product/:id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    // thanks to our custom error handler
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
