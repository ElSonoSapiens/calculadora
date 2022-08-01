import React from "react";
import "../styles/Boton.css";

const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`botonContainer ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Boton;
