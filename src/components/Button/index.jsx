import React from 'react'
import './Button.scss'

export default function Button(
    {
      type = 'button',
      children,
        className = '',
        onClick = () => {},
    }
) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children }
    </button>
  )
}
