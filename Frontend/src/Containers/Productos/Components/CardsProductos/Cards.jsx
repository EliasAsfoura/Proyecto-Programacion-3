import { useEffect, useState } from "react";
import axios from "axios";
import "./CardsStyle.css";
import { useLocation } from "react-router-dom";

const Cards = () => {
  const [productos, setProductos] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const filtro = query.get("nombre") || "";

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await axios.get(`http://localhost:3006/api/productos?nombre=${encodeURIComponent(filtro)}`);
        setProductos(res.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, [filtro]);

  return (
<main className="Productos">
      {filtro && <h2 style={{ color: "#333",  }}>Resultados para: "{filtro}"</h2>}
      {productos.length === 0 ? (
        <p>No se encontraron productos que coincidan con "{filtro}".</p>
      ) : (
        productos.map((producto) => (
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
        ))
      )}
    </main>
  );
};

export default Cards;