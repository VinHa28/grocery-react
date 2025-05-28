import React from 'react'

export default function ModalBottom({
    className = '',
    style={},
    children,
} = {}) {
  return (
    <div className={`modal__bottom ${className}`}>
        {children}
    </div>
  )
}
