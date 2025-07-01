import db from '../config/db.js'

export const getProducts = async (req, res) => {
  const { nombre } = req.query;

  try {
    let query = "SELECT * FROM productos";
    let params = [];

    // Si llega ?nombre=algo en la URL, se filtra
    if (nombre) {
      query += " WHERE nombre LIKE ?";
      params.push(`%${nombre}%`);
    }

    const [rows] = await db.execute(query, params);
    res.json(rows);
  } catch (error) {
    console.log("Error al obtener productos: ", error);
    res.status(500).json({ msg: "Error al obtener productos" });
  }
};

export const getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM productos WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error al obtener el producto por ID:", error);
    res.status(500).json({ msg: "Error del servidor" });
  }
};
// controllers/productController.js

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  const {
    nombre,
    descripcion,
    precio,
    stock,
    imagen_url,
    categoria_id,
    tipo,
    pais,
    tipo_de_envase,
    tamanio_unidad
  } = req.body;

  if (!nombre || !precio || !stock || !imagen_url || !categoria_id) {
    return res.status(400).json({ msg: "Faltan campos obligatorios" });
  }

  try {
    const [result] = await db.execute(
      `INSERT INTO productos 
      (nombre, descripcion, precio, stock, imagen_url, categoria_id, tipo, pais, tipo_de_envase, tamanio_unidad)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nombre,
        descripcion || "",
        precio,
        stock,
        imagen_url,
        categoria_id,
        tipo || "",
        pais || "",
        tipo_de_envase || "",
        tamanio_unidad || ""
      ]
    );

    res.status(201).json({ message: "Producto creado correctamente", id: result.insertId });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error al crear producto" });
  }
};

export const deleteProducto = async (req, res) => {
  const id = req.query.id;


  try {
    const [result] = await db.query("DELETE FROM productos WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json({ message: "Producto eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar producto: caracoño", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateProducto = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    descripcion,
    precio,
    stock,
    imagen_url,
    categoria_id,
    tipo,
    pais,
    tipo_de_envase,
    tamanio_unidad
  } = req.body;

  try {
    const [result] = await db.query(
      `UPDATE productos SET 
        nombre = ?, 
        descripcion = ?, 
        precio = ?, 
        stock = ?, 
        imagen_url = ?, 
        categoria_id = ?, 
        tipo = ?, 
        pais = ?, 
        tipo_de_envase = ?, 
        tamanio_unidad = ? 
      WHERE id = ?`,
      [
        nombre,
        descripcion,
        precio,
        stock,
        imagen_url,
        categoria_id,
        tipo,
        pais,
        tipo_de_envase,
        tamanio_unidad,
        id
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ error: "Error al actualizar producto" });
  }
};


