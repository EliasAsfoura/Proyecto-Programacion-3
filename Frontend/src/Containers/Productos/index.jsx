import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Cards from "./Components/CardsProductos/Cards"


const Productos = () => {
    return (
        <>
        <Header/>
        <div style={{marginRight:"120px"}}> 
            <Cards/>
        </div>
        <Footer/>
        </>
    )
}

export default Productos