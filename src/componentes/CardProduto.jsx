import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext"; 
import { useNavigate } from "react-router-dom";

function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  const { adicionarCarrinho } = useContext(CarrinhoContext);
    let navigate = useNavigate();
  
     function adicionarNoCarrinho(
      idProduto,
      nomeProduto,
      precoProduto,
      descricaoProduto,
      linkImagemProduto
    ) {
      const token = localStorage.getItem("token");
      if(!token){
        navigate("/login");
      }
  
       adicionarCarrinho({
        idProduto,
        nomeProduto,
        descricaoProduto,
        precoProduto,
        linkImagemProduto,
      }); 
    }  

  return (
    <Card bg='light' border="light" style={{ width: "18rem", margin:"10px", padding:"10px", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className="font">
      <Card.Img variant="top" src={linkImagem} />
      <Card.Body>
        <Card.Title>
          {nome}
          </Card.Title>
          <Card.Title>
          R$: {preco}
          </Card.Title>
        <Card.Text>{descricao}</Card.Text>
        <Button
          variant="success"
          onClick={() =>
            adicionarNoCarrinho(idProduto, nome, preco, descricao, linkImagem)
          }
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export { CardProduto };