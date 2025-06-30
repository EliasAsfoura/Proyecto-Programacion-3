import AsideInicio from "/public/productos-images/AsideInicio.svg";
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
        </div>
    )
}

export default AsideInicioDiv
