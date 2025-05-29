import React, { useEffect, useRef, useState } from 'react'
import './Navbar.scss'
import { dataSrc } from '../../data/DataSource'
import SubMenu from './SubMenu';
import { Link } from 'react-router-dom';

const breakPoint = 992;

export default function MenuColumnList({
    className = '',
    data = dataSrc.departments.slice(2),
}) {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= breakPoint);
    const [activeItem, setActiveItem] = useState(isLargeScreen ? 0 : null);
    const itemsRef = useRef([]);

    const handleClick = (index) => {
        setActiveItem(index);

        if (!isLargeScreen && itemsRef.current[index]) {
            setTimeout(() => {
                itemsRef.current[index].scrollIntoView({
                    block: 'start',
                })
            }, 10);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= breakPoint);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <ul className={`menu-column__list ${className}`}>
            {data.map((department, index) => {
                const itemProps = {
                    className: `menu-column__item ${index === activeItem ? 'menu-column__item--active' : ''}`,
                    ...(isLargeScreen ? { onMouseEnter: () => setActiveItem(index) } : {}),
                }
                return (
                    <li {...itemProps} key={index} ref={el => itemsRef.current[index] = el}>
                        <Link to="#" className="menu-column__link" onClick={() => handleClick(index)}>
                            {department.title}
                        </Link>
                        <SubMenu data={department.columns} className='' columnPerGroup={department.columnPerGroup} />
                    </li>
                );
            })}
        </ul>
    )
}
