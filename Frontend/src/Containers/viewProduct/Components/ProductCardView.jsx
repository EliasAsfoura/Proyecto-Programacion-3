import "./ProductCardViewStyle.css";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductCardView = () => {
  const { id } = useParams(); // 🆔 Captura el ID de la URL (ej: /viewproduct/1)
  const [producto, setProducto] = useState(null);
  const [Contador, setContador] = useState(1);

  const increment = () => setContador(prev => prev + 1);
  const decrement = () => setContador(prev => (prev > 1 ? prev - 1 : 1));

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
    <div className="CajaVistaProducto">

      <img
        src={`/productos-images/${producto.imagen_url}`}
        alt="ProductImage"
        style={{ width: "30vw", border: "2px solid black", margin: "35px" }}
      />

      <div className="TextoProducto">
        <h2>
          {producto.nombre}
          <br />
          {producto.descripcion}
        </h2>

        <ul>
          <li>Tipo de producto: {producto.tipo}</li>
          <li>País de origen: {producto.origen}</li>
          <li>Tipo de envase: {producto.envase}</li>
        </ul>

        <div className="ContadorCaja">
          <button className="ContadorBoton" onClick={decrement}>−</button>
          <span>{Contador}</span>
          <button className="ContadorBoton" onClick={increment}>+</button>
        </div>

        <div className="CajaPrecio">
          <p>Precio: ${producto.precio}</p>
        </div>

        <div className="CajaAgregarCarrito">
          <button className="ButtonAgregarCarrito">
            <p>Agregar al carrito</p>
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCardView;
