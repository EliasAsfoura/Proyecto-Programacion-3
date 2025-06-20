import LogoHeader from "../../assets/LogoHeader.svg"
import InicioHeader from "../../assets/InicioHeader.svg"
import ProductosHeader from "../../assets/ProductosHeader.svg"
import ContactoHeader from "../../assets/ContactoHeader.svg"
import MiCarritoHeader from "../../assets/MiCarritoHeader.svg"
import LoginHeader from "../../assets/LoginHeader.svg"
import "./HeaderStyle.css"

const Header = () => {

    return (
        <div class="CajaContainer">
            <div class="BackgroundHeader" />
            <img src={LogoHeader} alt="Logo-Header" style={{position: "absolute"}} />
            <div class="ContenidoHeader">
                

                
                    <a href="/inicio">
                        <img src={InicioHeader} alt="" />
                    </a>
                

                
                    <a href="/productos">
                        <img src={ProductosHeader} alt="" />
                    </a>
                

                
                    <a href="/contacto">
                        <img src={ContactoHeader} alt="" />
                    </a>
                

                
                    <a href="">
                        <img src={MiCarritoHeader} alt="" />
                    </a>

                    <a href="/login">
                        <img src={LoginHeader} alt="" />
                    </a>
                

            </div>
        </div>
    )
}

export default Header;