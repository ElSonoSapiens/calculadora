import "./styles/App.css";
import logo from "./img/logo.svg";
import Boton from "./components/Boton";

function App() {
  return (
    <div className="App">
      <div className="logoContainer">
        <img src={logo} className="logo" alt="logoLoco" />
      </div>
      <div className="calculadoraContainer">
        <div className="fila">
          <Boton>1</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
