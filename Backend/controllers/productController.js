import db from '../config/db.js'

export const getProducts = async (req,res) => {
    try{

        const[rows]=await db.execute("SELECT * FROM productos");
        res.json(rows);

    } catch(error){

        console.log("Error al obtener productos: ", error);
        res.status(500).json({msg:"Error al obtener productos"});

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

