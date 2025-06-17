import AceiteDeGirasol from "../../../Productos/Assets-Productos/AceiteDeGirasol.jpg"
import PapasLays from "../../../Productos/Assets-Productos/PapasLays.jpeg"
import GalletasOreo from "../../../Productos/Assets-Productos/GalletasOreo.jpg"
import CocaCola from "../../../Productos/Assets-Productos/CocaCola.jpg"
import SandwichMiga from "../../../Productos/Assets-Productos/SandwichMiga.jpg"
import HuevoKinder from "../../../Productos/Assets-Productos/HuevoKinder.jpg"
import "./CardsStyle.css"

const Cards = () => {

    return (
        <main className="Productos">

            <div className="CardProducto">
                <h2>Aceite</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={AceiteDeGirasol} alt="" style={{ width: "190px", height: "180px" }} />
                </div>
                <div className="CajaBotonProducto">
                    <button >
                        <p>Comprar</p>
                    </button>
                </div>
            </div>

            <div className="CardProducto">
                <h2>Papas Lays Clasicas</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={PapasLays} alt="" style={{ width: "190px", height: "180px" }} />
                </div>
                <div className="CajaBotonProducto">
                    <button >
                        <p>Comprar</p>
                    </button>
                </div>
            </div>

            <div className="CardProducto">
                <h2>
                    Galletas Oreo
                </h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={GalletasOreo} alt="" style={{ width: "190px", height: "180px" }} />
                </div>
                <div className="CajaBotonProducto">
                    <button >
                        <p>Comprar</p>
                    </button>
                </div>
            </div>

            <div className="CardProducto">
                <h2>
                    Coca Cola
                </h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={CocaCola} alt="" style={{ width: "190px", height: "180px" }} />
                </div>
                <div className="CajaBotonProducto">
                    <button >
                        <p>Comprar</p>
                    </button>
                </div>
            </div>

            <div className="CardProducto">
                <h2>
                    Sandwich de miga
                </h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={SandwichMiga} alt="" style={{ width: "190px", height: "180px" }} />
                </div>
                <div className="CajaBotonProducto">
                    <button >
                        <p>Comprar</p>
                    </button>
                </div>
            </div>

            <div className="CardProducto">
                <h2>
                    Huevo Kinder
                </h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={HuevoKinder} alt="" style={{ width: "190px", height: "180px" }} />
                </div>

                <div className="CajaBotonProducto">
                    <button >
                        <p>
                            Comprar
                        </p>
                    </button>
                </div>
            </div>

        </main>
    )

}

export default Cards