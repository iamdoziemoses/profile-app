import React from "react";

const Card = ({ children }) => {
  const Styles = {
    backgroundColor: "white",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
  };
  return <div style={Styles}>{children}</div>;
};

export default Card;
