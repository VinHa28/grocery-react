import { Link } from "react-router-dom";
import LikeButton from "../Button/LikeButton";
import StarIcon from "assets/icons/star.svg";

import "./ProductCard.scss";

export default function ProductCard(props) {
    const {
        img,
        title,
        shortDesc,
        brand,
        price,
        rating,
        isFavored = false,
    } = props;
    return (
        <article className="product-card">
            <div className="product-card__img-wrap">
                <Link to="/detail">
                    <img src={img} alt="" className="product-card__thumb" />
                </Link>
                <LikeButton
                    className="product-card__like-btn"
                    liked={isFavored}
                />
            </div>
            <div className="product-card__info">
                <h3 className="product-card__title">
                    <Link className="multiline-ellipsis" to="/detail">
                        {title} - {shortDesc}
                    </Link>
                </h3>
                <p className="product-card__brand">{brand}</p>
                <div className="product-card__row">
                    <span className="product-card__price">${price}</span>
                    <div className="product-card__rating">
                        <img
                            src={StarIcon}
                            alt=""
                            className="product-card__star"
                        />
                        <span className="product-card__score">{rating}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
