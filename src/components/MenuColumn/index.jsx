import CateImg_1 from "img/category/cate-1-1.svg";
import CateImg_2 from "img/category/cate-1-2.svg";

import "./MenuColumn.scss";

export default function MenuColumn({}) {
    return (
        <div className="menu-column">
            <div className="menu-column__icon d-lg-none">
                <img
                    src={CateImg_1}
                    alt="shape"
                    className="menu-column__icon-shape"
                />
                <img
                    src={CateImg_2}
                    alt="category"
                    className="menu-column__icon-cate"
                />
            </div>

            <div className="menu-column__content">
                <h2 className="menu-column__heading d-lg-none">
                    All Departments
                </h2>
                <ul className="menu-column__list js-menu-list"></ul>
            </div>
        </div>
    );
}
