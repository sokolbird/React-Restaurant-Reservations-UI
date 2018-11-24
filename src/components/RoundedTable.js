import React from "react";
import { rectangle } from "../utils";

function RoundedTable({ persons }) {
  let twoPersons = (
    <g className="chairs">
      <path d={rectangle(27, 1, 15, 10, 5, 5, 0, 0)} />
      <path d={rectangle(27, 59, 15, 10, 0, 0, 5, 5)} />
    </g>
  );
  let fourPersons = (
    <g className="chairs">
      <path d={rectangle(1, 27, 10, 15, 5, 0, 0, 5)} />
      <path d={rectangle(27, 1, 15, 10, 5, 5, 0, 0)} />
      <path d={rectangle(59, 27, 10, 15, 0, 5, 5, 0)} />
      <path d={rectangle(27, 59, 15, 10, 0, 0, 5, 5)} />
    </g>
  );

  return (
    <svg width="70" height="70" className="rounded-table">
      {persons === 2 ? twoPersons : fourPersons}
      <circle cx="35" cy="35" r="25" className="table" />
    </svg>
  );
}

export default RoundedTable;
