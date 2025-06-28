import Header from "../../Components/Header/Header";
import CreateProductBox from "./Components/CreateProductBox"
import Footer from "../../Components/Footer/Footer";

const CreateProduct = () => {
    return (
        <>
            <Header />

            <div style={{ display: "flex", justifyContent: "center" }}>
                <CreateProductBox />
            </div>

            <Footer />
        </>

    )
}

export default CreateProduct;