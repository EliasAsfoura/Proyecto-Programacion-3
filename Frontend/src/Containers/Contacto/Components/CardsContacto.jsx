import NumeroTelefono from "../Assets-Contacto/NumeroTelefono.svg"
import Instagram from "../Assets-Contacto/Instagram.svg"
import "./CardsContactoStyle.css";

const CardsContacto = () => {
    return (
        <div>
            <div className="CardsContacto">
                <div className="Card">
                    <h3>
                        Sucursal
                        <br />
                        Silent Hill
                    </h3>


                    <iframe className="Mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7602.862489343066!2d-123.41029971279335!3d61.55000938452048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53e759e0da688913%3A0x28c076f2e74ed414!2sSilent%20Hills!5e0!3m2!1ses!2sar!4v1750449647390!5m2!1ses!2sar"
                        width="300"
                        height="250"
                        style={{ borderColor: "1px solid" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

                <div className="Card">
                    <h3>
                        Sucursal Principal
                        <br />
                        Raccoon City
                    </h3>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6600745333612!2d-65.20382471265378!3d-26.81895022921024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c2246951c2b%3A0x34c18e18492a2143!2sBernardino%20Rivadavia%20768%2C%20T4001JJA%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1750446547972!5m2!1ses!2sar"
                        width="300"
                        height="250"
                        style={{ borderColor: "1px solid " }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>

                <div className="Card">
                    <h3>
                        Sucursal
                        <br />
                        Av. Sarmiento 800
                    </h3>


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.690728193697!2d-65.21182301265405!3d-26.81797452917105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c3c40477645%3A0xab0091a506fddacd!2sAv.%20Sarmiento%20800%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1750446926225!5m2!1ses!2sar"
                        width="300"
                        height="250"
                        style={{ borderColor: "1px solid" }}
                        allowfullscreen=""
                        loading="lazy"
                        eferrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="CajaRedes">
                <a href="https://wa.me/3812358721">
                    <img src={NumeroTelefono} alt="" style={{ width: "80%" }} />
                </a>

                <a href="https://www.instagram.com/utntucuman/">
                    <img src={Instagram} alt="" style={{ width: "80%" }} />
                </a>
            </div>
        </div>
    );
};

export default CardsContacto;
