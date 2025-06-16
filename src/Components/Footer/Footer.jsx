import "./FooterStyle.css"

const Footer = () => {

    return (
        <footer class="site-footer">
            <div class="footerContent">

                <div class="footerColumn">
                    <h4>Atajos</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Mi carrito</a></li>
                    </ul>
                </div>


                <div class="footerColumn">
                    <h4>Redes sociales</h4>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
            </div>



            <div class="footer-bottom">
                © 2025 THEODORO — Todos los derechos reservados
            </div>
        </footer>
    )

}

export default Footer