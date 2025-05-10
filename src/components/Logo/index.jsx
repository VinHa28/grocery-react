import React from 'react'
import "./Logo.scss"

export default function Logo(
    {
        className='',
    }
) {
    return (
        <a href="./" className={className + ' logo'}>
            <img src="./src/assets/icons/logo.svg" alt="grocerymart" className="logo__img" />
            <h2 className="logo__title">grocerymart</h2>
        </a>
    )
}
