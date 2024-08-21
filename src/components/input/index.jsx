import React from "react";

const Input = ({ label, placeholder, name, type = "text", required = false, inputClassname, className, value, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`bg-[#ccc] p-3" id={name} type="text"  required={required} ${inputClassname}`}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
