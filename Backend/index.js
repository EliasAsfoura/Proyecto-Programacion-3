import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import productoRoutes from './routes/productos.js';
import carritoRoutes from './routes/carrito.js';
import ventaRoutes from './routes/ventaRoutes.js';

// Lee el archivo .env, carga todas las variables definidas ahí dentro en process.env
dotenv.config();

// Creacion de la API
const app = express();

// Usamos cors para permitir comunicacion backend frontend
app.use(cors());

// Usa un middleware incorporado para leer y parsear JSON que viene en el cuerpo de las peticiones (req.body).
app.use(express.json());

// Instancia una sección de la API montando un conjunto de rutas
app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/venta', ventaRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

