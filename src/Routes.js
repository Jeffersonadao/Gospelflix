import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import NovoVideo from "./paginas/novoVideo";
import NovaCategoria from "./paginas/novaCategoria";
import Pagina404 from "./paginas/Pagina404";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio />} />
        <Route path="/novacategoria" element={ <NovaCategoria /> } />
        <Route path="/novovideo" element={ <NovoVideo /> } />
        <Route path="*" element={ <Pagina404 />} />

      </Routes>    
    </BrowserRouter>


  );
}

export default AppRoutes;
