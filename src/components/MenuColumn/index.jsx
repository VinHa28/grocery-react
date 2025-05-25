import React from 'react'
import './MenuColumn.scss'

export default function MenuColumn({

}) {
    return (
        <div className="menu-column">
            <div className="menu-column__icon d-lg-none">
                <img src="../src/assets/img/category/cate-1-1.svg" alt="shape"
                    className="menu-column__icon-shape" />
                <img src="../src/assets/img/category/cate-1-2.svg" alt="category"
                    className="menu-column__icon-cate" />
            </div>

            <div className="menu-column__content">
                <h2 className="menu-column__heading d-lg-none">All Departments</h2>
                <ul className="menu-column__list js-menu-list">
                        
                </ul>
            </div>
        </div>
    )
}
