import React from 'react'
import './Form.scss'

export default function FormRow({ children, className = '', smBreak = false }) {
  
  const rowClass = smBreak ? 'form__row--sm-break' : '';

  return (
    <div className={`form_row ${className}`}>
      {children}
    </div>
  )
}
