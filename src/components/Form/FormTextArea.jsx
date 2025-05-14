import React from 'react'
import './Form.scss'
import FormGroup from './FormGroup'
import FormLabel from './FormLabel'

export default function FormTextArea({
  id,
  name,
  label, 
  placeholder,
  value,
  required = false,
  readOnly = false,
  errorMessage,
  className='',
  ...props
}) {
  return (
    <FormGroup className={className}>
      {label && (
        <FormLabel htmlFor={id} label={label}/>
      )}
      <div className='form__text-area'>
        <textarea
         name={name}
         id={id}
         className='form__text-area-input'
         placeholder={placeholder}
         required={required}
         readOnly={readOnly}
         {...props}
        >
          {value ? value : ''}
        </textarea>
      </div>
      {errorMessage &&  <p className='form__error'>{errorMessage}</p>}
    </FormGroup>
  )
}
