import React from "react";

function Forminput({
  label,
  type,
  id,
  name,
  placeholder,
  onFocus,
  children,
  nameOfClass,
  errorHandler
}) {
  return (
    <div className="form-section">
      <label htmlFor={name}>{label}</label>
      {children}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onBlur={errorHandler}
        onFocus={onFocus}
        className={nameOfClass}
      />
    </div>
  );
}

export default Forminput;
