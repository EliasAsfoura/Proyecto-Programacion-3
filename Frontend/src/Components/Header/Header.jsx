import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import LogoHeader from "../../assets/LogoHeader.svg";
import InicioHeader from "../../assets/InicioHeader.svg";
import ProductosHeader from "../../assets/ProductosHeader.svg";
import ContactoHeader from "../../assets/ContactoHeader.svg";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginHeader from "../../assets/LoginHeader.svg";

import "./HeaderStyle.css";

const Header = () => {
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();
  const rol = localStorage.getItem("rol");

  useEffect(() => {
    const fetchCarrito = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:3006/api/carrito", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCarrito(res.data); // se espera un array de productos
      } catch (error) {
        console.error("Error al cargar el carrito en el header:", error);
      }
    };

    fetchCarrito();
  }, []);

  const cantidadDeProductosUnicos = carrito.length;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && busqueda.trim() !== "") {
      navigate(`/productos?nombre=${encodeURIComponent(busqueda.trim())}`);
      setBusqueda("");
    }
  };

  return (
    <div className="CajaContainer">
      <div className="BackgroundHeader" />
      <img src={LogoHeader} alt="Logo-Header" style={{ position: "absolute" }} />
      <div className="ContenidoHeader">

        <input
          className="BuscadorProductos"
          type="search"
          placeholder="Buscar productos.."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <a href="/inicio">
          <img src={InicioHeader} alt="Inicio" />
        </a>

        <a href="/productos">
          <img src={ProductosHeader} alt="Productos" />
        </a>

        <a href="/contacto">
          <img src={ContactoHeader} alt="Contacto" />
        </a>

        {rol === "admin" ? (
          <a className="Agregar" href="/createProduct">
            Agregar Producto
          </a>
        ) : (
          <a href="/carrito" style={{ display: "flex", alignItems: "center" }}>
            <Badge
              badgeContent={cantidadDeProductosUnicos}
              color="secondary"
              overlap="rectangular"
            >
              <ShoppingCartIcon style={{ fontSize: 30, color: "black" }} />
            </Badge>
          </a>
        )}

        <a href="/login">
          <img src={LoginHeader} alt="Login" />
        </a>
      </div>
    </div>
  );
};

export default Header;
