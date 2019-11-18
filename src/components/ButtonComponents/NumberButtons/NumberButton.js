import React from "react";

const NumberButton = (props) => {
  console.log(props)
  return (
    <button>
      {props.numberString}
    </button>
  );
};

export default NumberButton;