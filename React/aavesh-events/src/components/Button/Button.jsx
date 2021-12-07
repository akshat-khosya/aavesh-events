import React from "react";
import "./button.css";

function Button(props) {
  return (
    <>
      {props.link ? (
        <button>
          <a href={props.link} className="aavesh-btn">
            <span className="aavesh-btn-text">
              {props.text ? props.text : "Button"}
            </span>
          </a>
        </button>
      ) : (
        <button className="aavesh-btn">
          
            <span className="aavesh-btn-text">
              {props.text ? props.text : "Button"}
            </span>
          
        </button>
      )}
    </>
  );
}

export default Button;
