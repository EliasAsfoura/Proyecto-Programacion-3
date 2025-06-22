import Footer from "../../Components/Footer/Footer";
import HeaderLogin from "../Login/Components/HeaderLogin/HeaderLogin";
import RegisterBox from "./Components/RegisterBox/RegisterBox";

const Register = () => {
    return (
        <>
        <HeaderLogin/>

        <div style={{ display:"flex", justifyContent: "center", padding: "50px"}}>
            <RegisterBox/>
        </div>

        <Footer/>
        </>
    )
}

export default Register;