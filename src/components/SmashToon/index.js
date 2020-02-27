import React from "react";
import "./style.css";

function SmashToon(props) {

  return (
    <div onClick={() => props.progressGame(props.clicked, props.id)} className="border-type col s6 m3 l2">
        <img className="size-img" alt={props.name} src={props.image} />
    </div>
  );
}

export default SmashToon;
