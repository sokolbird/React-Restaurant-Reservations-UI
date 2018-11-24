import React from "react";

export default function CurrentStep() {
  let location = window.location.pathname,
    currentStep = "";

  switch (location) {
    case "/step1":
      currentStep = "Шаг 1. Выбор даты и времени";
      break;
    case "/step2":
      currentStep = "Шаг 2. Выбор стола";
      break;
    case "/step3":
      currentStep = "Шаг 3. Ввод данных для обратной связи";
      break;
    case "/step4":
      currentStep = "Шаг 4. Подтверждение заказа";
      break;
    default:
      currentStep = "";
      break;
  }

  return <div className="step-info">{currentStep}</div>;
}
