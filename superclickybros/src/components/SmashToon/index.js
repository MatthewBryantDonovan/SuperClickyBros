import React from "react";
import "./style.css";

function SmashToon(props) {

  return (
    <div onClick={() => props.myNewMethod(props.clicked, props.id)} className="border-type black">
        <img className="size-img" alt={props.name} src={props.image} />
    </div>
  );
}

export default SmashToon;
