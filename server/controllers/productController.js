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