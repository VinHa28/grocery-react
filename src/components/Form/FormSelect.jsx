import React, { useState } from 'react';
import './Form.scss'

const FormSelect = ({ className = '',
  // option = [500],
  style = {},
  defaultValue = '',
  iconSrc = './src/assets/icons/arrow-down.svg', }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={`form__select ${className}`} style={style}>
      {defaultValue}
      <img src={iconSrc} alt="icon" className="icon form__select-icon" />
    </div>
  );
};

export default FormSelect;