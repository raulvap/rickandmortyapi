import React from "react";
import Icon from "@mui/material/Icon";

const ButtonPrimary = ({ text, action, icon }) => {
  return (
    <button className="button-primary" onClick={action}>
      {icon && <Icon>{icon}</Icon>}
      <p>{text}</p>
    </button>
  );
};

export default ButtonPrimary;
