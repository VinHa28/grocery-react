import React from 'react'
import './Button.scss'

export default function Button(
    {
      children,
        className = '',
        onClick = () => {},
    }
) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children }
    </button>
  )
}
