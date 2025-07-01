import express from 'express';
import { realizarCheckout } from '../controllers/ventaController.js';

import  verifyToken  from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/checkout', verifyToken, realizarCheckout);

export default router;
