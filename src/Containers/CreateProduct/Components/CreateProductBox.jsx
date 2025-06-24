import "./CreateProductBoxStyle.css"
import React, { useState } from 'react';

const CreateProductBox = () => {
    const [producto, setProducto] = useState({
        nombre: 'Aceite de girasol',
        descripcion: "",
        precio: 2900,
        stock: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };



    return (
        <div className="CajaCrearProducto">

            <div className="CajaImg">
                <label>Imagen del producto (URL):</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen}
                    onChange={handleChange}
                    placeholder="https://..."
                />

                <img
                    src={producto.imagen || 'https://via.placeholder.com/250'}
                    alt="Vista previa"
                    className="ProductoImagenCrPr"
                />
            </div>

            <div className="TextoCrearProducto">
                <label>Nombre del Producto</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                    placeholder="Ingrese el nombre del producto"
                />


                <label htmlFor="">Descripcion: </label>
                <textarea
                    id="tipo"
                    name="tipo"
                    value={producto.tipo}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Descripcion del Producto"
                />

                <div className="StockProducto">
                    <label htmlFor=""> Stock: </label>
                    <input type="number"
                    name="stock"
                    value={producto.stock}
                    onChange={handleChange} />
                </div>


                <div className="CajaPrecioCrPr">

                    <label htmlFor=""> Precio: </label>
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