import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./CarroDeComprasStyle.css";

const CarroDeCompras = () => {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCarrito = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:3006/api/carrito", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCarrito(res.data);
      } catch (error) {
        console.error("Error al cargar el carrito:", error);
      }
    };

    fetchCarrito();
  }, []);

  const handleCantidadChange = (id_producto, nuevaCantidad) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id_producto === id_producto
          ? { ...item, cantidad: parseInt(nuevaCantidad) || 0 }
          : item
      )
    );
  };

  const handleActualizarCantidad = async (id_producto, cantidad) => {
    const token = localStorage.getItem("token");

    try {
      if (cantidad <= 0) {
        await axios.delete(`http://localhost:3006/api/carrito/${id_producto}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.put(
          "http://localhost:3006/api/carrito",
          { id_producto, cantidad },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }

      const res = await axios.get("http://localhost:3006/api/carrito", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCarrito(res.data);
    } catch (error) {
      console.error("Error al actualizar/eliminar producto:", error);
    }
  };

  const handleVaciarCarrito = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete("http://localhost:3006/api/carrito", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCarrito([]);
      navigate("/productos"); 
    } catch (error) {
      console.error("Error al eliminar el carrito:", error);
    }
  };

  const handleActualizarCarritoCompleto = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      for (const item of carrito) {
        if (item.cantidad > 0) {
          await axios.put(
            "http://localhost:3006/api/carrito",
            {
              id_producto: item.id_producto,
              cantidad: item.cantidad,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        } else {
          await axios.delete(`http://localhost:3006/api/carrito/${item.id_producto}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }
      }

      const res = await axios.get("http://localhost:3006/api/carrito", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCarrito(res.data);
    } catch (error) {
      console.error("Error al actualizar el carrito:", error);
    }
  };

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.post("http://localhost:3006/api/venta/checkout", {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

     const { id_venta, resumen } = res.data;

    let mensaje = `✅ Compra realizada con éxito\nID de Venta: ${id_venta}\n\nDetalle:\n`;

    resumen.forEach(item => {
      mensaje += `• ${item.cantidad} x ${item.nombre} a $${item.precio_unitario} c/u\n`;
    });

    alert(mensaje);

    setCarrito([]);
    navigate("/productos");
  } catch (error) {
    console.error("Error en el checkout:", error);
    alert("❌ Error al finalizar la compra");
  }
};

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
                    src={item.imagen_url}
                    alt={item.nombre}
                    className="thumb"
                  />
                  <span>{item.nombre}</span>
                </td>
                <td>${item.precio_unitario}</td>
                <td className="Cantidad">
                  <input
                    type="number"
                    min="0"
                    value={item.cantidad}
                    onChange={(e) => handleCantidadChange(item.id_producto, e.target.value)}
                  />
                </td>
                <td>${calcularSubtotal(item)}</td>
                <td className="Acciones">
                  <button className="IconoEdit" onClick={() => handleActualizarCantidad(item.id_producto, item.cantidad)}>✏️</button>
                  <button className="IconoRemover" onClick={() => handleActualizarCantidad(item.id_producto, 0)}>🗙</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="AccionesGeneralesCarro">
          <button className="BotonClear" onClick={handleVaciarCarrito}>Eliminar Carrito</button>
          <button className="BotonUpdate" onClick={handleActualizarCarritoCompleto}>Actualizar Carrito</button>
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

        <button className="BotonCheckout" onClick={handleCheckout}>Hacer compra</button>
      </aside>
    </>
  );
};

export default CarroDeCompras;
