import React from "react";

function Input({ type, value, onChange, required, className }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className={className}
    />
  );
}

export default Input;
