import React from 'react'
import "./Logo.scss"
import { Link } from 'react-router-dom'

export default function Logo(
    {
        className = '',
    }
) {
    return (
        <Link to="/" className={className + ' logo'}>
            <img src="./src/assets/icons/logo.svg" alt="grocerymart" className="logo__img" />
            <h2 className="logo__title">grocerymart</h2>
        </Link>
    )
}
