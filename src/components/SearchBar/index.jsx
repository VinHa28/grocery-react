import React from "react";
import "./SearchBar.scss";

export default function SearchBar(props) {
    const { className, id, name, placeholder = "Search for item" } = props;
    return (
        <div className={`search-bar ${className}`}>
            <input
                type="text"
                name={name}
                id={id}
                className="search-bar__input"
                placeholder={placeholder}
            />
            <button className="search-bar__btn">
                <img
                    src="assets/icons/search.svg"
                    className="search-bar__icon icon"
                    alt=""
                />
            </button>
        </div>
    );
}
