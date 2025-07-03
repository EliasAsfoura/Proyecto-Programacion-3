import express from 'express';
import { realizarCheckout } from '../controllers/ventaController.js';

import  verifyToken  from '../middlewares/verifyToken.js';

// Crea un enrutador modular de Express.
const router = express.Router();

// Ruta para hacer compra
router.post('/checkout', verifyToken, realizarCheckout);

export default router;
