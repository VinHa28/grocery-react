import React from 'react'

export default function ModalBody({
    className='',
    children,
    style={}
} = {}) {
    return (
        <div className={`modal__body ${className}`} style={style}>
            {children}
        </div>
    )
}
