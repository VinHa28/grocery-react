import React from 'react'
import './SearchBar.scss'

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" name="" id="" className="search-bar__input" placeholder="Search for item" />
            <button className="search-bar__btn">
                <img src="./src/assets/icons/search.svg" className="search-bar__icon icon" alt="" />
            </button>
        </div>
    )
}
