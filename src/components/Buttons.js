import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import back from "../icons/chevron-left.svg";
import next from "../icons/chevron-right.svg";
import ReactTooltip from "react-tooltip";
import format from "date-fns/format";

class Buttons extends Component {
  render() {
    const {
      selectedDate,
      selectedTime,
      selectedTable,
      name,
      surname,
      tel
    } = this.props;

    let prevLocation = "/step1",
      nextLocation = "/step2";
    switch (window.location.pathname) {
      case "/step1":
        prevLocation = "/step1";
        nextLocation = "/step2";
        break;
      case "/step2":
        prevLocation = "/step1";
        nextLocation = "/step3";
        break;
      case "/step3":
        prevLocation = "/step2";
        nextLocation = "/step4";
        break;
      case "/step4":
        prevLocation = "/step3";
        nextLocation = "/finish";
        break;
      default:
        prevLocation = "/step1";
        nextLocation = "/step2";
        break;
    }

    return (
      <div className="buttons">
        <Link
          to={prevLocation}
          tabIndex={-5}
          className={
            window.location.pathname === "/step1" ? "disabled-link" : null
          }
        >
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#26A69A", paddingLeft: "5px" }}
            disabled={window.location.pathname === "/step1"}
          >
            <img src={back} alt="back-logo" />
            Назад
          </Button>
        </Link>
        <Link to={nextLocation} tabIndex={-5} data-for="error-tip" data-tip="">
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#4DB6AC", paddingRight: "5px" }}
            disabled={this.disableNext()}
            onClick={() => this.handleSubmit()}
          >
            Далее
            <img src={next} alt="next-logo" />
          </Button>
          <ReactTooltip
            effect="solid"
            place="top"
            delayShow={100}
            id="error-tip"
            multiline={true}
            html={true}
            type="error"
            getContent={() => {
              if (
                (!selectedDate || !selectedTime) &&
                window.location.pathname === "/step1"
              )
                return `Пожалуйста, выберите <br/> дату и время`;
              if (!selectedTable && window.location.pathname === "/step2")
                return `Пожалуйста, выберите <br/> стол`;
              if (
                window.location.pathname === "/step3" &&
                (name === "" || surname === "" || tel.length < 15)
              ) {
                return "Пожалуйста, заполните <br/> все необходимые поля";
              }
            }}
          />
        </Link>
      </div>
    );
  }

  disableNext = () => {
    const {
      selectedDate,
      selectedTime,
      selectedTable,
      name,
      surname,
      tel
    } = this.props;

    if (
      (!selectedDate || !selectedTime) &&
      window.location.pathname === "/step1"
    )
      return true;
    if (!selectedTable && window.location.pathname === "/step2") return true;
    if (
      window.location.pathname === "/step3" &&
      (name === "" || surname === "" || tel.length < 15)
    ) {
      return true;
    }
  };

  handleSubmit = () => {
    if (window.location.pathname === "/step4") {
      fetch("/reservations", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          Reservation_Date: format(this.props.selectedDate, "yyyy-MM-dd") + " " + format(this.props.selectedTime, "HH:mm") + ":00",
          Name: this.props.name,
          Surname: this.props.surname,
          Phone: this.props.tel,
          Email: this.props.email,
          Table_Id: this.props.selectedTable
        })
      });
    }
  };
}

export default Buttons;
