import AvatarImg from "img/avatar/non-avatar.jpg";
import StarIcon from "assets/icons/star.svg";
import HalfStarIcon from "assets/icons/star-half.svg";
import BlankStarIcon from "assets/icons/star-blank.svg";

import "./ReviewCard.scss";

export default function ReviewCard(props) {
    const {
        className,
        reviewerName,
        content,
        avatarSrc = AvatarImg,
        rating = 0,
    } = props;
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <img
                    key={`full-${i}`}
                    src={StarIcon}
                    alt=""
                    className="review-card__star"
                />
            );
        }
        if (hasHalfStar) {
            stars.push(
                <img
                    key="half"
                    src={HalfStarIcon}
                    alt=""
                    className="review-card__star"
                />
            );
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <img
                    key={`empty-${i}`}
                    src={BlankStarIcon}
                    alt=""
                    className="review-card__star"
                />
            );
        }
        return stars;
    };
    return (
        <div className={`review-card ${className}`}>
            <div className="review-card__content">
                <img
                    src={avatarSrc}
                    alt={reviewerName}
                    className="review-card__avt"
                />
                <div className="review-card__info">
                    <h4 className="review-card__title">{reviewerName}</h4>
                    <p className="review-card__desc">{content}</p>
                </div>
            </div>
            <div className="review-card__rating">
                <div className="review-card__stars">{renderStars(rating)}</div>
                <span className="review-card__title review-card__title--smaller">
                    ({rating} )
                    <img
                        src="./src/assets/icons/star.svg"
                        alt=""
                        className="review-card__star"
                    />
                </span>
            </div>
        </div>
    );
}
