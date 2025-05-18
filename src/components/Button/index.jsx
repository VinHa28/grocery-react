import React from 'react'
import './Button.scss'

export default function Button(
    {
        content = 'Button',
        className = '',
    }
) {
  return (
    <button className={`btn ${className}`}>{content}</button>
  )
}
