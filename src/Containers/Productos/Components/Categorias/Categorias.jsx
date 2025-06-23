import "./CategoriasStyle.css"

const Categorias = () => {
    return (
                        // Categorias
        <div className="CajaCategorias">
            <aside>
                <div className="CategoriaTexto">
                <h3>
                    Categorias
                </h3>
                </div>

                <label>
                    <input type="checkbox" name="subcategoria" value="desayuno-y-merienda" />
                    Desayuno y Merienda
                </label>

                <label>
                    <input type="checkbox" name="subcategoria" value="golosinas-y-chocolates" />
                    Golosinas y Chocolates
                </label>

                <label>
                    <input type="checkbox" name="subcategoria" value="snacks" />
                    Snacks
                </label>

                <label>
                    <input type="checkbox" name="subcategoria" value="pastas" />
                    Pastas
                </label>

                <label>
                    <input type="checkbox" name="subcategoria" value="aceites-y-vinagres" />
                    Aceites y Vinagres
                </label>

                <label>
                    <input type="checkbox" name="subcategoria" value="aderezos" />
                    Aderezos
                </label>

                <label>
                    <input type="checkbox" name="subcategoria" value="arroz-y-legumbres" />
                    Arroz y Legumbres
                </label>

                <label>
                    <input type="checkbox" name="subcategoria" value="bebidas" />
                    Bebidas
                </label>

                <label>
                    <input type="checkbox" name="subcategoria" value="cigarrillos" />
                    Cigarrillos
                </label>

            </aside>
        </div>
    )
}

export default Categorias;