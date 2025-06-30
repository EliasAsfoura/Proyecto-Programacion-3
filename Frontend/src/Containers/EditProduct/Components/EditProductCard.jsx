import "./EditProductCardStyle.css";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProductCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [editMode, setEditMode] = useState(false); // activa edición
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    stock: "",
    descripcion: "",
    imagen_url: "",
    categoria_id: "",
    tipo: "",
    pais: "",
    tipo_de_envase: ""
  });

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await axios.get(`http://localhost:3006/api/productos/${id}`);
        setProducto(res.data);
        setFormData({
          nombre: res.data.nombre,
          precio: res.data.precio,
          stock: res.data.stock,
          tamanio_unidad: res.data.tamanio_unidad,
          imagen_url: res.data.imagen_url,
          categoria_id: res.data.categoria_id,
          tipo: res.data.tipo,
          pais: res.data.pais,
          tipo_de_envase: res.data.tipo_de_envase
        });
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleEliminar = async () => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este producto?");
    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:3006/api/productos?id=${id}`);
      alert("Producto eliminado con éxito");
      navigate("/productos");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      alert("No se pudo eliminar el producto");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGuardarCambios = async () => {
    try {
      await axios.put(`http://localhost:3006/api/productos/${id}`, formData);
      alert("Producto actualizado con éxito");
      setEditMode(false);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      alert("No se pudo actualizar el producto");
    }
  };

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="PosicionarCaja">
    <div className="CajaVistaEditarProducto">
      <button className="BotonEdit" onClick={() => setEditMode(!editMode)}>
        {editMode ? "Cancelar edición" : "✏️"}
      </button>

      {editMode ? (
        <input
          name="imagen_url"
          value={formData.imagen_url}
          onChange={handleChange}
        />
      ) : (
        <img
          src={producto.imagen_url}
          alt="ProductImage"
          style={{ width: "25vw", border: "2px solid black", margin: "35px" }}
        />
      )}

      <div className="TextoProducto">
        <h2>
          {editMode ? (
            <input name="nombre" value={formData.nombre} onChange={handleChange} />
          ) : (
            producto.nombre
          )}
          <br />
          {editMode ? (
            <input name="tamanio_unidad" value={formData.tamanio_unidad} onChange={handleChange} />
          ) : (
            producto.tamanio_unidad
          )}
        </h2>

        <ul>
          <li>
            Tipo de producto:{" "}
            {editMode ? (
              <input name="tipo" value={formData.tipo} onChange={handleChange} />
            ) : (
              producto.tipo
            )}
          </li>
          <li>
            País de origen:{" "}
            {editMode ? (
              <input name="pais" value={formData.pais} onChange={handleChange} />
            ) : (
              producto.pais
            )}
          </li>
          <li>
            Tipo de envase:{" "}
            {editMode ? (
              <input name="tipo_de_envase" value={formData.tipo_de_envase} onChange={handleChange} />
            ) : (
              producto.tipo_de_envase
            )}
          </li>
        </ul>

        <div>
          <h4>
            Stock:{" "}
            {editMode ? (
              <input
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleChange}
              />
            ) : (
              producto.stock
            )}
          </h4>
        </div>

        <div className="CajaPrecio">
          <p>
            Precio: $
            {editMode ? (
              <input
                name="precio"
                type="number"
                value={formData.precio}
                onChange={handleChange}
              />
            ) : (
              producto.precio
            )}
          </p>
        </div>

        {editMode && (
          <div className="CajaEditarProducto">
            <button className="ButtonEditarProducto" onClick={handleGuardarCambios}>
              <p>💾 Guardar Cambios</p>
            </button>
          </div>
        )}

        <div className="CajaEliminarProducto">
          <button onClick={handleEliminar} className="ButtonEliminarProducto">
            <p>🗑️ Eliminar Producto</p>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EditProductCard;
