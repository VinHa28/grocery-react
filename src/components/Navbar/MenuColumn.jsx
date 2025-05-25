import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function MenuColumn({
    iconShape,
    iconCate,
    heading = '',
    items = [],
    className,
}) {
    return (
        <div className={`menu-column ${className}`}>
            <div className="menu-column__icon">
                <img src={iconShape} alt="shape" className="menu-column__icon-shape" />
                <img src={iconCate} alt="category" className="menu-column__icon-cate" />
            </div>
            <div className="menu-column__content">
                <h2 className="menu-column__heading">
                    <Link to="#">{heading}</Link>
                </h2>
                <ul className="menu-column__list">
                    {items.map((link, index) => (
                        <li className="menu-column__item" key={index}>
                            <Link to="#" className="menu-column__link">{link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
