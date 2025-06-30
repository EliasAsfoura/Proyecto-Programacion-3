import express from 'express';
import { getProducts, getProductoById, createProduct } from "../controllers/productController.js";
import { deleteProducto } from '../controllers/productController.js';
import { updateProducto } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductoById);
router.post("/", createProduct); 
router.delete('/', deleteProducto);
router.put("/:id", updateProducto);


export default router;