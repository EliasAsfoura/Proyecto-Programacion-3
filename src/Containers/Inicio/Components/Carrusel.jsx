import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrusel1 from "../Assests-Inicio/Carrusel1.svg"
import Carrusel2 from "../Assests-Inicio/Carrusel2.svg"
import Carrusel3 from "../Assests-Inicio/Carrusel3.svg"
import Carrusel4 from "../Assests-Inicio/Carrusel4.svg"
import Carrusel5 from "../Assests-Inicio/Carrusel5.svg"
import Carrusel6 from "../Assests-Inicio/Carrusel6.svg"
import "./CarruselStyle.css"

const Carrusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="CajaCarrusel">
            <Slider {...settings} >
                <div><img src={Carrusel1} alt="1"/></div>
                <div><img src={Carrusel2} alt="2" /></div>
                <div><img src={Carrusel3} alt="3"/></div>
                <div><img src={Carrusel4} alt="3"/></div>
                <div><img src={Carrusel5} alt="3"/></div>
                <div><img src={Carrusel6} alt="3"/></div>
            </Slider>
        </div>
    );
};

export default Carrusel;