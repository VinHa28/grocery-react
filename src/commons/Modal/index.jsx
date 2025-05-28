import React, { Children, useEffect } from 'react'
import './Modal.scss'

export default function Modal({
  open = false,
  setOpen = () => { },
  message,
  className = '',
  children,
  style = {},
} = {}) {
  useEffect(() => {
    if (open) {
      // Tính toán width của scrollbar để compensate
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const scrollY = window.scrollY;

      // Lưu các giá trị gốc
      const originalStyle = {
        overflow: document.body.style.overflow,
        paddingRight: document.body.style.paddingRight,
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width
      };

      // Apply scroll lock với compensate scrollbar width
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      // Cleanup function
      return () => {
        // Restore tất cả style gốc
        Object.assign(document.body.style, originalStyle);

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

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
