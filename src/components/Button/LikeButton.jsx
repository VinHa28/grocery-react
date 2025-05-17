import React, { useState } from 'react'
import './Button.scss'

export default function LikeButton({
    liked=false,
    className='',
    likedIcon='./src/assets/icons/red-heart.svg',
    icon='./src/assets/icons/heart.svg',
}) {
    const [isLiked, setIsLiked] = useState(liked);
    const handleChange = () => {
        //Logic to change
        setIsLiked(!isLiked);
    }
    return (
        <button className={`like-btn ${className}`} onClick={handleChange}>
            <img src={isLiked ? likedIcon : icon} className={isLiked ? 'like-btn__icon--liked' : 'like-btn__icon icon'}/>
        </button>
    )
}
