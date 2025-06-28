import "./EditProductCardStyle.css";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProductCard = () => {
  const { id } = useParams(); // 🆔 Captura el ID de la URL (ej: /viewproduct/1)
  const [producto, setProducto] = useState(null);


  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await axios.get(`http://localhost:3006/api/productos/${id}`);
        setProducto(res.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="CajaVistaEditarProducto">

      <button className="BotonEdit">✏️</button>
      <img
        src={`/productos-images/${producto.imagen_url}`}
        alt="ProductImage"
        style={{ width: "30vw", border: "2px solid black", margin: "35px" }}
      />
      

      <div className="TextoProducto">
        <h2>
          {producto.nombre} <button className="BotonEdit">✏️</button>
          <br />
          {producto.tamanio_unidad} <button className="BotonEdit">✏️</button>
        </h2>

        <ul >
          <li>Tipo de producto: {producto.tipo} <button className="BotonEdit">✏️</button>  </li>
          <li>País de origen: {producto.pais} <button className="BotonEdit">✏️</button> </li>          
          <li>Tipo de envase: {producto.tipo_de_envase} <button className="BotonEdit">✏️</button> </li> 
        </ul>

        <div >
          <h4>Stock: {producto.stock} <button className="BotonEdit">✏️</button></h4>
        </div>

        <div className="CajaPrecio">
          <p>Precio: ${producto.precio}<button className="BotonEdit">✏️</button></p>
        </div>

        <div className="CajaEditarProducto">
          <button className="ButtonEditarProducto">
            <p>Editar Producto</p>
          </button>
        </div>
      </div>

    </div>
  );
};

export default EditProductCard;