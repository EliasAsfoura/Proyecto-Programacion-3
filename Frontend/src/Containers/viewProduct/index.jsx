import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProductCardView from "./Components/ProductCardView";


const ViewProduct = () => {
    return (
        <>
            <Header />

            <div style={{display:"flex", justifyContent:"center"}}>
                <ProductCardView/>
            </div>
            
            <Footer />
        </>
    )
}

export default ViewProduct;