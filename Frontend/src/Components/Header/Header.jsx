import LogoHeader from "../../assets/LogoHeader.svg";
import InicioHeader from "../../assets/InicioHeader.svg";
import ProductosHeader from "../../assets/ProductosHeader.svg";
import ContactoHeader from "../../assets/ContactoHeader.svg";
// import MiCarritoHeader from "../../assets/MiCarritoHeader.svg"; // ya no lo usamos
import LoginHeader from "../../assets/LoginHeader.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./HeaderStyle.css";

const Header = ({ cartCount = 2 }) => {
  return (
    <div className="CajaContainer">
      <div className="BackgroundHeader" />
      <img src={LogoHeader} alt="Logo-Header" style={{ position: "absolute" }} />
      <div className="ContenidoHeader">
        <input
          className="BuscadorProductos"
          type="search"
          placeholder="Buscar productos.."
        />

        <a href="/inicio">
          <img src={InicioHeader} alt="" />
        </a>

        <a href="/productos">
          <img src={ProductosHeader} alt="" />
        </a>

        <a href="/contacto">
          <img src={ContactoHeader} alt="" />
        </a>

        <a href="/carrito" style={{ display: "flex", alignItems: "center" }}>
          <Badge badgeContent={cartCount} color="secondary" overlap="rectangular">
            <ShoppingCartIcon style={{ fontSize: 30, color: "black" }} />
          </Badge>
        </a>

        <a href="/login">
          <img src={LoginHeader} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;