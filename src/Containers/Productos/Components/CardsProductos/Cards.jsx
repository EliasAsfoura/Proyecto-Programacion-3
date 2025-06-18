import AceiteDeGirasol from "../../Assets-Productos/AceiteDeGirasol.jpg"
import PapasLays from "../../Assets-Productos/PapasLays.jpeg"
import GalletasOreo from "../../Assets-Productos/GalletasOreo.jpg"
import CocaCola from "../../Assets-Productos/CocaCola.jpg"
import SandwichMiga from "../../Assets-Productos/SandwichMiga.jpg"
import HuevoKinder from "../../Assets-Productos/HuevoKinder.jpg"
import MirindaManzana from "../../Assets-Productos/MirindaManzana.jpg"
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
            <div className="CardProducto">
                <h2>
                    Mirinda Manzana
                </h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={MirindaManzana} alt="" style={{ width: "190px", height: "180px" }} />
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