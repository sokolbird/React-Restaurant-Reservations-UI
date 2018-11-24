import React, { PureComponent } from "react";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import { TimePicker } from "material-ui-pickers";
import { MuiThemeProvider } from "@material-ui/core";
import { materialTheme } from "../styles/js-theme";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
import format from "date-fns/format";

class TimePickerField extends PureComponent {
  openPicker = () => {
    this.picker.open();
  };

  render() {
    const { selectedTime, onTimeChange, errorTimeMsg } = this.props;

    return (
      <MuiThemeProvider theme={materialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="field">
            <TimePicker
              ref={node => {
                this.picker = node;
              }}
              placeholder={format(new Date(), "HH:mm")}
              className="picker-field"
              ampm={false}
              value={selectedTime}
              onChange={onTimeChange}
              error={Boolean(errorTimeMsg)}
            />
            <i
              className="material-icons"
              onClick={this.openPicker}
              style={{ cursor: "pointer" }}
            >
              access_time
            </i>
          </div>
          <FormHelperText id="error-time" error>
            {errorTimeMsg}
          </FormHelperText>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

export default TimePickerField;
