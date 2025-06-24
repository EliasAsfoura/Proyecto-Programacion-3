import db from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { email, nombre, password } = req.body;

  console.log("📥 Datos recibidos en /register:", req.body);

  // Validar campos básicos
  if (!email || !nombre || !password) {
    return res.status(400).json({ msg: 'Faltan datos obligatorios' });
  }

  try {
    // Verificar si el email ya existe
    const [existe] = await db.execute(
      'SELECT id FROM usuarios WHERE email = ?',
      [email]
    );

    if (existe.length > 0) {
      return res.status(400).json({ msg: 'El email ya está registrado' });
    }

    // Encriptar contraseña
    const password_hash = await bcrypt.hash(password, 10);

    // Insertar nuevo usuario
    await db.execute(
      'INSERT INTO usuarios (email, nombre, password_hash, rol) VALUES (?, ?, ?, ?)',
      [email, nombre, password_hash, 'cliente']
    );

    // Obtener el usuario recién creado
    const [nuevoUsuarioRes] = await db.execute(
      'SELECT id, nombre, rol FROM usuarios WHERE email = ?',
      [email]
    );
    const nuevoUsuario = nuevoUsuarioRes[0];

    // Generar token
    const token = jwt.sign(
      {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        rol: nuevoUsuario.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: '300ms' }
    );

    res.status(201).json({
      msg: 'Registro exitoso',
      token,
      nombre: nuevoUsuario.nombre,
      rol: nuevoUsuario.rol,
    });

  } catch (error) {
    console.error("🟥 Error en registro:", error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log("📥 Datos recibidos en /login:", req.body);

  if (!email || !password) {
    return res.status(400).json({ msg: 'Faltan email o contraseña' });
  }

  try {
    const [usuarios] = await db.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );

    if (usuarios.length === 0) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const usuario = usuarios[0];
    const passwordValida = await bcrypt.compare(password, usuario.password_hash);

    if (!passwordValida) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({
      msg: 'Login exitoso',
      token,
      nombre: usuario.nombre,
      rol: usuario.rol,
    });

  } catch (error) {
    console.error("🟥 Error en login:", error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

