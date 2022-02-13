import React from "react";
import Icon from "@mui/material/Icon";

const Characteristics = ({ icon, value, characteristic }) => {
  return (
    <div className="characteristics">
      <div className="characteristics__icon">
        <Icon>{icon}</Icon>
      </div>

      <div className="characteristics__info">
        <p>{characteristic}</p>
        <h4>{value}</h4>
      </div>
    </div>
  );
};

export default Characteristics;
{
}
