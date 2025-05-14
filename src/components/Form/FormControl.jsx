import React from 'react'
import './Form.scss'

export default function FormControl({children, className=''}) {
  return (
    <div className={`form__control ${classsName}`}>
      {children}
    </div>
  )
}
