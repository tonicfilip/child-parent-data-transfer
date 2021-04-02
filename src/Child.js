import "react-nice-dates/build/style.css";
import React from "react";

const Child = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => props.parentCallback(event.target.value)}
      />
    </div>
  );
};

export default Child;
