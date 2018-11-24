import React from "react";

function RectSofaTable() {
  return (
    <svg width="60" height="90" className="rect-sofa-table">
      <g className="sofa">
        <rect x="10" y="0" rx="5" ry="5" width="46" height="90" />
      </g>
      <rect
        x="5"
        y="10"
        rx="10"
        ry="10"
        width="40"
        height="70"
        className="table"
      />
    </svg>
  );
}

export default RectSofaTable;
