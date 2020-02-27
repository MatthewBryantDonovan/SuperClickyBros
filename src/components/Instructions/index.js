import React from "react";
import "./style.css";

function Instructions(props) {

  let instructions = (<div></div>);

  if(props.count === 0 && props.gameStart === false){
    instructions = (<div className="container">
                      <div  className="row">
                         <p className="col m12 instructions center">Try your best to click on all 78 fighters to have them join the battle. If you click the same fighter the counter will reset to 0 !</p>
                      </div>
                    </div>);
  } else if (props.count === 0 && props.gameStart === true){
    instructions = (<div>
                      <div  className="row">
                        <p className="col m12 instructions center">Ooops! You clicked that fighter already! Try again!</p>
                      </div>
                    </div>);
  } else {  
    instructions = (<div></div>);
  }

  return (<div>{instructions}</div>
  );
}

export default Instructions;
