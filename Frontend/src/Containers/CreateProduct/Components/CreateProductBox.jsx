import "./CreateProductBoxStyle.css";
import React, { useState } from 'react';
import axios from "axios";

const CreateProductBox = () => {
    const [producto, setProducto] = useState({
        nombre: 'Aceite girasol',
        precio: 1,
        stock: 1,
        imagen_url: 'url de la imagen',
        categoria_id: 6, 
        tipo: 'Aceites',
        pais: 'Argentina',
        tipo_de_envase: 'Plastico',
        tamanio_unidad: '900ml'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3006/api/productos", producto);
            alert("Producto creado con éxito (ID: " + res.data.id + ")");
        } catch (error) {
            console.error("Error al crear producto:", error);
            alert("Error al crear producto");
        }
    };

    return (
        <form className="CajaCrearProducto" onSubmit={handleSubmit}>
            <div className="CajaImg">
                <label>Imagen del producto (URL):</label>
                <input
                    type="text"
                    name="imagen_url"
                    value={producto.imagen_url}
                    onChange={handleChange}
                    placeholder="https://..."
                />
                <img
                    src={producto.imagen_url || 'https://via.placeholder.com/250'}
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

                <label>Tamaño unidad</label>
                <input
                    name="tamanio_unidad"
                    value={producto.tamanio_unidad}
                    onChange={handleChange}
                    placeholder="Tamaño de la unidad"
                />

                <label>Tipo</label>
                <input
                    type="text"
                    name="tipo"
                    value={producto.tipo}
                    onChange={handleChange}
                    placeholder="Tipo de producto"
                />

                <label>País</label>
                <input
                    type="text"
                    name="pais"
                    value={producto.pais}
                    onChange={handleChange}
                    placeholder="Pais procediente"
                />

                <label>Tipo de envase</label>
                <input
                    type="text"
                    name="tipo_de_envase"
                    value={producto.tipo_de_envase}
                    onChange={handleChange}
                    placeholder="Tipo de envase"
                />


                <div className="StockProducto">
                    <label>Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={producto.stock}
                        onChange={handleChange}
                        placeholder="Stock del producto"
                    />
                </div>

                <div className="CajaPrecioCrPr">
                    <label>Precio</label>
                    <input
                        type="number"
                        name="precio"
                        value={producto.precio}
                        onChange={handleChange}
                        placeholder="Precio del producto"
                    />
                </div>

                <div className="CajaAgregarCarritoCrPr">
                    <button type="submit" className="ButtonAgregarCarritoCrPr">
                        <p>Subir Producto</p>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreateProductBox;
