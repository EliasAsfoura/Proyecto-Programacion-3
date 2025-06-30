// controllers/carritoController.js
import db from "../config/db.js";

// 1. Obtener o crear carrito para un usuario
// export const obtenerCarritoUsuario = async (req, res) => {
//   const { usuario_id } = req.params;

//   try {
//     let [carrito] = await db.query(
//       "SELECT * FROM carrito_producto WHERE usuario_id = ? ORDER BY id DESC LIMIT 1",
//       [usuario_id]
//     );

//     if (carrito.length === 0) {
//       const [resultado] = await db.query(
//         "INSERT INTO carritos (usuario_id) VALUES (?)",
//         [usuario_id]
//       );
//       return res.status(201).json({ id: resultado.insertId });
//     }

//     res.json(carrito[0]);
//   } catch (error) {
//     console.error("Error al obtener carrito:", error);
//     res.status(500).json({ msg: "Error al obtener carrito" });
//   }
// };

// 2. Agregar producto al carrito
export const agregarProductoACarrito = async (req, res) => {
  const { usuario_id, producto_id, cantidad, precio_unitario } = req.body;

  try {
    await db.execute(
      "INSERT INTO carrito_producto (usuario_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
      [usuario_id, producto_id, cantidad, precio_unitario]
    );

    res.status(201).json({ message: "Producto agregado al carrito" });
  } catch (error) {
    console.error("Error al agregar producto al carrito:", error);
    res.status(500).json({ message: "Error al agregar producto al carrito" });
  }
};


// 3. Checkout: crear orden y detalles desde el carrito
export const realizarCheckout = async (req, res) => {
  const { carrito_id, usuario_id } = req.body;

  try {
    const [productos] = await db.query(
      `SELECT cp.producto_id, cp.cantidad, p.precio
       FROM carrito_producto cp
       JOIN productos p ON cp.producto_id = p.id
       WHERE cp.carrito_id = ?`,
      [carrito_id]
    );

    if (productos.length === 0) {
      return res.status(400).json({ msg: "El carrito está vacío" });
    }

    let total = 0;
    for (const p of productos) {
      total += p.precio * p.cantidad;
    }

    const [orden] = await db.query(
      "INSERT INTO ordenes (usuario_id, total) VALUES (?, ?)",
      [usuario_id, total]
    );

    const orden_id = orden.insertId;

    for (const p of productos) {
      await db.query(
        `INSERT INTO orden_detalle (orden_id, producto_id, cantidad, precio_unitario)
         VALUES (?, ?, ?, ?)`,
        [orden_id, p.producto_id, p.cantidad, p.precio]
      );
    }

    await db.query("DELETE FROM carrito_producto WHERE carrito_id = ?", [carrito_id]);

    res.status(201).json({ msg: "Orden creada exitosamente", orden_id });
  } catch (error) {
    console.error("Error en el checkout:", error);
    res.status(500).json({ msg: "Error al realizar el checkout" });
  }
};
