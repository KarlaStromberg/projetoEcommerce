/* import './App.css';
import { ComponenteNome } from './componentes/ComponenteNome';
import { ComponenteResumoSobreVoce } from './componentes/ComponenteResumoSobreVoce';
import { Button } from "react-bootstrap";



function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      <ComponenteNome/>

      <ComponenteResumoSobreVoce nome="Karla Stromberg" idade={26}>
        Texto de resumo 
      </ComponenteResumoSobreVoce>
    </div>
  );
}

export default App;

 */




import { RouteApp } from "./route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer/>
      <RouteApp/>
    </>
  );
}

export default App;