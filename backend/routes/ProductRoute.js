import express from "express";
import {
  getProduct,
  getProductByType,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Product.js";

const route = express.Router();

route.get("/product", getProduct);
route.get("/product/:type", getProductByType);
route.post("/product", createProduct);
route.patch("/product/:id", updateProduct);
route.delete("/product/:id", deleteProduct);

export default route;
