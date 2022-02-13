import React from "react";

const Status = ({ status }) => {
  let colorbg = "";

  switch (status) {
    case "Alive":
      colorbg = "#27AE60";
      break;

    case "Dead":
      colorbg = "#C0392B";
      break;

    default:
      colorbg = "#424949";
      break;
  }

  return (
    <div className="status" style={{ backgroundColor: colorbg }}>
      <p>{status}</p>
    </div>
  );
};

export default Status;
