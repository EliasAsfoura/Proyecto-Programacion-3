import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header.jsx"
import LoginBox from "./Components/LoginBox";

const Login = () => {
    return (
        <>
        <Header/>

        <div style={{ display:"flex", justifyContent: "center", padding: "50px"}}>
            <LoginBox/>
        </div>

        <Footer/>
        </>
    )
}

export default Login;