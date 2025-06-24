import {BrowserRouter as Router,Routes,Route, Navigate,} from "react-router-dom";
import Inicio from "./Containers/Inicio";
import Productos from "./Containers/Productos";
import Login from "./Containers/Login";
import Contacto from "./Containers/Contacto";
import ViewProduct from "./Containers/viewProduct";
import Carrito from "./Containers/Carrito";
import Register from "./Containers/Register";



function App() {
 
  return (
<Router>
      <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element ={<Inicio/>}/>
        <Route path="/productos" element ={<Productos/>}/>
        <Route path="/contacto" element ={<Contacto/>}/>
        <Route path="/carrito" element ={<Carrito/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/viewProduct/:id" element={<ViewProduct />} />
      </Routes>
</Router>
  )
}

export default App
