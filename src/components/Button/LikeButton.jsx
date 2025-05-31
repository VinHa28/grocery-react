import React, { useState } from "react";
import "./Button.scss";
import RedHeartIcon from "assets/icons/red-heart.svg";
import HeartIcon from "assets/icons/heart.svg";

export default function LikeButton(props) {
    const {
        className,
        liked = false,
        likedIcon = RedHeartIcon,
        icon = HeartIcon,
    } = props;
    const [isLiked, setIsLiked] = useState(liked);
    const handleChange = () => {
        setIsLiked(!isLiked);
    };

    return (
        <button className={`like-btn ${className}`} onClick={handleChange}>
            <img
                src={isLiked ? likedIcon : icon}
                className={
                    isLiked ? "like-btn__icon--liked" : "like-btn__icon icon"
                }
            />
        </button>
    );
}
