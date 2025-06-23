import "./RegisterBoxStyle.css";

const RegisterBox = () => {
    return (
        <div className="LoginBox">
            <h1>Register</h1>
             <form>
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Nombre de Usuario" required />
                <input type="password" placeholder="Contraseña" required />
                <button type="submit">Register</button>
             </form>
        </div>
    )
}

export default RegisterBox