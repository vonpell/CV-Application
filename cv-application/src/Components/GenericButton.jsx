import React from "react";
import "../Styles/GenericButton.css";

const Button = ({ text, onClick, className }) => {
  return (
    <button className={className ?? "genericButton"} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
