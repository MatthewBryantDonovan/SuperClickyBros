import React from "react";
import "./style.css";

function Title(props) {

    return (
      <div className="row title-row">
          <div className="col s0 m3 l4"></div>
          <img className="col s12 m6 l4 clicky-logo center" alt="Super Clicky Bros Logo" src="./clickyLogo.PNG" />
      </div>
    );
  }
  
  export default Title;