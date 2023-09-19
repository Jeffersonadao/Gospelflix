import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import NovoVideo from "./paginas/novoVideo";
import NovaCategoria from "./paginas/novaCategoria";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio />} />
        <Route path="/novacategoria" element={ <NovaCategoria /> } />
        <Route path="/novovideo" element={ <NovoVideo /> } />
      </Routes>    
    </BrowserRouter>


  );
}

export default AppRoutes;
