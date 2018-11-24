import React from "react";
import MaskedInput from "react-text-mask";
import emailMask from "text-mask-addons/dist/emailMask";

function EmailInput(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={emailMask}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

export default EmailInput;
