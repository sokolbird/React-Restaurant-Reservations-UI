import React from "react";
import MaskedInput from "react-text-mask";

function TelephoneInput(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        "+",
        "3",
        "8",
        "(",
        /[0-9]/,
        /\d/,
        /\d/,
        ")",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      guide={false}
      showMask
    />
  );
}

export default TelephoneInput;
