import express from 'express';

const router = express.Router();

// Ruta de prueba para productos
router.get('/test', (req, res) => {
  res.send('Ruta de productos funcionando ✅');
});

export default router;
