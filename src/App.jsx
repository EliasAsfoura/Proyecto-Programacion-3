import {BrowserRouter as Router,Routes,Route, Navigate,} from "react-router-dom";
import Inicio from "./Containers/Inicio";
import Productos from "./Containers/Productos";


function App() {
 
  return (
<Router>
      <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element ={<Productos/>}/>
      </Routes>
</Router>
  )
}

export default App
