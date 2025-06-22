import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('Ruta de auth funcionando ✅');
});

export default router;
