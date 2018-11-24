import React, { Component } from "react";
import TableList from "./TableList.js";
import Stage from "./Stage.js";

class RestaurantMap extends Component {
  render() {
    return (
      <div className="restaurant">
        <div className="map-wrapper" id="map-wrap">
          <TableList {...this.props} />
          <Stage />
        </div>
        <div className="levels-text">
          <span style={{ paddingLeft: "35px" }}>Второй уровень</span>
          <span style={{ paddingRight: "210px" }}>
            Первый уровень и танцпол
          </span>
        </div>
      </div>
    );
  }
}

export default RestaurantMap;
