import express from 'express';
import {getProducts, getProductoById} from "../controllers/productController.js"

const router = express.Router()
router.get("/", getProducts);
router.get("/:id", getProductoById);

export default router