import "./CreateProductBoxStyle.css";
import React, { useEffect,useState } from "react";

const CreateProductBox = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: 0,
    stock: 0,
    imagen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  useEffect(() => {
    console.log("Producto cambió:", producto);
}, [producto]);

  return (
    <div className="CajaCrearProducto">
      <div className="CajaImg">
        <label htmlFor="image-del-producto">Imagen del producto (URL):</label>
        <input
          type="text"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange}
          placeholder="https://..."
        />

        <img
          src={producto.imagen || "https://via.placeholder.com/250"}
          alt="Vista previa"
          className="ProductoImagenCrPr"
        />
      </div>

      <div className="TextoCrearProducto">
        <label htmlFor="nombre-del-producto">Nombre del Producto</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          placeholder="Ingrese el nombre del producto"
        />

        <label htmlFor="descripcion">Descripcion: </label>
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          rows="3"
          placeholder="Descripcion del Producto"
        />

        <label htmlFor="categoria">Categoría:</label>
        <select
          name="categoria"
          value={producto.categoria}
          onChange={handleChange}
        >
          <option value="">Selecciona una categoría</option>
          <option value="golosinas-y-chocolates">Golosinas y Chocolates</option>
          <option value="snacks">Snacks</option>
          <option value="pastas">Pastas</option>
          <option value="aderezos">Aderezos</option>
          <option value="arroz-y-legumbres">Arroz y Legumbres</option>
          <option value="bebidas">Bebidas</option>
          <option value="aceites-y-vinagres">Aceites y Vinagres</option>
          <option value="cigarrillos">Cigarrillos</option>
        </select>

        <div className="StockProducto">
          <label htmlFor="stock"> Stock: </label>
          <input
            type="number"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
          />
        </div>

        <div className="CajaPrecioCrPr">
          <label htmlFor="precio"> Precio: </label>
          <input
            type="number"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
          />
        </div>

        <div className="CajaAgregarCarritoCrPr">
          <button className="ButtonAgregarCarritoCrPr">
            <p>Subir Producto</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProductBox;
