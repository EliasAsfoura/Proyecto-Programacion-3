import Footer from "../../Components/Footer/Footer";
import HeaderLogin from "./Components/HeaderLogin/HeaderLogin";
import LoginBox from "./Components/LoginBox/LoginBox";

const Login = () => {
    return (
        <>
        <HeaderLogin/>

        <div style={{ display:"flex", justifyContent: "center", padding: "50px"}}>
            <LoginBox/>
        </div>

        <Footer/>
        </>
    )
}

export default Login;