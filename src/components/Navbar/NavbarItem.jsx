import { useState } from "react";
import Dropdown from "./Dropdown";
import ArrowDownIcon from "assets/icons/arrow-down.svg";

export default function NavbarItem(props) {
    const { hasMainMenu, data, columnPerGroup, name } = props;
    const [isActive, setIsActive] = useState(false);
    return (
        <li
            className={`navbar__item ${isActive ? "navbar__item--active" : ""}`}
            onMouseEnter={(e) => {
                const dropdownInner =
                    e.currentTarget.querySelector(".dropdown__inner");
                if (dropdownInner) {
                    const itemLeft =
                        e.currentTarget.getBoundingClientRect().left;
                    const dropdownLeft =
                        dropdownInner.getBoundingClientRect().left;
                    const relativeLeft =
                        itemLeft -
                        dropdownLeft +
                        e.currentTarget.offsetWidth / 2;
                    dropdownInner.style.setProperty(
                        "--arrow-left-pos",
                        `${relativeLeft}px`
                    );
                }
            }}
        >
            <a
                href="#"
                className="navbar__link"
                onClick={() => setIsActive(!isActive)}
            >
                {name}
                <img
                    src={ArrowDownIcon}
                    alt=""
                    className="navbar__arrow icon"
                />
            </a>
            <Dropdown
                hasMainMenu={hasMainMenu}
                data={data}
                columnPerGroup={columnPerGroup}
            />
        </li>
    );
}
