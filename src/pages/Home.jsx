
import NavBarT from "../componentes/NavBarT";
import CarouselAnuncios from "../componentes/Carousel";
import { ListaProdutos } from "../componentes/ListaProdutos";
import PromoBlocks from "../componentes/PromoBlocks";

function Home(props){
    return(
        <>
        <NavBarT/>
        <CarouselAnuncios/>
        <PromoBlocks/>
        <ListaProdutos>{props.children}</ListaProdutos>
        </>
    );
}

export {Home};