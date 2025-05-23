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
        <article class="payment-card" style={{ '--background-color': bgColor }}>
            <img src={img} alt="" class="payment-card__img" />
            <div class="payment-card__top">
                <img src="../src/assets/icons/plane.svg" alt="" />
                <span class="payment-card__type">{type}</span>
            </div>

            <p class="payment-card__number">{number}</p>

            <div class="payment-card__bottom">
                <div>
                    <p class="payment-card__label">Card Holder</p>
                    <p class="payment-card__value">{cardHolder}</p>
                </div>
                <div class="payment-card__expired">
                    <p class="payment-card__label">Expired</p>
                    <p class="payment-card__value">{expired}</p>
                </div>
                <div class="payment-card__circles">
                </div>
            </div>
        </article>
    )
}
