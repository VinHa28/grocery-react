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
  labelClass = '',
  inputClass = '',
  hasIcon = false,
  icon = '',
  ...props
}) {
  return (
    <FormGroup className={className}>
      {label && (
        <FormLabel htmlFor={id} label={label} className={labelClass} />
      )}
      <div className='form__text-input'>
        <input id={id}
          name={name}
          type={type}
          className={`form__input ${inputClass}`}
          placeholder={placeholder}
          required={require}
          pattern={pattern}
          minLength={minLength}
          readOnly={readOnly}
          {...props}
        />
        <img src="../src/assets/icons/form__error.svg"
          alt=""
          className='form__input-icon form__input-icon--error' />

        {hasIcon && <img src={icon} alt="" className="form__input-icon" />}
      </div>
      {errMessage && <p className='form__error'>{errMessage}</p>}
    </FormGroup>
  )
}
