import React from 'react'
import './ReviewCard.scss'

export default function ReviewCard({
    className = '',
    avatarSrc = './src/assets/img/avatar/non-avatar.jpg',
    reviewerName = '',
    content = '',
    rating = 0,
}) {
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < fullStars; i++) {
            stars.push(<img key={`full-${i}`} src="./src/assets/icons/star.svg" alt="" className="review-card__star" />);
        }
        if (hasHalfStar) {
            stars.push(<img key="half" src="./src/assets/icons/star-half.svg" alt="" className="review-card__star" />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img key={`empty-${i}`} src="./src/assets/icons/star-blank.svg" alt="" className="review-card__star" />);
        }
        return stars;
    };
    return (
        <div className={`review-card ${className}`}>
            <div className='review-card__content'>
                <img src={avatarSrc} alt={reviewerName} className="review-card__avt" />
                <div className="review-card__info">
                    <h4 className="review-card__title">{reviewerName}</h4>
                    <p className="review-card__desc">{content}</p>
                </div>
            </div>
            <div className="review-card__rating">
                <div className="review-card__stars">
                    {renderStars(rating)}
                </div>
                <span
                    className="review-card__title review-card__title--smaller">
                    ({rating} )<img src="./src/assets/icons/star.svg" alt="" className="review-card__star" />
                </span>
            </div>
        </div>
    )
}
