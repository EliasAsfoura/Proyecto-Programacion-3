import express from 'express';
import { getProducts, getProductoById, createProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductoById);
router.post("/", createProduct); 

export default router;
