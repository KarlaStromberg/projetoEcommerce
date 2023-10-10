
import NavBar from "../componentes/NavBar";
import CarouselAnuncios from "../componentes/Carousel";
import { ListaProdutos } from "../componentes/ListaProdutos";

function Home(){
    return(
        <>
        <NavBar/>
        <CarouselAnuncios/>
        <ListaProdutos/>
        </>
    );
}

export {Home};