import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../_service/api";
import Container from 'react-bootstrap/Container'
import { CardProduto } from "./CardProduto";


function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        buscarProdutos();
    }, []);

    async function buscarProdutos() {
        try {
            const response = await api.get("/productlistbyremark/home");
            setProdutos(response.data);
        } catch (error) {
            mensagemDeErro("Erro para buscar os produtos.");
        }
    }

    function mensagemDeErro(mensagem = "Mensagem de erro") {
        toast.error(mensagem, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <>
        <h1 className="font titles">All products</h1>
        <Container fluid className="cardForCollection" >
            <div style={{ maxWidth:"1000px"}} >
            <Row className="justify-content-center" style={{marginTop:"50px"}} >
                {produtos.map((produto) => {
                    return (
                        <CardProduto
                        nome={produto.title}
                        idProduto={produto.id}
                        preco={produto.price}
                        linkImagem={produto.image}
                        descricao={produto.category}
                        /> 
                    )
                })}
            </Row>
            </div>
         </Container>
         </>
    );
}

export { ListaProdutos };
