import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CarroDeComprasStyle.css";

const CarroDeCompras = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const res = await axios.get("http://localhost:3006/api/carrito"); // adaptá si tu endpoint es otro
        setCarrito(res.data);
      } catch (error) {
        console.error("Error al cargar el carrito:", error);
      }
    };

    fetchCarrito();
  }, []);

  const calcularSubtotal = (item) => item.precio_unitario * item.cantidad;

  const calcularTotal = () =>
    carrito.reduce((total, item) => total + calcularSubtotal(item), 0);

  return (
    <>
      <section className="CajaCarrito">
        <table className="TablaCarro">
          <thead>
            <tr>
              <th className="ColumnaItem">Producto</th>
              <th className="ColumnaPrecio">Precio</th>
              <th className="ColumnaCantidad">Cantidad</th>
              <th className="ColumnaSubtotal">Subtotal</th>
              <th className="ColumnaAccion"></th>
            </tr>
          </thead>

          <tbody>
            {carrito.map((item) => (
              <tr key={item.id_producto}>
                <td className="InfoProducto">
                  <img
                    src={`/productos-images/${item.imagen_url}`}
                    alt={item.nombre}
                    className="thumb"
                  />
                  <span>{item.nombre}</span>
                </td>
                <td>${item.precio_unitario}</td>
                <td className="Cantidad">
                  <input type="number" min="1" value={item.cantidad} readOnly />
                </td>
                <td>${calcularSubtotal(item)}</td>
                <td className="Acciones">
                  <button className="IconoEdit">✏️</button>
                  <button className="IconoRemover">🗙</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="AccionesGeneralesCarro">
          <button className="BotonClear">Limpiar Carrito</button>
          <button className="BotonUpdate">Actualizar Carrito</button>
        </div>
      </section>

      <aside className="PanelCompra">
        <h3>Resumen</h3>
        <details className="Envio">
          <summary>Estimado Compra y Envío</summary>
        </details>

        <div className="TotalPrecio">
          <span>Subtotal</span>
          <span>${calcularTotal()}</span>
        </div>

        <hr />

        <div className="TotalPrecio">
          <span>Total</span>
          <span>${calcularTotal()}</span>
        </div>

        <button className="BotonCheckout">Hacer checkout</button>
      </aside>
    </>
  );
};

export default CarroDeCompras;