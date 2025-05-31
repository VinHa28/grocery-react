import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "components/SearchBar";
import BreadCrumbs from "components/BreadCrumbs";
import Button from "components/Button";
import AddressCard from "components/AddressCard";
import CartItem from "components/CartItem";
import NewAddressModal from "components/Modals/NewAddressModal";
import PlusIcon from "assets/icons/plus.svg";
import ArrowDownIcon from "assets/icons/arrow-down-2.svg";
import { listAddress, cartList } from "data";

import "./CheckoutPayment.scss";

// Consts
const pathnames = ["Home", "Cart", "Checkout"];
const shipping = 10;
const totalPrice = cartList.reduce((total, item) => {
    return total + item.product.price * item.quantity;
}, 0);

export default function CheckoutPage() {
    const [open, setOpen] = useState(false);
    return (
        <main className="cart-main">
            <div className="container">
                {/* Search Bar */}
                <div className="cart-container d-md-block d-none">
                    <SearchBar />
                </div>

                {/* Breadcrumbs */}
                <div className="cart-container">
                    <BreadCrumbs
                        className="cart-main__breadcrumbs"
                        pathnames={pathnames}
                    />
                </div>

                {/* Content */}
                <div className="cart-container">
                    <div className="row gy-xl-3">
                        <div className="col-8 col-xl-12">
                            <div className="cart-info">
                                <h1 className="cart-info__heading">
                                    1. Shipping, arrives between Mon, May
                                    16—Tue, May 24
                                </h1>

                                <div className="cart-info__separate"></div>

                                <div className="user-address">
                                    <div className="user-address__top">
                                        <div>
                                            <h2 className="user-address__title">
                                                Shipping address
                                            </h2>
                                            <p className="user-address__desc">
                                                Where should we deliver your
                                                order?
                                            </p>
                                        </div>
                                        <Button
                                            className="user-address__btn btn--primary btn--rounded"
                                            onClick={() => setOpen(true)}
                                        >
                                            <img
                                                src={PlusIcon}
                                                alt=""
                                                className="user-address__btn-icon"
                                            />
                                            Add a new address
                                        </Button>
                                    </div>

                                    <div className="user-address__list">
                                        {listAddress.length === 0 ? (
                                            <p className="user-address__message">
                                                Not address yet.
                                                <a
                                                    href="#!"
                                                    className="user-address__message-link"
                                                >
                                                    Add a new address?
                                                </a>
                                            </p>
                                        ) : (
                                            listAddress.map((item, index) => (
                                                <AddressCard
                                                    key={index}
                                                    address={item.address}
                                                    receiver={item.receiver}
                                                    selected={item.selected}
                                                />
                                            ))
                                        )}
                                    </div>
                                </div>

                                <div className="cart-info__separate"></div>
                                <h3 className="cart-info__sub-heading">
                                    Items details
                                </h3>

                                <div className="cart-info__list">
                                    {cartList.map((cart) => {
                                        return (
                                            <CartItem
                                                key={cart.product.id}
                                                title={`${cart.product.name} - ${cart.product.shortDesc}`}
                                                brand={cart.product.brand}
                                                initialQuantity={cart.quantity}
                                                img={cart.product.img}
                                                inStock={cart.product.inStock}
                                                isFavored={
                                                    cart.product.isFavored
                                                }
                                                price={cart.product.price}
                                            />
                                        );
                                    })}
                                </div>

                                <div className="cart-info__bottom d-md-none">
                                    <div className="row">
                                        <div className="col-8 col-xxl-7">
                                            <div className="cart-info__continue">
                                                <Link
                                                    to="/"
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 col-xl-12">
                            <div className="cart-info">
                                <div className="cart-info__row">
                                    <span>
                                        Subtotal{" "}
                                        <span className="cart-info__sub-label">
                                            (items)
                                        </span>
                                    </span>
                                    <span>{cartList.length}</span>
                                </div>

                                <div className="cart-info__row">
                                    <span>
                                        Price{" "}
                                        <span className="cart-info__sub-label">
                                            (Total)
                                        </span>
                                    </span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>

                                <div className="cart-info__row">
                                    <span>Shipping:</span>
                                    <span>${shipping}</span>
                                </div>

                                <div className="cart-info__separate"></div>
                                <div className="cart-info__row">
                                    <span>Estimated Total</span>
                                    <span>
                                        ${(totalPrice + shipping).toFixed(2)}
                                    </span>
                                </div>

                                <Link to="/payment">
                                    <Button className="btn--primary btn--rounded cart-info__btn">
                                        Continue to checkout
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NewAddressModal open={open} setOpen={setOpen}></NewAddressModal>
        </main>
    );
}
