import React from "react";
import "./Button.css";

let style = ["btn-1", "btn-2"];
function Button({ children, onclick, buttonStyle }) {
  let cStyle = style.includes(buttonStyle) ? buttonStyle : style[0];
  return (
    <button className={`${cStyle}`} onclick={onclick}>
      {children}
    </button>
  );
}

export default Button;
