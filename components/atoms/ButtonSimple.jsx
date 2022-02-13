import React from "react";

const ButtonSimple = ({ text, action }) => {
  return (
    <button className="simple-button" onClick={action}>
      <p>{text}</p>
    </button>
  );
};

export default ButtonSimple;
