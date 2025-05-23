import React from 'react'
import './PaymentItem.scss'
import { Link } from 'react-router-dom'
export default function PaymentItem({
    title = 'Vinh Ha Van',
    desc = 'FPT University, Hoa Lac High-Tech Park, Thach That, Hanoi, Vietnam.',
    hasLink = false,
}) {
    return (
        <div className="payment-item">
            <div className="payment-item__left">
                <h2 className="user-address__title">{title}</h2>
                <p className="user-address__desc"> {desc} </p>
            </div>

            {
                hasLink &&
                <div className="payment-item__right">
                    <Link to="/cart" className="payment-item__link">View details</Link>
                </div>
            }
        </div>
    )
}
