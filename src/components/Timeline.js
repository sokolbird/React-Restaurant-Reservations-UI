import React from "react";
import "../styles/timeline.css";
import { NavLink } from "react-router-dom";
import logo from "../icons/logo1.png";

function Timeline() {
  return (
    <ul className="timeline">
      <li className="site-logo">
        <img
          src={logo}
          title="На сайт ресторана"
          alt="site-logo"
          style={{ width: "100%" }}
        />
      </li>
      <li className="step">
        <NavLink to="/step1" activeClassName="active">
          <h2>Шаг 1</h2>
          <div>Выбор даты и времени</div>
        </NavLink>
      </li>
      <li className="step">
        <NavLink to="/step2" activeClassName="active">
          <h2>Шаг 2</h2>
          <div>Выбор стола</div>
        </NavLink>
      </li>
      <li className="step">
        <NavLink to="/step3" activeClassName="active">
          <h2>Шаг 3</h2>
          <div>Ввод данных для обратной связи</div>
        </NavLink>
      </li>
      <li className="step">
        <NavLink to="/step4" activeClassName="active">
          <h2>Шаг 4</h2>
          <div>Подтвер&shy;ждение заказа</div>
        </NavLink>
      </li>
    </ul>
  );
}

export default Timeline;
