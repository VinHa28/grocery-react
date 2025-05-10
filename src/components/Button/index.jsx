import React from 'react'
import './Button.scss'

export default function Button(
    {
        content = 'Button',
        className = '',
    }
) {
  return (
    <div className={className}>{content}</div>
  )
}
