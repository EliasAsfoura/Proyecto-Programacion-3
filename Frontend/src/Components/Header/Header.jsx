import LogoHeader from "../../assets/LogoHeader.svg"
import InicioHeader from "../../assets/InicioHeader.svg"
import ProductosHeader from "../../assets/ProductosHeader.svg"
import ContactoHeader from "../../assets/ContactoHeader.svg"
import MiCarritoHeader from "../../assets/MiCarritoHeader.svg"
import LoginHeader from "../../assets/LoginHeader.svg"
import AgregarProductos from"../../assets/AgregarProductos.png"
import "./HeaderStyle.css"

const Header = () => {
    const rol = localStorage.getItem("rol");

    return (
        <div className="CajaContainer">
            <div className="BackgroundHeader" />
            <img src={LogoHeader} alt="Logo-Header" style={{position: "absolute"}} />
            <div className="ContenidoHeader">

                

                
                    <a href="/inicio">
                        <img src={InicioHeader} alt="" />
                    </a>
                

                
                    <a href="/productos">
                        <img src={ProductosHeader} alt="" />
                    </a>
                

                
                    <a href="/contacto">
                        <img src={ContactoHeader} alt="" />
                    </a>
                

                
                    

                {rol === "admin" ? (
                <a className="Agregar" href="/createProduct">
                    Agregar Producto
                </a>
                ) : (
               <a href="/carrito">
                        <img src={MiCarritoHeader} alt="" />
                </a>
                )}
                <a href="/login">
                    <img src={LoginHeader} alt="Login" />
                </a>

            </div>
        </div>
    )
}

export default Header;