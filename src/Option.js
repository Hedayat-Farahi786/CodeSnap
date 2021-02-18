import React from "react";

const Option = ({ text, setValue, val, show }) => {
  return (
    <div
      className="option"
      onClick={() => {
        setValue(text.toLowerCase());
        show(!val);
      }}
    >
      {text}
    </div>
  );
};

export default Option;
