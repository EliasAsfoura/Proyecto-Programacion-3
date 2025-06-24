import AceiteDeGirasol from "../../../../public/Assets-Productos/AceiteDeGirasol.jpg";
import "./ProductCardViewStyle.css"
import React, { useState } from 'react';

const ProductCardView = () => {

    const [Contador, setContador] = useState(1);

    const increment = () => setContador(prev => prev + 1);
    const decrement = () => setContador(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="CajaVistaProducto">

            <img src={AceiteDeGirasol} alt="ProductImage" style={{ width: "30vw", border: "2px solid black", margin: "35px" }} />

            <div className="TextoProducto">
                <h2>Aceite de girasol
                    <br />
                    Natura - 900ml
                </h2>

                <ul>
                    <li>

                        Tipo de producto: Aceites de girasol
                    </li>

                    <li>
                        País de origen: Argentina
                    </li>

                    <li>
                        Tipo de envase: Plastico
                    </li>
                </ul>

                <div className="ContadorCaja">
                    <button className="ContadorBoton" onClick={decrement}>−</button>
                    <span> {Contador} </span>
                    <button className="ContadorBoton" onClick={increment}>+</button>
                </div>

                <div className="CajaPrecio">
                    <p>Precio: $2900</p>
                </div>

                <div className="CajaAgregarCarrito">
                    <button className="ButtonAgregarCarrito">
                        <p>Agregar al carrito</p>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ProductCardView;