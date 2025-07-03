import express from 'express';
import { agregarProductoAlCarrito, obtenerCarritoActual,  actualizarCantidadProducto, eliminarProductoDelCarrito, eliminarCarritoCompleto } from '../controllers/carritoController.js';
import verifyToken from '../middlewares/verifyToken.js';

// Crea un enrutador modular de Express.
const router = express.Router();

// Ruta para obtener carrito
router.get('/', verifyToken, obtenerCarritoActual);

// Ruta Agregar al carrito
router.post('/agregar', verifyToken, agregarProductoAlCarrito);

// Ruta Editar carrito
router.put('/', verifyToken, actualizarCantidadProducto);

// Ruta Delete por id
router.delete('/:id_producto', verifyToken, eliminarProductoDelCarrito);

// Ruta Delete general
router.delete('/', verifyToken, eliminarCarritoCompleto);


export default router;