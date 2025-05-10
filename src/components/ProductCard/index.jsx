import React from 'react'
import './ProductCard.scss'
import { Link } from 'react-router-dom'

export default function ProductCard({
    img,
    title,
    shortDesc,
    brand,
    price,
    rating,
    isFavored = false
}) {
    return (
        <article className="product-card">
            <div className="product-card__img-wrap">
                <Link to="/detail">
                    <img src={img} alt="" className="product-card__thumb" />
                </Link>
                <button className="like-btn like-btn--liked product-card__like-btn">
                    {
                        isFavored ?
                            <img src="./src/assets/icons/red-heart.svg" alt="icon" className="like-btn__icon--liked" /> :
                            <img src="./src/assets/icons/heart.svg" alt="icon" className="like-btn__icon icon" />
                    }

                </button>
            </div>
            <div className="product-card__info">
                <h3 className="product-card__title">
                    <Link className="multiline-ellipsis" to="/detail">{title} - {shortDesc}</Link>
                </h3>
                <p className="product-card__brand">{brand}</p>
                <div className="product-card__row">
                    <span className="product-card__price">${price}</span>
                    <div className="product-card__rating">
                        <img src="./src/assets/icons/star.svg" alt="" className="product-card__star" />
                        <span className="product-card__score">{rating}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
