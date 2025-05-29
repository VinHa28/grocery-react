import React from 'react'
import './Form.scss'

export default function FormRow({ children, className = '', smBreak = false }) {
  
  return (
    <div className={`form__row ${className}`}>
      {children}
    </div>
  )
}
