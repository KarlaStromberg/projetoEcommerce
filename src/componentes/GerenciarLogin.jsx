import { useContext, useEffect, useState } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping} from "@fortawesome/free-solid-svg-icons";

function GerenciarLogin() 
{
  const [token, setToken] = useState(null);
  const [nomeUsario, setNomeUsario] = useState(null);
  const [emailUsuario, setEmailUsuario] = useState(null);

  const [numeroProdutosCarrinho, setNumeroProdutosCarrinho] = useState(0);
  const { listaProdutosCarrinho } = useContext(CarrinhoContext);

  useEffect(() => {
    const quantidadeProdutos = listaProdutosCarrinho.length;
    setNumeroProdutosCarrinho(quantidadeProdutos);
  }, [listaProdutosCarrinho]);

  useEffect(() => {
    pegarDadosLocalStorage();
  }, []);

  function pegarDadosLocalStorage() {
    const token = localStorage.getItem("token");
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    const emailUsario = localStorage.getItem("emailUsario");
    setToken(token);
    setNomeUsario(nomeUsuario);
    setEmailUsuario(emailUsario);
  }

  function removerDadosLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("emailUsario");
    pegarDadosLocalStorage();
  }

  if (!token) {
    return (
      <Row>
        <Col md={12}>
          <a href="/login">
            <Button variant="light">Login</Button>{" "}
          </a>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
       <Col md={2}>
        <a href="/carrinho">
          <Badge
            style={{
              position: "absolute",
              marginLeft: "20px",
              marginTop: "-8px",
            }}
            bg="success"
          >
            {numeroProdutosCarrinho}
          </Badge>
          
          <FontAwesomeIcon icon={faBagShopping} size="2xl" style={{ color: "#ffffff"}}/>      </a>
          
      </Col>
      <Col md={7} style={{ textTransform: "lowercase"}} >
        <div style={{marginTop:"-10px"}}>
        <i className="fa fa-user"> <span className="font">{nomeUsario}</span></i>
        <i className="fa fa-at"> <span className="font">{emailUsuario}</span></i>
        </div>
      </Col>
      <Col md={2}>
        <Button variant="light" onClick={() => removerDadosLocalStorage()}>
          Sair
        </Button>{" "}
      </Col>
    </Row>
  );
}

export { GerenciarLogin };