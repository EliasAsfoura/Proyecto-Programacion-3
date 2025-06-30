import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrusel1 from "/public/carrusel-images/Carrusel1.png"
import Carrusel2 from "/public/carrusel-images/Carrusel2.png"
import Carrusel3 from "/public/carrusel-images/Carrusel3.svg"
import Carrusel4 from "/public/carrusel-images/Carrusel4.svg"
import Carrusel5 from "/public/carrusel-images/Carrusel5.svg"
import Carrusel6 from "/public/carrusel-images/Carrusel6.svg"
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
                <div><img src={Carrusel4} alt="4"/></div>
                <div><img src={Carrusel5} alt="5"/></div>
                <div><img src={Carrusel6} alt="6"/></div>
            </Slider>
        </div>
    );
};

export default Carrusel;