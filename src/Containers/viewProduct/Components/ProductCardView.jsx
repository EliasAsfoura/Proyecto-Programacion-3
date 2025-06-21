import AceiteDeGirasol from "../../Productos/Assets-Productos/AceiteDeGirasol.jpg";
import "./ProductCardViewStyle.css"

const ProductCardView = () => {
    return (
        <div className="CajaVistaProducto">
            <img src={AceiteDeGirasol} alt="ProductImage" style={{width: "30vw", border: "2px solid black", margin: "30px"}} />
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
            </div>



        </div>
    )
}

export default ProductCardView;