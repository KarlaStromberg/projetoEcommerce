import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../pages/Produto";

export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaProdutos />} />
                <Route path="/produtos" element={<Produto />} />
                
            </Routes>
        </BrowserRouter>
    )
}

