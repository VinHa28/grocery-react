import { Link } from "react-router-dom";
import ThemeButton from "../Button/ThemeButton";
import NavbarItem from "./NavbarItem";
import useBodyScrollLock from "commons/useBodyScrollLock";
import { cartList, user, departments } from "data";

import "./Navbar.scss";

export default function Navbar({ open = false, setOpen = () => {} }) {
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
            data: departments[1].columns,
            columnPerGroup: departments[1].columnPerGroup,
        },
        {
            id: 3,
            name: "Beauty",
            hasMainMenu: false,
            data: departments[2].columns,
            columnPerGroup: departments[2].columnPerGroup,
        },
    ];

    useBodyScrollLock(open);
    return (
        <nav className={`navbar ${open ? "show" : "hide"}`} id="navbar">
            <button
                className="navbar__close-btn"
                onClick={() => setOpen(false)}
            >
                <img src="assets/icons/arrow-left.svg" alt="" />
            </button>

            <ThemeButton className="d-none d-md-block" />

            <Link to="/cart" className="nav-btn d-none d-md-flex">
                <img
                    src="assets/icons/buy.svg"
                    alt=""
                    className="icon nav-btn__icon"
                />
                <span className="nav-btn__title">Cart</span>
                <span className="nav-btn__qnt">{cartList.length}</span>
            </Link>

            <Link to="/favorite" className="nav-btn d-none d-md-flex">
                <img
                    src="assets/icons/heart.svg"
                    alt=""
                    className="icon nav-btn__icon"
                />
                <span className="nav-btn__title">Favorite</span>
                <span className="nav-btn__qnt">{user.favoriteList.length}</span>
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
                    );
                })}
            </ul>
        </nav>
    );
}
