import { Link } from 'react-router-dom'
import logo from "assets/icons/logo.svg"

import "./Logo.scss"

export default function Logo({ className = '' }) {
    return (
        <Link to="/" className={className + ' logo'}>
            <img src={logo} alt="grocerymart" className="logo__img" />
            <h2 className="logo__title">grocerymart</h2>
        </Link>
    )
}
