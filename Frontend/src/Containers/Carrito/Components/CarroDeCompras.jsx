import AceiteDeGirasol from '/productos-images/AceiteDeGirasol.jpg';
import PapasLays from '/productos-images/PapasLays.jpeg';

import "./CarroDeComprasStyle.css"

const CarroDeCompras = () => {
    return (
        <>

            <section className="CajaCarrito">

                <table className="TablaCarro">
                    <thead>
                        <tr>
                            <th className="ColumnaItem" scope="col">Producto</th>
                            <th className="ColumnaPrecio" scope="col">Precio</th>
                            <th className="ColumnaCantidad" scope="col">Cantidad</th>
                            <th className="ColumnaSubtotal" scope="col">Subtotal</th>
                            <th className="ColumnaAccion" scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className="InfoProducto">
                                <img src={AceiteDeGirasol} alt="ImageProduct" className="thumb" />
                                <span>Aceite de girasol - Natura 900ml</span>
                            </td>

                            <td>$2.900</td>

                            <td className="Cantidad">
                                <input type="number" min="1" value="1" />
                            </td>

                            <td>$2.900</td>

                            <td className="Acciones">
                                <button className="IconoEdit">✏️</button>
                                <button className="IconoRemover"><span>🗙</span></button>
                            </td>
                        </tr>


                        <tr>
                            <td className="InfoProducto">
                                <img src={PapasLays} alt="ImageProduct" className="thumb" />
                                <span>Papas Lays 100g</span>
                            </td>

                            <td>$1.500</td>

                            <td className="Cantidad">
                                <input type="number" min="1" value="1" />
                            </td>

                            <td >$1.500</td>

                            <td classNameName="Acciones">
                                <button className="IconoEdit">✏️</button>
                                <button className="IconoRemover"><span>🗙</span></button>
                            </td>
                        </tr>
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
                    <summary>Estimado Compra y Envio</summary>
                </details>

                <div className="TotalPrecio">
                    <span>Subtotal</span>
                    <span>$4.400</span>
                </div>

                <hr />

                <div className="TotalPrecio">
                    <span>Total</span>
                    <span>4.400</span>
                </div>

                <button className="BotonCheckout">Hacer checkout</button>

            </aside>

        </>
    )
}

export default CarroDeCompras;