import React from 'react';

const FormRow = ({ type, name, value, changeHandler, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText ?? name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
