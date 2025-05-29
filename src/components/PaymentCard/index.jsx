import React from 'react'
import './PaymentCard.scss'

export default function PaymentCard({
    img = '../src/assets/img/card/air-plane.svg',
    bgColor='#1E2E69',
    type = '',
    number = '',
    cardHolder = '',
    expired = '',

}) {
    return (
        <article className="payment-card" style={{ '--background-color': bgColor }}>
            <img src={img} alt="" className="payment-card__img" />
            <div className="payment-card__top">
                <img src="../src/assets/icons/plane.svg" alt="" />
                <span className="payment-card__type">{type}</span>
            </div>

            <p className="payment-card__number">{number}</p>

            <div className="payment-card__bottom">
                <div>
                    <p className="payment-card__label">Card Holder</p>
                    <p className="payment-card__value">{cardHolder}</p>
                </div>
                <div className="payment-card__expired">
                    <p className="payment-card__label">Expired</p>
                    <p className="payment-card__value">{expired}</p>
                </div>
                <div className="payment-card__circles">
                </div>
            </div>
        </article>
    )
}
