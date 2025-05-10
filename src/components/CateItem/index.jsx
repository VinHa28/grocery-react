import React from 'react'
import './CateItem.scss'

export default function CateItem({ img, title, desc }) {
    return (
        <article className="cate-item">
            <div className="cate-item__thumb">
                <img src={img}/>
            </div>
            <div className="cate-item__infor">
                <h3 className="cate-item__title">{title}</h3>
                <p className="cate-item__desc">{desc}</p>
            </div>
        </article>
    )
}
