import express from 'express';
import { agregarProductoAlCarrito, obtenerCarritoActual,  actualizarCantidadProducto, eliminarProductoDelCarrito, eliminarCarritoCompleto } from '../controllers/carritoController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();
router.get('/', verifyToken, obtenerCarritoActual);
router.post('/agregar', verifyToken, agregarProductoAlCarrito);
router.put('/', verifyToken, actualizarCantidadProducto);
router.delete('/:id_producto', verifyToken, eliminarProductoDelCarrito);
router.delete('/', verifyToken, eliminarCarritoCompleto);

export default router;