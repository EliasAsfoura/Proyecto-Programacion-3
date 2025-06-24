import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // El token debe venir como: Authorization: Bearer TOKEN
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado: token faltante' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // lo que habías firmado: id, nombre, rol
    next();
  } catch (error) {
    return res.status(403).json({ msg: 'Token inválido o expirado' });
  }
};

export default verifyToken;
