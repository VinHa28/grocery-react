import React from 'react'
import './Form.scss'
import FormGroup from './FormGroup'

export default function FormCheckbox(
  {
    id,
    name,
    className = '',
    label,
    checked,
    onChange,
    ...props
  }
) {
  return (
    <label htmlFor={id} className={`form__label-checkbox ${className}`}>
      <input
        type='checkbox'
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        {...props}
        className='form__checkbox d-none'
      />
      {label}
    </label>
  )
}
