import { Link } from "react-router-dom";
import ThemeButton from "../Button/ThemeButton";
import NavbarItem from "./NavbarItem";
import useBodyScrollLock from "commons/useBodyScrollLock";
import { cartList, user, departments } from "data";
import ArrowLeft from "assets/icons/arrow-left.svg";
import BuyIcon from "assets/icons/buy.svg";
import HeartIcon from "assets/icons/heart.svg";

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
            data: departments[0].columns,
            columnPerGroup: departments[0].columnPerGroup,
        },
    ];

    useBodyScrollLock(open);
    return (
        <nav className={`navbar ${open ? "show" : "hide"}`} id="navbar">
            <button
                className="navbar__close-btn"
                onClick={() => setOpen(false)}
            >
                <img src={ArrowLeft} alt="" />
            </button>

            <ThemeButton className="d-none d-md-block" />

            <Link to="/cart" className="nav-btn d-none d-md-flex">
                <img
                    src={BuyIcon}
                    alt=""
                    className="icon nav-btn__icon"
                />
                <span className="nav-btn__title">Cart</span>
                <span className="nav-btn__qnt">{cartList.length}</span>
            </Link>

            <Link to="/favorite" className="nav-btn d-none d-md-flex">
                <img
                    src={HeartIcon}
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
