import React, { useState } from "react";
import "./ActionDropdown.scss";
import "./Header.scss";
import Logo from "components/Logo";
import Button from "components/Button";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";
import ThemeButton from "components/Button/ThemeButton";
import CardPreviewItem from "components/CardPreviewItem";
import { useTheme } from "context/ThemeContext";
import { cartList } from "data";

const dropdownRows = [
    {
        label: "Subtotal",
        value: "$415.99",
    },
    {
        label: "Taxes",
        value: "Free",
    },
    {
        label: "Shipping",
        value: "$10.00",
    },
];

export default function Header({ isLogged = true }) {
    const [open, setOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    return (
        <header className="header">
            <div className="container">
                <div className="top-bar">
                    <button
                        className="top-bar__more d-none d-lg-block"
                        onClick={() => setOpen(true)}
                    >
                        <img
                            src="../src/assets/icons/document.svg"
                            className="icon top-bar__more-icon"
                        />
                    </button>

                    <Logo className="header__logo " />
                    <Navbar open={open} setOpen={setOpen} />
                    <div
                        className="navbar__overlay"
                        onClick={() => setOpen(false)}
                    ></div>
                    <div className="top-action">
                        {!isLogged && <ThemeButton className="d-md-none" />}

                        {!isLogged && (
                            <>
                                <Link to="/login">
                                    <Button className="btn btn--text d-md-none">
                                        Sign In
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="btn btn--primary top-action__sign-up">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        )}

                        {isLogged && (
                            <>
                                <div className="top-action__group d-md-none">
                                    <div className="top-action__btn-wrap">
                                        <Link to="/favorite">
                                            <button className="top-action__btn">
                                                <img
                                                    src="../src/assets/icons/heart.svg"
                                                    alt=""
                                                    className="top-action__icon icon"
                                                />
                                                <span className="top-action__title">
                                                    03
                                                </span>
                                            </button>
                                        </Link>
                                        <div className="action-dropdown">
                                            <div className="action-dropdown__inner">
                                                <img
                                                    src="../src/assets/icons/arrow-up.png"
                                                    alt=""
                                                    className="action-dropdown__arrow"
                                                />
                                                <div className="action-dropdown__top">
                                                    <div className="action-dropdown__row">
                                                        <h2 className="action-dropdown__title">
                                                            You have 3 item(s)
                                                        </h2>
                                                        <Link
                                                            to="/favorite"
                                                            className="action-dropdown__view-all"
                                                        >
                                                            See All
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="row row-cols-3 gx-2 card-preview-item__list">
                                                    {cartList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div
                                                                    className="col"
                                                                    key={index}
                                                                >
                                                                    <CardPreviewItem
                                                                        title={`${item.product.brand} - ${item.product.name}`}
                                                                        price={
                                                                            item
                                                                                .product
                                                                                .price
                                                                        }
                                                                        img={
                                                                            item
                                                                                .product
                                                                                .img
                                                                        }
                                                                    />
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                                <div className="action-dropdown__separate"></div>
                                                <div className="action-dropdown__checkout">
                                                    <Link to="/checkout">
                                                        <Button className="btn--primary btn--rounded action-dropdown__btn">
                                                            Check Out All
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="top-action__separate"></div>
                                    <div className="top-action__btn-wrap">
                                        <Link to="/cart">
                                            <button className="top-action__btn">
                                                <img
                                                    src="../src/assets/icons/buy.svg"
                                                    alt=""
                                                    className="top-action__icon icon"
                                                />
                                                <span className="top-action__title">
                                                    $65.42
                                                </span>
                                            </button>
                                        </Link>
                                        <div className="action-dropdown">
                                            <div className="action-dropdown__inner">
                                                <img
                                                    src="../src/assets/icons/arrow-up.png"
                                                    alt=""
                                                    className="action-dropdown__arrow"
                                                />
                                                <div className="action-dropdown__top">
                                                    <div className="action-dropdown__row">
                                                        <h2 className="action-dropdown__title">
                                                            You have 3 item(s)
                                                        </h2>
                                                        <Link
                                                            to="/cart"
                                                            className="action-dropdown__view-all"
                                                        >
                                                            See All
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="row row-cols-3 gx-2 card-preview-item__list">
                                                    {cartList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div
                                                                    className="col"
                                                                    key={index}
                                                                >
                                                                    <CardPreviewItem
                                                                        title={`${item.product.brand} - ${item.product.name}`}
                                                                        price={
                                                                            item
                                                                                .product
                                                                                .price
                                                                        }
                                                                        img={
                                                                            item
                                                                                .product
                                                                                .img
                                                                        }
                                                                    />
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                                <div className="action-dropdown__bottom">
                                                    {dropdownRows.map(
                                                        (item, index) => (
                                                            <div
                                                                className="action-dropdown__row"
                                                                key={index}
                                                            >
                                                                <span className="action-dropdown__label">
                                                                    {item.label}
                                                                    :
                                                                </span>
                                                                <span className="action-dropdown__value">
                                                                    {item.value}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}

                                                    <div className="action-dropdown__row">
                                                        <span className="action-dropdown__label action-dropdown__label--bold">
                                                            Total Price:
                                                        </span>
                                                        <span className="action-dropdown__value action-dropdown__value--bold">
                                                            $425.99
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="action-dropdown__checkout">
                                                    <a href="/checkout">
                                                        <Button className="btn--primary btn--rounded action-dropdown__btn">
                                                            Check Out All
                                                        </Button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-action__user">
                                    <img
                                        src="../src/assets/img/avatar.JPG"
                                        alt=""
                                        className="top-action__avatar"
                                    />
                                    <div className="action-dropdown top-action__dropdown">
                                        <div className="action-dropdown__inner user-menu">
                                            <img
                                                src="../src/assets/icons/arrow-up.png"
                                                alt=""
                                                className="action-dropdown__arrow top-action__dropdown-arrow"
                                            />

                                            <div className="user-menu__top">
                                                <img
                                                    src="../src/assets/img/avatar.JPG"
                                                    alt=""
                                                    className="user-menu__avatar"
                                                />
                                                <div>
                                                    <p className="user-menu__name">
                                                        Vinh Ha Van
                                                    </p>
                                                    <p>vinhhv28</p>
                                                </div>
                                            </div>

                                            <ul className="user-menu__list">
                                                <li>
                                                    <a
                                                        href="/profile"
                                                        className="user-menu__link"
                                                    >
                                                        Profile
                                                        <img
                                                            src="../src/assets/icons/user.svg"
                                                            alt=""
                                                            className="user-menu__icon icon"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/cart"
                                                        className="user-menu__link"
                                                    >
                                                        Your cart
                                                    </a>
                                                </li>
                                                <li className="user-menu__separate">
                                                    <a
                                                        href="/favorite"
                                                        className="user-menu__link"
                                                    >
                                                        Favorite list
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#!"
                                                        className="user-menu__link"
                                                        onClick={toggleTheme}
                                                    >
                                                        <span>
                                                            {isDark
                                                                ? "Light mode"
                                                                : "Dark mode"}
                                                        </span>
                                                        <img
                                                            src="../src/assets/icons/sun-dark.svg"
                                                            alt=""
                                                            className="user-menu__icon icon"
                                                        />
                                                    </a>
                                                </li>

                                                <li className="user-menu__separate">
                                                    <a
                                                        href=""
                                                        className="user-menu__link"
                                                    >
                                                        Settings
                                                        <img
                                                            src="../src/assets/icons/setting.svg"
                                                            alt=""
                                                            className="user-menu__icon icon"
                                                        />
                                                    </a>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/login"
                                                        className="user-menu__link"
                                                    >
                                                        Logout
                                                        <img
                                                            src="../src/assets/icons/logout.svg"
                                                            alt=""
                                                            className="user-menu__icon icon"
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
