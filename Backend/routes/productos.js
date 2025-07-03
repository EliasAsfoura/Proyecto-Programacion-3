import express from 'express';
import { getProducts, getProductoById, createProduct } from "../controllers/productController.js";
import { deleteProducto } from '../controllers/productController.js';
import { updateProducto } from "../controllers/productController.js";

// Crea un enrutador modular de Express.
const router = express.Router();

// Ruta para obtener productos
router.get("/", getProducts);

// Ruta para obtener productos por id
router.get("/:id", getProductoById);

// Ruta para crear productos
router.post("/", createProduct);

// Ruta eliminar producto
router.delete('/', deleteProducto);

// Ruta para edita productos
router.put("/:id", updateProducto);


export default router;