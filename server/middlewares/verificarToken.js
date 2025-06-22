import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Comprobamos si se envió el header con el token
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'Token no enviado o formato incorrecto' });
  }

  const token = authHeader.split(' ')[1]; // extraemos solo el token

  try {
    // Verificamos el token usando la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guardamos los datos del usuario dentro de la request
    req.usuario = decoded;

    next(); // ✅ pasa al siguiente middleware o al controlador
  } catch (err) {
    return res.status(403).json({ msg: 'Token inválido o expirado' });
  }
};
