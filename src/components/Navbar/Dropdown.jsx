import "./Navbar.scss";
import SubMenu from "./SubMenu";
import MenuColumnList from "./MenuColumnList";

import CateImg_1 from "img/category/cate-1-1.svg";
import CateImg_2 from "img/category/cate-1-2.svg";

export default function Dropdown(props) {
    const { data = [], columnPerGroup = [], hasMainMenu = false } = props;
    return (
        <div className="dropdown">
            <div className="dropdown__inner">
                <div className="top-menu">
                    {hasMainMenu ? (
                        <div className="top-menu__main">
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
                                    <MenuColumnList></MenuColumnList>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <SubMenu data={data} columnPerGroup={columnPerGroup} />
                    )}
                </div>
            </div>
        </div>
    );
}
