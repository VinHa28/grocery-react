import "./CheckoutPayment.scss";
import SearchBar from "components/SearchBar";
import BreadCrumbs from "components/BreadCrumbs";
import CartItem from "components/CartItem";
import { Link } from "react-router-dom";
import Button from "components/Button";
import GiftItem from "components/GiftItem";
import ArrowDownIcon from "assets/icons/arrow-down-2.svg";
import { cartList } from "data";

import "./CheckoutPayment.scss";

const shipping = 10;

const totalPrice = cartList.reduce((total, item) => {
    return total + item.product.price * item.quantity;
}, 0);

export default function CartPage() {
    return (
        <main className="cart-main">
            <div className="container">
                <div className="cart-container d-md-block d-none">
                    <SearchBar />
                </div>
                <div className="cart-container">
                    <BreadCrumbs
                        className="cart-main__breadcrumbs"
                        pathnames={["Home", "Cart"]}
                    ></BreadCrumbs>
                </div>
                <div className="cart-container">
                    <div className="row gy-xl-3">
                        {/* Cart */}
                        <div className="col-8 col-xl-12">
                            <div className="cart-info">
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
                                                        className="cart-info__continue-icon icon"
                                                    />
                                                    Continue Shopping
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-4 col-xxl-5">
                                            <div className="cart-info__row">
                                                <span>Subtotal:</span>
                                                <span>
                                                    ${totalPrice.toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="cart-info__row">
                                                <span>Shipping:</span>
                                                <span>${shipping}</span>
                                            </div>
                                            <div className="cart-info__separate"></div>
                                            <div className="cart-info__row cart-info__row--bold">
                                                <span>Total:</span>
                                                <span>
                                                    $
                                                    {(
                                                        totalPrice + shipping
                                                    ).toFixed(2)}
                                                </span>
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

                                <Link to="/checkout">
                                    <Button className="btn--primary btn--rounded cart-info__btn">
                                        Continue to checkout
                                    </Button>
                                </Link>
                            </div>

                            <div className="cart-info">
                                <Link to="#!">
                                    <GiftItem
                                        title="Send this order as a gift."
                                        content="Available items will be shipped to your gift recipient."
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
