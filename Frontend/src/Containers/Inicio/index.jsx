import Header from "../../Components/Header/Header";
import Carrusel from "./Components/Carrusel";
import Cards from "../Productos/Components/CardsProductos/Cards";
import Footer from "../../Components/Footer/Footer";
import AsideInicioDiv from "./Components/AsideInicioDiv"

const Inicio = () => {

    return (
        <>
            <Header />

            <Carrusel/>

            <AsideInicioDiv/>

            <Cards/>

            <Footer />

        </>
    )

}

export default Inicio;