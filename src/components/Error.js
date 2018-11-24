import React from "react";
import cancel from "../icons/cancel.png";
import { Link } from "react-router-dom";

export default function Error(props) {
  return (
    <div className="success-or-error">
      <div
        className="logo"
        style={{ backgroundImage: `url(${cancel})`, backgroundSize: "cover" }}
      />
      <h2>К сожалению, стол не был забронирован: произошла ошибка</h2>
      <div style={{ textDecoration: "underline" }}>
        <Link to="/step1" onClick={props.resetState}>
          Попробовать еще раз
        </Link>
      </div>
    </div>
  );
}
