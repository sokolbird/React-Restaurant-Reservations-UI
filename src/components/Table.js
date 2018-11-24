import React, { Component } from "react";
import RoundedTable from "./RoundedTable.js";
import RectTable from "./RectTable.js";
import RectSofaTable from "./RectSofaTable.js";
import ReactTooltip from "react-tooltip";
import "../styles/tables.css";

class Table extends Component {
  render() {
    const {
      shape,
      persons,
      id,
      isReserved,
      selected,
      handleTableChange
    } = this.props;

    let table =
      shape === "round" ? (
        <RoundedTable persons={persons} />
      ) : shape === "rect" ? (
        <RectTable />
      ) : (
        <RectSofaTable />
      );
    let tooltip = `<div>
                       <div>Стол № ${id}</div> 
                       <div>Кол-во мест: ${persons}</div>
                       ${isReserved ? "<i>Занят</i>" : ""}
                   </div>`;
    return (
      <div>
        <div
          className={
            isReserved
              ? "table-wrap disabled"
              : selected
              ? "table-wrap selected"
              : "table-wrap"
          }
          data-tip={tooltip}
          onClick={handleTableChange}
        >
          {table}
        </div>
        <ReactTooltip
          html={true}
          effect="solid"
          place="right"
          delayShow={100}
        />
      </div>
    );
  }
}

export default Table;
