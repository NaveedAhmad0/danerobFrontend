import React from "react";

const Progress = ({ percent, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <div className="app-progress">
        <div
          style={{ width: percent + "%" }}
          className="app-progress-next"
        ></div>
      </div>
    </div>
  );
};

export default Progress;
