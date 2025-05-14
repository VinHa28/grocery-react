import React from 'react'
import './Form.scss'
import FormGroup from './FormGroup'
import FormLabel from './FormLabel'

export default function FormInput({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  require = false,
  pattern,
  minLength,
  errMessage,
  className = '',
  readOnly = false,
  ...props
}) {
  return (
    <FormGroup className={className}>
      {label && (
        <FormLabel htmlFor={id} label={label} />
      )}
      <div className='form__text-input'>
        <input id={id}
          name={name}
          type={type}
          className='form__input'
          placeholder={placeholder}
          required={require}
          pattern={pattern}
          minLength={minLength}
          readOnly={readOnly}
          {...props}
        />
        <img src="./src/assets/icons/form__error.svg" 
        alt="" 
        className='form__input-icon form__input-icon--error'/>
      </div>
      {errMessage && <p className='form__error'>{errMessage}</p>}
    </FormGroup>
  )
}
