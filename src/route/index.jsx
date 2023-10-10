import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home"
import { Login } from "../pages/login";

export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produto />} />
                
            </Routes>
        </BrowserRouter>
    )
}

