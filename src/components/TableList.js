import React, { Component } from "react";
import Table from "./Table.js";

class TableList extends Component {
  render() {
    const { tables, selectedTable, handleTableChange } = this.props;

    return (
      <div className="tables-wrapper">
        <div className="second-level">
          <div className="second-level-rect">
            {tables
              .filter(table => table.shape === "rect")
              .map(table => (
                <Table
                  key={table.id}
                  shape={table.shape}
                  persons={table.persons}
                  id={table.id}
                  isReserved={table.isReserved}
                  selected={selectedTable === table.id}
                  handleTableChange={() =>
                    handleTableChange(table.id, table.isReserved)
                  }
                />
              ))}
          </div>

          <div className="second-level-rounded">
            {tables
              .filter(table => table.persons === 2)
              .map(table => (
                <Table
                  key={table.id}
                  shape={table.shape}
                  persons={table.persons}
                  id={table.id}
                  isReserved={table.isReserved}
                  selected={selectedTable === table.id}
                  handleTableChange={() =>
                    handleTableChange(table.id, table.isReserved)
                  }
                />
              ))}
          </div>
        </div>

        <div className="first-level">
          <div className="first-level-sofa">
            {tables
              .filter(table => table.shape === "rect-sofa")
              .map(table => (
                <Table
                  key={table.id}
                  shape={table.shape}
                  persons={table.persons}
                  id={table.id}
                  isReserved={table.isReserved}
                  selected={selectedTable === table.id}
                  handleTableChange={() =>
                    handleTableChange(table.id, table.isReserved)
                  }
                />
              ))}
          </div>

          <div className="first-level-round">
            <div className="first-level-round-right">
              {tables
                .filter(table => table.persons === 4)
                .slice(0, 5)
                .map(table => (
                  <Table
                    key={table.id}
                    shape={table.shape}
                    persons={table.persons}
                    id={table.id}
                    isReserved={table.isReserved}
                    selected={selectedTable === table.id}
                    handleTableChange={() =>
                      handleTableChange(table.id, table.isReserved)
                    }
                  />
                ))}
            </div>

            <div className="first-level-round-left">
              {tables
                .filter(table => table.persons === 4)
                .slice(5, 10)
                .map(table => (
                  <Table
                    key={table.id}
                    shape={table.shape}
                    persons={table.persons}
                    id={table.id}
                    isReserved={table.isReserved}
                    selected={selectedTable === table.id}
                    handleTableChange={() =>
                      handleTableChange(table.id, table.isReserved)
                    }
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableList;
