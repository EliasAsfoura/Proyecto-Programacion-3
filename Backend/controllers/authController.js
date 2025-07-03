import db from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Funcion encargada de registrar el usuario

export const register = async (req, res) => {
  const { email, nombre, password } = req.body;

  console.log("📥 Datos recibidos en /register:", req.body);
  console.log(email,nombre,password, "datos desestructurados");

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

    // Generar token con register
    const token = jwt.sign(
      {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        rol: nuevoUsuario.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(201).json({
      msg: 'Registro exitoso',
      token,
      nombre: nuevoUsuario.nombre,
      rol: nuevoUsuario.rol,
      id: nuevoUsuario.id
    });

  } catch (error) {
    console.error(" Error en registro:", error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

// Funcion para hacer login del usuario

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(" Datos recibidos en /login:", req.body);

  // Validar campos básicos
  if (!email || !password) {
    return res.status(400).json({ msg: 'Faltan email o contraseña' });
  }


  try {

    const [usuarios] = await db.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );

    // Verifica si existe

    if (usuarios.length === 0) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    // Guarda los elementos del usuario
    const usuario = usuarios[0];

    // Verifica la password
    const passwordValida = await bcrypt.compare(password, usuario.password_hash);

    
    // Si no es correcta larga un error
    if (!passwordValida) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    // Arma un nuevo token por una sesion nueva con login
    const token = jwt.sign(
      {
        id: usuario.id,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    // Si todo va bien, tira un emote
    res.status(200).json({
      msg: 'Login exitoso',
      token,
      nombre: usuario.nombre,
      rol: usuario.rol,
      id: usuario.id 
    });

  } 
  // sino bueno..
  catch (error) {
    console.error(" Error en login:", error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

