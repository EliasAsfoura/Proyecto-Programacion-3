import LogoHeader from "../../../../assets/LogoHeader.svg"
import "./HeaderLoginStyle.css"

const HeaderLogin = () => {
    return (
        <div className="CajaContainer">
            <div className="BackgroundHeader" />
             <div className="ImgHeader">
                <img src={LogoHeader} alt="Logo-Header" style={{ position: "relative" }} />
             </div>
        </div>
    )
}

export default HeaderLogin;