import React from "react";
import "../../styles/Input.scss";

const Input = ({ value, onChange, placeholder, ariaLabel }) => {
  return (
    <div className="input-container">
      <input
        className="input-container__input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default Input;
