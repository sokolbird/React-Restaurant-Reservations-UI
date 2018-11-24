import React, { Component } from "react";
import RestaurantMap from "./components/RestaurantMap.js";
import Timeline from "./components/Timeline.js";
import PersonalDataForm from "./components/PersonalData.js";
import Buttons from "./components/Buttons.js";
import tableData from "./tableData";
import "./styles/App.css";
import DateInfo from "./components/DateInfo";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Check from "./components/Check";
import Success from "./components/Success";
import Error from "./components/Error";
import CurrentStep from "./components/CurrentStep";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: tableData.slice().reverse(),
      selectedDate: null,
      selectedTime: null,
      errorTimeMsg: "",
      selectedTable: null,
      name: "",
      surname: "",
      tel: "+38(  )",
      email: ""
    };
  }

  resetState = () => {
    this.setState({
      tables: tableData.slice().reverse(),
      selectedDate: null,
      selectedTime: null,
      errorTimeMsg: "",
      selectedTable: null,
      name: "",
      surname: "",
      tel: "+38(  )",
      email: ""
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/finish"
            render={() =>
              this.state.selectedDate &&
              this.state.selectedTime &&
              this.state.selectedTable &&
              this.state.name &&
              this.state.surname &&
              this.state.tel.length === 15 ? (
                <Success resetState={this.resetState} />
              ) : (
                <Error resetState={this.resetState} />
              )
            }
          />
          <Route
            render={() => (
              <div className="App">
                <aside className="timeline-aside">
                  <Timeline />
                </aside>
                <main>
                  <CurrentStep />
                  <div className="inputs-section">
                    <Switch>
                      <Route
                        path="/step1"
                        render={() => (
                          <DateInfo
                            {...this.state}
                            onDateChange={this.handleDateChange}
                            onTimeChange={this.handleTimeChange}
                          />
                        )}
                      />
                      <Route
                        path="/step2"
                        render={() =>
                          this.state.selectedDate && this.state.selectedTime ? (
                            <RestaurantMap
                              {...this.state}
                              handleTableChange={this.handleTableSelect}
                            />
                          ) : (
                            <Redirect to="/step1" />
                          )
                        }
                      />
                      <Route
                        path="/step3"
                        render={() =>
                          this.state.selectedTable ? (
                            <PersonalDataForm
                              {...this.state}
                              handleChange={this.handlePersonalDataChange}
                            />
                          ) : (
                            <Redirect to="/step2" />
                          )
                        }
                      />
                      <Route
                        path="/step4"
                        render={() =>
                          this.state.name &&
                          this.state.surname &&
                          this.state.tel.length === 15 ? (
                            <Check {...this.state} />
                          ) : (
                            <Redirect to="/step3" />
                          )
                        }
                      />
                      <Route render={() => <Redirect to="/step1" />} />
                    </Switch>
                  </div>

                  <Buttons {...this.state} />
                </main>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleTimeChange = date => {
    if (date.getHours() < 22 && date.getHours() >= 9)
      this.setState({
        selectedTime: date,
        errorTimeMsg: ""
      });
    else
      this.setState({ errorTimeMsg: "Бронирование возможно с 9.00 до 22.00" });
  };

  handleTableSelect = (id, isReserved) => {
    if (!isReserved) {
      this.setState({ selectedTable: id });
    }
  };

  handlePersonalDataChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
}

export default App;
