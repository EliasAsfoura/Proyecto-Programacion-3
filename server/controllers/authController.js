import db from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;
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
        rol: usuario.rol
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' } 
    );

   

    res.status(200).json({
      msg: 'Login exitoso',
      token,
      nombre: usuario.nombre,
      rol: usuario.rol
    }); 

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};
