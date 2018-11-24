import React, { Component } from "react";
import DatePickerField from "./DatePickerField";
import TimePickerField from "./TimePickerField";

class DateInfo extends Component {
  render() {
    return (
      <div className="form-container date-time">
        <div className="form-header">
          Пожалуйста, выберите дату и время для бронирования стола
          <div>Бронирование доступно с 9.00 до 22.00</div>
        </div>
        <DatePickerField {...this.props} />
        <TimePickerField {...this.props} />
      </div>
    );
  }
}

export default DateInfo;
