import React from "react";
import "./Car.css";
const Car = (props) => {
  return (
    <div className="car">
      <h3> {props.children}</h3>
      <h3> {props.name} </h3>
      <h3> {props.price} </h3>
      <button
        style={{
          backgroundColor: "orange",
          height: "30px",
          border: "black",
          borderRadius: "10%",
        }}
        onClick={() => props.handleName(props.name, props.price)}
      >
        Buy
      </button>
    </div>
  );
};

export default Car;
