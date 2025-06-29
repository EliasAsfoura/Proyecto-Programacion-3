import { useEffect, useState } from "react";
import axios from "axios";
import "./CardsStyle.css";

const Cards = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await axios.get("http://localhost:3006/api/productos");
        setProductos(res.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <main className="Productos">
      {productos.map((producto) => (
        <div className="CardProducto" key={producto.id}>
          <a href={`/viewproduct/${producto.id}`} style={{ textDecoration: "none" }}>
            <h2>{producto.nombre}</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                 src={`${producto.imagen_url}`}
                 alt={producto.nombre}
                 style={{ width: "190px", height: "180px" }}
              />
            </div>
            <div className="CajaBotonProducto">
              <button>
                <p>Comprar</p>
              </button>
            </div>
          </a>
        </div>
      ))}
    </main>
  );
};

export default Cards;
