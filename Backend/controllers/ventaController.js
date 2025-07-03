import db from '../config/db.js'

export const realizarCheckout = async (req, res) => {
  const id_usuario = req.user.id;

  try {
    // Buscar carrito activo
    const [carrito] = await db.execute(
      "SELECT id FROM carrito WHERE id_usuario = ? AND activo = 1 LIMIT 1",
      [id_usuario]
    );

    if (carrito.length === 0) {
      return res.status(404).json({ msg: "No hay carrito activo para finalizar" });
    }

    const id_carrito = carrito[0].id;

    // Obtener productos del carrito_detalle
    const [items] = await db.execute(
      `SELECT id_producto, cantidad, precio_unitario
       FROM carrito_detalle
       WHERE id_carrito = ?`,
      [id_carrito]
    );

    if (items.length === 0) {
      return res.status(400).json({ msg: "El carrito está vacío" });
    }

    // Calcular total
    const total = items.reduce(
      (acc, item) => acc + item.cantidad * item.precio_unitario,
      0
    );

    // Insertar en tabla venta
    const [venta] = await db.execute(
      `INSERT INTO venta (id_usuario, fecha, total)
       VALUES (?, NOW(), ?)`,
      [id_usuario, total]
    );

    const id_venta = venta.insertId;

    // Insertar en detalle_venta
    for (const item of items) {
      await db.execute(
        `INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario)
         VALUES (?, ?, ?, ?)`,
        [id_venta, item.id_producto, item.cantidad, item.precio_unitario]
      );
    }

      const [resumen] = await db.execute(
      `SELECT dv.id_producto, dv.cantidad, dv.precio_unitario, p.nombre
       FROM detalle_venta dv
       JOIN productos p ON dv.id_producto = p.id
       WHERE dv.id_venta = ?`,
      [id_venta]
    );
    // Actualizar stock y eliminar si llega a 0
for (const item of items) {
  await db.execute(
    `UPDATE productos SET stock = stock - ? WHERE id = ?`,
    [item.cantidad, item.id_producto]
  );

  await db.execute(
    `DELETE FROM productos WHERE id = ? AND stock <= 0`,
    [item.id_producto]
  );
}




    // Eliminar el carrito (activado ON DELETE CASCADE)
    await db.execute("DELETE FROM carrito WHERE id = ?", [id_carrito]);


      res.status(200).json({
      msg: "Compra realizada con éxito",
      id_venta,
      resumen
    });
  } catch (error) {
    console.error("❌ Error al finalizar la compra:", error);
    res.status(500).json({ msg: "Error en el proceso de checkout" });
  }
};
