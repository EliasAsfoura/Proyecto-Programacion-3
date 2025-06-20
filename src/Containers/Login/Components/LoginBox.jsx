import "./LoginBoxStyle.css";

const LoginBox = () => {
    return (
        <div className="LoginBox">
            <h1>Login</h1>

            <form>
                <input type="text" placeholder="Nombre de Usuario" required />
                <input type="password" placeholder="Contraseña" required />
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default LoginBox