import React from "react";
import "../styles/BotonClear.css";

const BotonClear = (props) => {
  return (
    <div className="btnClear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );
};

export default BotonClear;
