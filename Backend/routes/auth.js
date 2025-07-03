import express from 'express';
import { login, register } from '../controllers/authController.js';
import verifyToken from '../middlewares/verifyToken.js';

// Crea un enrutador modular de Express.
// Es decir, un objeto que te permite definir rutas en un archivo separado del principal 

const router = express.Router();

// Registro y login públicos
router.post('/register', register);
router.post('/login', login);

// Ruta protegida de prueba
router.get('/perfil', verifyToken, (req, res) => {
  res.json({ msg: `Hola ${req.user.nombre}, estás autenticado como ${req.user.rol}` });
});

export default router;
