
import NavBarT from "../componentes/NavBarT";
import CarouselAnuncios from "../componentes/Carousel";
import { ListaProdutos } from "../componentes/ListaProdutos";
import PromoBlocks from "../componentes/PromoBlocks";
import Faq from "../componentes/Faq";
import Footer from "../componentes/Footer";

function Home(props){
    return(
        <>
        <NavBarT/>
        <CarouselAnuncios/>
        <PromoBlocks/>
        <ListaProdutos>{props.children}</ListaProdutos>
        <Faq/>
        <Footer/>
        </>
    );
}

export {Home};