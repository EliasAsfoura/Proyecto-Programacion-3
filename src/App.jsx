import {BrowserRouter as Router,Routes,Route, Navigate,} from "react-router-dom";
import Inicio from "./Containers/Inicio";
import Productos from "./Containers/Productos";
import Login from "./Containers/Login";
import Contacto from "./Containers/Contacto";


function App() {
 
  return (
<Router>
      <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element ={<Inicio/>}/>
        <Route path="/productos" element ={<Productos/>}/>
        <Route path="/contacto" element ={<Contacto/>}/>
        <Route path="/login" element ={<Login/>}/>
        

      </Routes>
</Router>
  )
}

export default App
