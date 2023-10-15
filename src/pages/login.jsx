import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "../assets/css/login.css";
import promo3 from "../assets/images/promo3.jpg"
import NavBar from "../componentes/NavBar"

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();

  function onchangeEmail(event) {
    setEmail(event.target.value);
  }
  function onchangeSenha(event) {
    setSenha(event.target.value);
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

  function mensagemDeSucesso(mensagem = "") {
    toast.success(mensagem, {
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
  
  async function submitForm(event) {
    event.preventDefault();
    setValidated(true);

    const form = new FormData();
    form.append("email", email);
    form.append("password", senha);
    const options = {
      method: "POST",
      mode: "cors",
      body: form,
    };

    try {
      const response = await fetch(
        "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        options
      );
      mensagemDeSucesso("Logado com sucesso");
      const data = await response.json();
      const token = data.token
      const nomeUsuario = data.user.name
      const emailUsario = data.user.email

      localStorage.setItem('token', token)
      localStorage.setItem('nomeUsuario', nomeUsuario)
      localStorage.setItem('emailUsario', emailUsario)

      navigate("/");
    } catch (error) {
      mensagemDeErro("Não foi possivel realizar login");
    }
  }

  return (
    <>
    <NavBar/>
    <Container className="font">
      <Row style={{ marginTop: "9%"}}>
        <Col md={1}></Col>
        <Col md={10}>
          <Row>
            <Col md={6} style={{ padding: "0%"}}>
              <Image
                src={promo3}
                width="100%"
                height="100%"
             className="radiusimage" />
            </Col>
            <Col md={6} className=" box radiusform">
             
            <h1 className="text-center">Login</h1>
              
              <Form noValidate validated={validated} onSubmit={submitForm}>
                <Row style={{ margin: "7%", marginRight:"0%"}}>
                  <Col>
                    <Form.Group controlId="validationEmail" className="form">
                      <Form.Label>E-mail</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputEmail">@</InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="E-mail"
                          aria-describedby="inputEmail"
                          required
                          onChange={onchangeEmail}
                        />
                        <Form.Control.Feedback type="invalid">
                          Adicionar um email valido.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ margin: "7%", marginRight:"0%"}}>
                  <Col>
                    <Form.Group controlId="validationCustomUsername">
                      <Form.Label>Senha</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputSenha">*</InputGroup.Text>
                        <Form.Control
                          type="password"
                          placeholder="Senha"
                          aria-describedby="inputSenha"
                          required
                          onChange={onchangeSenha}
                        />
                        <Form.Control.Feedback type="invalid">
                          Senha é obrigatorio.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ margin: "7%", marginRight:"0%"}}>
                  <Col className="d-grid gap-2">
                    <Button type="submit" size="lg" variant="dark">
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export { Login };