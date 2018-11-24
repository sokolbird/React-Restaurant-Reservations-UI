import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import TelephoneInput from "./TelephoneInput.js";
import EmailInput from "./EmailInput.js";
import "../styles/forms.css";
import { materialTheme } from "../styles/js-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

class PersonalDataForm extends Component {
  render() {
    const { name, surname, tel, email, handleChange } = this.props;

    return (
      <div className="form-container">
        <MuiThemeProvider theme={materialTheme}>
          <div className="form-header">
            Пожалуйста, введите свои контактные данные, чтобы мы могли с вами
            связаться
            <div>Обязательные поля отмечены *</div>
          </div>
          <TextField
            autoFocus
            value={name}
            required
            id="name"
            label="Ваше имя"
            margin="normal"
            onChange={handleChange("name")}
          />
          <TextField
            onChange={handleChange("surname")}
            value={surname}
            required
            id="surname"
            label="Ваша фамилия"
            margin="normal"
          />
          <FormControl className="field">
            <Input
              onChange={handleChange("tel")}
              type="tel"
              value={tel}
              id="number-input"
              inputComponent={TelephoneInput}
              required
            />
            <FormHelperText id="name-helper-text">
              Контактный телефон *
            </FormHelperText>
          </FormControl>
          <FormControl className="field">
            <Input
              onChange={handleChange("email")}
              value={email}
              placeholder="sample@email.ua"
              id="email-input"
              inputComponent={EmailInput}
            />
            <FormHelperText id="name-helper-text">
              Электронный адрес
            </FormHelperText>
          </FormControl>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default PersonalDataForm;
