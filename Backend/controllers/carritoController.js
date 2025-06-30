import db from '../config/db.js';

export const agregarProductoAlCarrito = async (req, res) => {
  const id_usuario = req.user.id; 
  const { id_producto, cantidad } = req.body;

  if (!id_producto || !cantidad || cantidad <= 0) {
    return res.status(400).json({ msg: 'Datos inválidos para el carrito' });
  }

  try {
    //  Busca si hay un carrito activo
    const [carritoExistente] = await db.execute(
      'SELECT id FROM carrito WHERE id_usuario = ? AND activo = 1 LIMIT 1',
      [id_usuario]
    );

    let id_carrito;

    if (carritoExistente.length > 0) {
      id_carrito = carritoExistente[0].id;
    } else {
      // Crear carrito nuevo
      const [nuevoCarrito] = await db.execute(
        'INSERT INTO carrito (id_usuario, fecha_creacion, activo) VALUES (?, NOW(), 1)',
        [id_usuario]
      );
      id_carrito = nuevoCarrito.insertId;
    }

    // Buscar si el producto ya está en el carrito
    const [detalleExistente] = await db.execute(
      'SELECT id, cantidad FROM carrito_detalle WHERE id_carrito = ? AND id_producto = ?',
      [id_carrito, id_producto]
    );

    if (detalleExistente.length > 0) {
      // Si existe, actualizar la cantidad
      const nuevaCantidad = detalleExistente[0].cantidad + cantidad;
      await db.execute(
        'UPDATE carrito_detalle SET cantidad = ? WHERE id = ?',
        [nuevaCantidad, detalleExistente[0].id]
      );
    } else {
      //Si no existe, insertar nuevo detalle
      // buscamos el precio actual del producto
      const [producto] = await db.execute(
        'SELECT precio FROM productos WHERE id = ?',
        [id_producto]
      );

      if (producto.length === 0) {
        return res.status(404).json({ msg: 'Producto no encontrado' });
      }

      const precio_unitario = producto[0].precio;

      await db.execute(
        `INSERT INTO carrito_detalle (id_carrito, id_producto, cantidad, precio_unitario)
         VALUES (?, ?, ?, ?)`,
        [id_carrito, id_producto, cantidad, precio_unitario]
      );
    }

    res.status(200).json({ msg: 'Producto agregado al carrito exitosamente' });
  } catch (error) {
    console.error(' Error al agregar producto al carrito:', error);
    res.status(500).json({ msg: 'Error del servidor al agregar producto al carrito' });
  }
};