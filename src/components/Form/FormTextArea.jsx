import React from 'react'
import './Form.scss'
import FormGroup from './FormGroup'
import FormLabel from './FormLabel'

export default function FormTextArea({
  id,
  name,
  label,
  placeholder,
  defaultValue,
  required = false,
  readOnly = false,
  errorMessage,
  className = '',
  labelClass = '',
  onChange = () => { },
  ...props
}) {
  return (
    <FormGroup className={className}>
      {label && (
        <FormLabel className={labelClass} htmlFor={id} label={label} />
      )}
      <div className='form__text-area'>
        <textarea
          name={name}
          id={id}
          className='form__text-area-input'
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          onChange={() => { }}
          // value={defaultValue ? defaultValue : ''}
          {...props}
        >
          {defaultValue || ''}
        </textarea>
      </div>
      {errorMessage && <p className='form__error'>{errorMessage}</p>}
    </FormGroup>
  )
}
