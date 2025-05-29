import React, { useRef, useState } from 'react'
import './Navbar.scss'
import ThemeButton from '../Button/ThemeButton'
import { Link } from 'react-router-dom'
import { dataSrc } from '../../data/DataSource'
import Dropdown from './Dropdown'
import NavbarItem from './NavbarItem'
import useBodyScrollLock from '../../commons/useBodyScrollLock'

export default function Navbar({
    open = false,
    setOpen = () => { },
}) {
    const navItems = [
        {
            id: 1,
            name: "Departments",
            hasMainMenu: true,
        },
        {
            id: 2,
            name: "Grocery",
            hasMainMenu: false,
            data: dataSrc.groceries.columns,
            columnPerGroup: dataSrc.groceries.columnPerGroup
        },
        {
            id: 3,
            name: "Beaty",
            hasMainMenu: false,
            data: dataSrc.beauty.columns,
            columnPerGroup: dataSrc.beauty.columnPerGroup
        }
    ]

    useBodyScrollLock(open);
    return (
        <nav className={`navbar ${open ? 'show' : 'hide'}`} id="navbar">
            <button className="navbar__close-btn" onClick={() => setOpen(false)}>
                <img src="./src/assets/icons/arrow-left.svg" alt="" />
            </button>

            <ThemeButton className='d-none d-md-block' />

            <Link to="/cart" className="nav-btn d-none d-md-flex">
                <img src="./src/assets/icons/buy.svg" alt="" className="icon nav-btn__icon" />
                <span className="nav-btn__title">Cart</span>
                <span className="nav-btn__qnt">{dataSrc.cartList.length}</span>
            </Link>

            <Link to="/favorite" className="nav-btn d-none d-md-flex">
                <img src="./src/assets/icons/heart.svg" alt="" className="icon nav-btn__icon" />
                <span className="nav-btn__title">Favorite</span>
                <span className="nav-btn__qnt">{dataSrc.user.favoriteList.length}</span>
            </Link>

            <ul className="navbar__menu">
                {navItems.map((navItem, index) => {
                    const { hasMainMenu, data, columnPerGroup } = navItem;
                    return (
                        <NavbarItem
                            key={index}
                            name={navItem.name}
                            hasMainMenu={hasMainMenu}
                            data={data}
                            columnPerGroup={columnPerGroup}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}
