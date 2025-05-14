import React from 'react'
import './Form.scss'
import FormGroup from './FormGroup'

export default function FormCheckbox(
  {
    id,
    name,
    className='',
    label,
    checked,
    onChange,
    ...props
  }
) {
  return (
    <FormGroup className={className}>
      <label htmlFor={id} className='form__label-checkbox'>
        <input 
        type='checkbox'
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        {...props}
        />
        {label}
      </label>
    </FormGroup>
  )
}
