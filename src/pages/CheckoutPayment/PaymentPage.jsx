import { Link } from "react-router-dom";
import { Form, FormInput, FormRow } from "components/Form";
import SearchBar from "components/SearchBar";
import BreadCrumbs from "components/BreadCrumbs";
import Button from "components/Button";
import PaymentItem from "components/PaymentItem";
import EditIcon from "assets/icons/edit.svg";
import Delivery1Img from "img/payment/delevery-1.png";
import Delivery2Img from "img/payment/delevery-2.png";
import { cartList } from "data";

import "./CheckoutPayment.scss";

/**Consts */
const pathnames = ["Home", "Cart", "Checkout", "Payment"];
const shipping = 10;
const totalPrice = cartList.reduce((total, item) => {
    return total + item.product.price * item.quantity;
}, 0);

export default function PaymentPage() {
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
                        <div className="col-8 col-xl-12">
                            <div className="cart-info">
                                <div className="cart-info__row">
                                    <h1 className="cart-info__heading cart-info__heading--no-margin">
                                        1. Shipping, arrives between Mon, May
                                        16—Tue, May 24
                                    </h1>

                                    <div className="address-card__control">
                                        <Link to="/checkout">
                                            <Button className="btn--text address-card__btn">
                                                <img
                                                    src={EditIcon}
                                                    alt=""
                                                    className="address-card__btn-icon icon"
                                                />
                                                Edit
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <PaymentItem />
                                <PaymentItem
                                    title="Items details"
                                    desc={`${cartList.length} item(s)`}
                                    hasLink={true}
                                />
                            </div>

                            <div className="cart-info">
                                <div className="cart-info__row">
                                    <h2 className="cart-info__heading cart-info__heading--no-margin">
                                        2. Shipping method
                                    </h2>
                                </div>
                                <div className="cart-info__separate"></div>
                                <h3 className="cart-info__sub-heading cart-info__sub-heading--smaller">
                                    Availeble Shipping method
                                </h3>
                                <div className="payment-item">
                                    <img
                                        src={Delivery1Img}
                                        alt=""
                                        className="payment-item__img"
                                    />
                                    <div className="payment-item__content">
                                        <div className="payment-item__left">
                                            <h2 className="user-address__title">
                                                Fedex Delivery
                                            </h2>
                                            <p className="user-address__desc">
                                                Delivery: 2-3 days work
                                            </p>
                                        </div>
                                        <div className="payment-item__right payment-item__right--sm-left">
                                            <div className="address-card__choose">
                                                <label className="address-card__checkbox payment-item__checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="address-card__checkbox-input payment-item__checkbox-input"
                                                        checked
                                                        onChange={() => {}}
                                                    />
                                                    <span className="payment-item__cost">
                                                        Free
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-item">
                                    <img
                                        src={Delivery2Img}
                                        alt=""
                                        className="payment-item__img"
                                    />
                                    <div className="payment-item__content">
                                        <div className="payment-item__left">
                                            <h2 className="user-address__title">
                                                DHL Delivery
                                            </h2>
                                            <p className="user-address__desc">
                                                Delivery: 2-3 days work
                                            </p>
                                        </div>
                                        <div className="payment-item__right payment-item__right--sm-left">
                                            <div className="address-card__choose">
                                                <label className="address-card__checkbox payment-item__checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="address-card__checkbox-input payment-item__checkbox-input"
                                                    />
                                                    <span className="payment-item__cost">
                                                        $12.00
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-xl-12">
                            <div className="cart-info">
                                <h1 className="cart-info__heading cart-info__heading--no-margin">
                                    Payment Details
                                </h1>
                                <p className="user-address__desc">
                                    Complete your purchase item by providing
                                    your payment details order.
                                </p>

                                <Form className="payment-form">
                                    <div className="payment-form__input-wrap">
                                        <FormInput
                                            type="email"
                                            id="email"
                                            label="Email"
                                            name="email"
                                            require={true}
                                            placeholder="Email Address"
                                            inputClass="payment-form__input"
                                            labelClass="payment-form__label"
                                            errMessage="The email is incorrect format!"
                                        />

                                        <FormInput
                                            type="text"
                                            id="card-holder"
                                            label="Card Holder"
                                            name="Card Holder"
                                            require={true}
                                            placeholder="Card Holder"
                                            inputClass="payment-form__input"
                                            labelClass="payment-form__label"
                                        />

                                        <FormInput
                                            type="text"
                                            id="card-details"
                                            label="Card Details"
                                            name="Card Details"
                                            require={true}
                                            placeholder="Card Details"
                                            inputClass="payment-form__input"
                                            labelClass="payment-form__label"
                                        />

                                        <FormRow>
                                            <FormInput
                                                type="text"
                                                require={true}
                                                placeholder="MM/YY"
                                                inputClass="payment-form__input"
                                                labelClass="payment-form__label"
                                            />
                                            <FormInput
                                                type="text"
                                                require={true}
                                                placeholder="CVC"
                                                inputClass="payment-form__input"
                                                labelClass="payment-form__label"
                                            />
                                        </FormRow>
                                    </div>

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
                                        <span>${totalPrice}</span>
                                    </div>
                                    <div className="cart-info__row">
                                        <span>Shipping:</span>
                                        <span>${shipping}</span>
                                    </div>

                                    <div className="cart-info__separate"></div>

                                    <div className="cart-info__row">
                                        <span>Estimated Total</span>
                                        <span>${totalPrice + shipping}</span>
                                    </div>

                                    <Button className="btn--primary btn--rounded cart-info__btn">
                                        Pay ${totalPrice + shipping}
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
