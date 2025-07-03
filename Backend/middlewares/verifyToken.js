import jwt from 'jsonwebtoken';

 // Funcion para autenticar el token
const verifyToken = (req, res, next) => {
  
  const authHeader = req.headers.authorization;

  // Verifica la validez de un token JWT enviado por el cliente en la cabecera de autorización.
  // authHeader.split(' ') separa el string en un arreglo dividiéndolo por espacios.
  // [1] toma el segundo elemento del arreglo, que es el token JWT puro, sin la palabra "Bearer".
  const token = authHeader && authHeader.split(' ')[1];

  // Si no hay token deniega acceso
  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado: token faltante' });
  }

  // Verifica y valida el token JWT recibido usando la clave secreta (JWT_SECRET).
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(403).json({ msg: 'Token inválido o expirado' });
  }
};

export default verifyToken;
