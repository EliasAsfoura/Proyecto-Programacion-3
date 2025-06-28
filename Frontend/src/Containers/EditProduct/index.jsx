import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import EditProductCard from "./Components/EditProductCard";


const EditProduct = () => {
    return (
        <>
            <Header />

            <div style={{display:"flex", justifyContent:"center"}}>
                <EditProductCard />
            </div>
            
            <Footer />
        </>
    )
}

export default EditProduct;