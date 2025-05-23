import React from 'react'
import './FavoriteItem.scss'
import { Link } from 'react-router-dom'
import Button from '../Button'
export default function FavoriteItem({
    img, 
    title,
    shortDesc,
    price,
}) {
    return (
        <article class="favorite-item">
            <img src={img} alt="" class="favorite-item__thumb" />
            <div class="favorite-item__content">
                <h3 class="favorite-item__title">
                    <Link to="/detail">{`${title} - ${shortDesc}`}</Link>
                </h3>
                <div class="favorite-item__control">
                    <p class="favorite-item__price">${price.toFixed(2)}</p>
                    <Button className="btn--primary btn--rounded favorite-item__btn">
                        Add to cart
                    </Button>
                </div>
            </div>
        </article>
    )
}
