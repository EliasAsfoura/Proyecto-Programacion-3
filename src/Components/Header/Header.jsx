import LogoHeader from "../../assets/LogoHeader.svg"
import InicioHeader from "../../assets/InicioHeader.svg"
import ProductosHeader from "../../assets/ProductosHeader.svg"
import ContactoHeader from "../../assets/ContactoHeader.svg"
import MiCarritoHeader from "../../assets/MiCarritoHeader.svg"
import "./HeaderStyle.css"

const Header = () => {

    return (
        <div class="headerContainer">
            <div class="headerBackground" />
            <img src={LogoHeader} alt="Logo-Header" style={{position: "absolute"}} />
            <div class="headerContent">
                

                
                    <a href="">
                        <img src={InicioHeader} alt="" />
                    </a>
                

                
                    <a href="">
                        <img src={ProductosHeader} alt="" />
                    </a>
                

                
                    <a href="">
                        <img src={ContactoHeader} alt="" />
                    </a>
                

                
                    <a href="">
                        <img src={MiCarritoHeader} alt="" />
                    </a>
                

            </div>
        </div>
    )
}

export default Header;