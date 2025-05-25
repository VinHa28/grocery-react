import React, { useState } from 'react'
import './Navbar.scss'
import { dataSrc } from '../../data/DataSource'
import SubMenu from './SubMenu';
import { Link } from 'react-router-dom';

export default function MenuColumnList({
    className = '',
    data = dataSrc.departments.slice(2),

}) {
    const [activeItem, setActiveItem] = useState(0);
    return (
        <ul className={`menu-column__list ${className}`}>
            {data.map((department, index) => {
                return (
                    <li
                        className={`menu-column__item ${index === activeItem ? 'menu-column__item--active' : ''}`}
                        key={index}
                        onMouseEnter={() => setActiveItem(index)}
                    >
                        <Link to="#" className="menu-column__link" onClick={() => {
                            setActiveItem(index)
                        }}>
                            {department.title}
                        </Link>
                        <SubMenu data={department.columns} className='' columnPerGroup={department.columnPerGroup} />
                    </li>
                );
            })}
        </ul>
    )
}
