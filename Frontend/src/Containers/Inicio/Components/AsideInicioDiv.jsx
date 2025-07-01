import AsideInicio from "../Assests-Inicio/AsideInicio.svg";
import AsideInicio2 from "../Assests-Inicio/AsideInicio2.svg";
import AsideInicio3 from "../Assests-Inicio/AsideInicio3.svg";
import AsideInicio4 from "../Assests-Inicio/AsideInicio4.svg";
import { useNavigate } from "react-router-dom";
import "./AsideStyle.css"

const AsideInicioDiv = () => {
     const navigate = useNavigate();

    const handleClick = () => {
        navigate("/productos");
    };

    return (
        <div className="EstilosAside">
            <img src={AsideInicio} alt="Ir a productos" onClick={handleClick} style={{ cursor: "pointer" }} />
            <img src={AsideInicio2} alt="Ir a productos" onClick={handleClick} style={{ cursor: "pointer" }} />
            <img src={AsideInicio3} alt="Ir a productos" onClick={handleClick} style={{ cursor: "pointer" }} />
            <img src={AsideInicio4} alt="Ir a productos" onClick={handleClick} style={{ cursor: "pointer" }} />
        </div>
    )
}

export default AsideInicioDiv
