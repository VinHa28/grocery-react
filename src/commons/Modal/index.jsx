import React, { Children, useEffect } from 'react'
import './Modal.scss'
import useBodyScrollLock from '../useBodyScrollLock'

export default function Modal({
  open = false,
  setOpen = () => { },
  message,
  className = '',
  children,
  style = {},
} = {}) {
  
  useBodyScrollLock(open);
  
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`modal ${open ? 'show' : ''} ${className}`}
      style={{ ...style }}
    >
      <div className='modal__content'>
        {children}
      </div>
      <div className="modal__overlay" onClick={() => setOpen(false)}></div>
    </div>
  )
}
