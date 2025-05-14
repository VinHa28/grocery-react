import React from 'react'

export default function FormLabel({
    htmlFor,
    className='',
    label='',
    ...props
}) {
  return (
    <label className={`form__label ${className}`} {...props} htmlFor={htmlFor}>
        {label}
    </label>
  )
}
