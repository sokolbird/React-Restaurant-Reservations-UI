import React from "react";
import "../styles/map-wrapper.css";
import ReactTooltip from "react-tooltip";

function Stage() {
  let outerHeight = window.innerHeight * 0.6,
    stageHeight = window.innerHeight * 0.5;
  return (
    <div>
      <svg
        width="100"
        height={outerHeight}
        className="stage"
        data-tip="<div>Выступления</div> <div>начинаются в</div> <strong>19.00</strong>"
        data-for="stage"
      >
        <rect width="55" height={outerHeight} x="45" y="0" rx="10" ry="10" />
        <foreignObject
          width="100"
          height={stageHeight}
          y={(outerHeight - stageHeight) / 2}
        >
          <div className="stage-top">СЦЕНА</div>
        </foreignObject>
      </svg>
      <ReactTooltip
        html={true}
        effect="solid"
        place="right"
        id="stage"
        className="stage-tooltip"
      />
    </div>
  );
}

export default Stage;
