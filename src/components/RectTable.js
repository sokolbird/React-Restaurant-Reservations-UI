import React from "react";
import { rectangle } from "../utils";

function RectTable() {
  return (
    <svg width="70" height="90" className="rect-table">
      <rect
        x="15"
        y="10"
        rx="10"
        ry="10"
        width="40"
        height="70"
        className="table"
      />
      <g className="chairs">
        <path d={rectangle(5, 20, 10, 15, 5, 0, 0, 5)} />
        <path d={rectangle(5, 38, 10, 15, 5, 0, 0, 5)} />
        <path d={rectangle(5, 56, 10, 15, 5, 0, 0, 5)} />
      </g>
      <g className="chairs">
        <path d={rectangle(55, 20, 10, 15, 0, 5, 5, 0)} />
        <path d={rectangle(55, 38, 10, 15, 0, 5, 5, 0)} />
        <path d={rectangle(55, 56, 10, 15, 0, 5, 5, 0)} />
      </g>
    </svg>
  );
}

export default RectTable;
