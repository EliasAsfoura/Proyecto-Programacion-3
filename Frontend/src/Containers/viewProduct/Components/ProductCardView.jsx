import "./ProductCardViewStyle.css";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCardView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [Contador, setContador] = useState(1);

  //Funcion para volver a productos
  const handleVolver = () => {
    navigate("/productos");
  };

  // Setea el contador de stock
  const increment = () => setContador(prev => prev + 1);
  const decrement = () => setContador(prev => (prev > 1 ? prev - 1 : 1));

  // useEffect que segun el id va cambiando el producto
  useEffect(() => {

    // Trae el producto por id en la url
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

  // Funciopn para agregar al carrito
  const handleAgregarAlCarrito = async () => {
  
  //Obtiene el token del localstorage
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Por favor, iniciá sesión para agregar productos al carrito");
    return;
  }


  try {
    // Postea la cantidad y el producto agregado al carrito
    await axios.post(
      "http://localhost:3006/api/carrito/agregar",
      {
        id_producto: producto.id,
        cantidad: Contador
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    navigate("/carrito");
  } catch (error) {
    console.error("No se pudo agregar al carrito", error);
    alert("No se pudo agregar el producto al carrito");
  }
};


  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="CajaVistaProducto">

      <div className="BotonVolverProductos">
        <button onClick={handleVolver } >X</button>
      </div>

      <img
        src={producto.imagen_url}
        alt="ProductImage"
        style={{ width: "30vw", border: "2px solid black", margin: "35px" }}
      />

      <div className="TextoProducto">
        <h2>
          {producto.nombre}
          <br />
          {producto.tamanio_unidad}
        </h2>

        <ul>
          <li>Tipo de producto: {producto.tipo}</li>
          <li>País de origen: {producto.pais}</li>
          <li>Tipo de envase: {producto.tipo_de_envase}</li>
        </ul>

        <div className="ContadorCaja">
          <button className="ContadorBoton" onClick={decrement}>−</button>
          <span>{Contador}</span>
          <button className="ContadorBoton" onClick={increment}>+</button>
        </div>

        <div className="CajaPrecio">
          <p>Precio: ${producto.precio}</p>
        </div>

        <button className="ButtonAgregarCarrito" onClick={handleAgregarAlCarrito}>
          <p>Agregar al carrito</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCardView;


