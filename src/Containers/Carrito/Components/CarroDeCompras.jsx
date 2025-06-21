import { object } from "../../Productos/Components/CardsProductos/Cards"
import "./CarroDeComprasStyle.css"

const CarroDeCompras = () => {
    return (
        <><section class="cart-wrapper">

            <table class="cart-table">
                <thead>
                    <tr>
                        <th class="col-item" scope="col">Producto</th>
                        <th class="col-price" scope="col">Precio</th>
                        <th class="col-qty" scope="col">Cantidad</th>
                        <th class="col-sub" scope="col">Subtotal</th>
                        <th class="col-act" scope="col"></th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td class="prod-info">
                            <img src="shirt-black.jpg" alt="2023-24 Al Hilal Puma Training Shirt" class="thumb" />
                            <span class="title">2023-24 Al Hilal Puma Training Shirt - 7/10 - (M)</span>
                        </td>

                        <td class="price">$19.99</td>

                        <td class="qty">
                            <input type="number" min="1" value="1" />
                        </td>

                        <td class="subtotal">$19.99</td>

                        <td class="actions">
                            <button class="icon edit" >
                                ✏️
                            </button>

                        </td>
                    </tr>


                    <tr>
                        <td class="prod-info">
                            <img src="shirt-blue.jpg" alt="2017-18 Al Hilal Third Shirt" class="thumb" />
                            <span class="title">2017-18 Al Hilal Third Shirt - 7/10 - (XL)</span>
                        </td>

                        <td class="price">$44.99</td>

                        <td class="qty">
                            <input type="number" min="1" value="1" />
                        </td>

                        <td class="subtotal">$44.99</td>

                        <td class="actions">
                            <button class="icon edit" aria-label="Edit quantity">✏️</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="cart-actions">
                <button class="link clear">Clear Cart</button>
                <button class="btn update">Update Cart</button>
            </div>
        </section><aside class="summary-panel">
                <h3>Resumen</h3>
            <details class="shipping">
                    <summary>Estimado Compra y Envio</summary>

                </details>

                <div class="line">
                    <span>Subtotal</span>
                    <span class="value">$64.98</span>
                </div>

                <hr />

                <div class="line grand">
                    <span>Grand Total</span>
                    <span class="value">$64.98</span>
                </div>

                <button class="btn checkout">Hacer checkout</button>
                
            </aside></>
    )
}

export default CarroDeCompras;