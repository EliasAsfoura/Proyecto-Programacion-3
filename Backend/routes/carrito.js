import express from 'express';
import { agregarProductoAlCarrito } from '../controllers/carritoController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/agregar', verifyToken, agregarProductoAlCarrito);

export default router;