import React from 'react'
import './ProductInfo.scss'
export default function ProductInfo() {
    return (
        <section className="product-info">
            <h1 className="product-info__heading">Coffee Beans - Espresso Arabica and Robusta Beans</h1>
            <div className="product-info__row row">
                <div className="col-5 col-xl-12">
                    <div className="product-property">
                        <img src="./src/assets/icons/star.svg" alt="" className="product-property__icon" />
                        <h4 className="product-property__title">(3.5) 1100 reviews</h4>
                    </div>
                    <label htmlFor="" className="form__label product-info__label">Size/Weight</label>
                    <div className="form__select-wrap">
                        <div className="form__select" style={{'--width': '140px;'}}>
                            500g
                            <img src="./src/assets/icons/arrow-down.svg" alt="icon" className="icon form__select-icon" />
                        </div>
                        <div className="form__select">
                            Gram
                            <img src="./src/assets/icons/arrow-down.svg" alt="icon" className="icon form__select-icon" />
                        </div>
                    </div>

                    <div className="form__tags product-info__tags">
                        <button className="form__tag product-info__tag">Small</button>
                        <button className="form__tag product-info__tag">Medium</button>
                        <button className="form__tag product-info__tag">Large</button>
                    </div>
                </div>
                <div className="col-7 col-xl-12">
                    <div className="product-properties">
                        <div className="product-property">
                            <img src="./src/assets/icons/document-border.svg" alt="" className="product-property__icon icon" />
                            <h4 className="product-property__title">Compare</h4>
                        </div>
                        <div className="product-property">
                            <img src="./src/assets/icons/buy.svg" alt="" className="product-property__icon icon" />
                            <div>
                                <h4 className="product-property__title">Delivery</h4>
                                <p className="product-property__desc">From $6 for 1-3 days</p>
                            </div>
                        </div>
                        <div className="product-property">
                            <img src="./src/assets/icons/bag.svg" alt="" className="product-property__icon icon" />
                            <div>
                                <h4 className="product-property__title">Pickup</h4>
                                <p className="product-property__desc">Out of 2 store, today</p>
                            </div>
                        </div>

                        <div className="product-info__cart">
                            <div className="product-info__cart-row">
                                <p className="product-info__cart-price product-info__cart-price--smaller">
                                    $500.00
                                </p>
                                <span className="product-info__cart-tax">10%</span>
                            </div>
                            <p className="product-info__cart-total">
                                $540.00
                            </p>
                            <div className="product-info__cart-row">
                                <button className="btn btn--primary product-info__cart-btn">Add to card</button>
                                <button className="like-btn product-info__like-btn">
                                    <img src="./src/assets/icons/heart.svg" alt="icon" className="like-btn__icon icon" />
                                    <img src="./src/assets/icons/red-heart.svg" alt="icon" className="like-btn__icon--liked" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
