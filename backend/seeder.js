import mongoose from "mongoose";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();

// connect to db cause not connected to server
connectDB();

// import data
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((p) => {
      return { ...p, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported !");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

//delete data

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data destroyed !");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();

// node backend/server -
