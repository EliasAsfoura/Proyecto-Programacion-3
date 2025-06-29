// routes/carrito.js
import express from 'express';
import {
  obtenerCarritoUsuario,
  agregarProductoACarrito,
  realizarCheckout
} from '../controllers/carritoController.js';

const router = express.Router();


router.get('/:usuario_id', obtenerCarritoUsuario);


router.post('/', agregarProductoACarrito);


router.post('/checkout', realizarCheckout);

export default router;
