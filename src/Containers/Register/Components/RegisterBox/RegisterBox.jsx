import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterBoxStyle.css";

const RegisterBox = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3006/api/auth/register", {
        email,
        nombre,
        password,
      });

      // Si todo salió bien (201 creado)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("nombre", res.data.nombre);
      localStorage.setItem("rol", res.data.rol);
      navigate("/productos");

    } catch (err) {
      console.error("Error al registrar:", err);

      // 🔥 Aquí se muestra el mensaje exacto que vino del backend si lo hay
      if (err.response && err.response.data && err.response.data.msg) {
        alert(err.response.data.msg);
      } else {
        alert("Error del servidor al registrar");
      }
    }
  };

  return (
    <div className="LoginBox">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre de Usuario"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterBox;


