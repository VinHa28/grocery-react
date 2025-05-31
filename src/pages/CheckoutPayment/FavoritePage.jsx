import SearchBar from "components/SearchBar";
import { Link } from "react-router-dom";
import BreadCrumbs from "components/BreadCrumbs";
import CartItem from "components/CartItem";
import ArrowDownIcon from "assets/icons/arrow-down-2.svg";
import Product1Img from "img/product/product-1.png";
import Product2Img from "img/product/product-2.png";
import Product3Img from "img/product/product-3.png";

import "./CheckoutPayment.scss";

const favoriteList = [
    {
        brand: "LavAzza",
        img: Product2Img,
        inStock: true,
        initialQuantity: 1,
        isFavored: true,
        price: "47.00",
        title: "Coffee Beans - Espresso Arabica and Robusta Beans",
        hasCheckBox: true,
    },
    {
        brand: "LavAzza",
        img: Product1Img,
        inStock: true,
        initialQuantity: 1,
        isFavored: true,
        price: "38.00",
        title: "Lavazza Coffee Blends - Try the Italian Espresso",
        hasCheckBox: true,
    },
    {
        brand: "LavAzza",
        img: Product3Img,
        inStock: true,
        initialQuantity: 1,
        isFavored: true,
        price: "106.50",
        title: "Qualità Oro Mountain Grown - Espresso Coffee Beans",
        hasCheckBox: true,
    },
];

export default function FavoritePage() {
    const pathnames = ["Home", "Favorite"];
    return (
        <main className="cart-main">
            <div className="container">
                <div className="cart-container d-md-block d-none">
                    <SearchBar />
                </div>

                <div className="cart-container">
                    <BreadCrumbs
                        pathnames={pathnames}
                        className="cart-main__breadcrumbs"
                    />
                </div>

                <div className="cart-container">
                    <div className="row gy-xl-3">
                        <div className="col-12">
                            <div className="cart-info">
                                <h1 className="cart-info__heading cart-info__heading--no-margin">
                                    Favourite List
                                </h1>
                                <p className="cart-info__desc">3 items</p>
                                <div className="cart-info__check-all">
                                    <label className="address-card__checkbox">
                                        <input
                                            type="checkbox"
                                            className="address-card__checkbox-input"
                                            checked
                                            onChange={() => {}}
                                        />
                                    </label>
                                </div>

                                <div className="cart-info__list">
                                    {favoriteList.map((item, index) => (
                                        <CartItem
                                            key={index}
                                            brand={item.brand}
                                            img={item.img}
                                            inStock={item.inStock}
                                            initialQuantity={1}
                                            isFavored={true}
                                            price={item.price}
                                            title={item.title}
                                            hasCheckBox={true}
                                        />
                                    ))}
                                </div>

                                <div className="cart-info__bottom">
                                    <div className="cart-info__row cart-info__row--bottom">
                                        <div className="cart-info__continue">
                                            <Link
                                                to="/home"
                                                className="cart-info__continue-link"
                                            >
                                                <img
                                                    src={ArrowDownIcon}
                                                    alt=""
                                                    className="cart-info__continue-icon icon"
                                                />
                                                Continue Shopping
                                            </Link>
                                        </div>
                                        <Link
                                            to="/checkout"
                                            className="cart-info__btn btn btn--primary btn--rounded"
                                            style={{
                                                width: "auto",
                                                marginTop: 0,
                                            }}
                                        >
                                            Check out all
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
