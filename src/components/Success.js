import React from "react";
import checked from "../icons/checked.png";
import { Link } from "react-router-dom";

export default function Success(props) {
  return (
    <div className="success-or-error">
      <div
        className="logo"
        style={{ backgroundImage: `url(${checked})`, backgroundSize: "cover" }}
      />
      <h2>Стол успешно забронирован</h2>
      <div style={{ paddingBottom: "5px" }}>Спасибо за Ваш заказ!</div>
      <div>
        Информация о заказе была отправлена в sms-сообщении на указанный номер
        телефона.
      </div>
      <p style={{ textDecoration: "underline" }}>
        <Link to="/step1" onClick={props.resetState}>
          Вернуться к бронированию столов
        </Link>
      </p>
    </div>
  );
}
