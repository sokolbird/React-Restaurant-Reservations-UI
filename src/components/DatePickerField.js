import React, { PureComponent } from "react";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DatePicker from "material-ui-pickers/DatePicker";
import ruLocale from "date-fns/locale/ru";
import { MuiThemeProvider } from "@material-ui/core";
import { materialTheme } from "../styles/js-theme";
import format from "date-fns/format";

class DatePickerField extends PureComponent {
  openPicker = () => {
    this.picker.open();
  };

  render() {
    const { selectedDate, onDateChange } = this.props;

    return (
      <MuiThemeProvider theme={materialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
          <div className="field">
            <DatePicker
              ref={node => {
                this.picker = node;
              }}
              placeholder={format(new Date(), "dd MMMM YYYY", {
                locale: ruLocale
              })}
              className="picker-field"
              value={selectedDate}
              onChange={onDateChange}
              disablePast={true}
              format="dd MMMM YYYY"
            />
            <i
              className="material-icons"
              onClick={this.openPicker}
              style={{ cursor: "pointer" }}
            >
              date_range
            </i>
          </div>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

export default DatePickerField;
