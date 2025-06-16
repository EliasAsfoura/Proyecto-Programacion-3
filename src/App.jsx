import {BrowserRouter as Router,Routes,Route, Navigate,} from "react-router-dom";
import Inicio from "./Containers/Inicio";


function App() {
 
  return (
<Router>
      <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element ={<Inicio/>}/>
      </Routes>
</Router>
  )
}

export default App
