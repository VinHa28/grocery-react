import React from 'react'
import './CardPreviewItem.scss'

export default function CardPreviewItem({
    className = '',
    img = '',
    title = '',
    price = '',
}) {
    return (
        <article className={`card-preview-item ${className}`}>
            <div className="card-preview-item__img-wrap">
                <img src={img} alt="" className="card-preview-item__thumb" />
            </div>
            <h3 className="card-preview-item__title">{title}</h3>
            <p className="card-preview-item__price">${price}</p>
        </article>
    )
}
