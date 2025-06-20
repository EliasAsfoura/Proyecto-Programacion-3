import "./FooterStyle.css"

const Footer = () => {

    return (
        <footer class="CajaFooter">
            <div class="ContenidoFooter">

                <div class="ColumnasFooter">
                    <h4>Atajos</h4>
                    <ul>
                        <li><a href="/inicio">Inicio</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                        <li><a href="/miCarrito">Mi carrito</a></li>
                    </ul>
                </div>


                <div class="ColumnasFooter">
                    <h4>Redes sociales</h4>
                    <ul>
                        <li><a href="https://x.com/utntucuman" target="_blank">Twitter</a></li>
                        <li><a href="https://www.instagram.com/utntucuman/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100064269810362" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </div>



            <div class="FooterBottom">
                © 2025 THEODORO — Todos los derechos reservados
            </div>
        </footer>
    )

}

export default Footer