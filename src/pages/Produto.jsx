
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";


function Produto (){
    return(
        <>
        <NavBar/>
        <div style={{paddingTop:"90px"}}></div>
        <ListaProdutos/>
        </>
    );
}

export { Produto };