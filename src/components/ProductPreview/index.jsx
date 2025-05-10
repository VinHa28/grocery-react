import React, { useState } from 'react';
import './ProductPreview.scss';

export default function ProductPreview({ imageList }) {
    const [selectedImage, setSelectedImage] = useState(imageList[0] || '');
    const [isFading, setIsFading] = useState(false);

    const handleImageChange = (image) => {
        setIsFading(true);
        setTimeout(() => {
            setSelectedImage(image);
            setIsFading(false);
        }, 200); // Fading time = transition time
    };

    return (
        <div className="product-preview">
            <div className="product-preview__list">
                <div className="product-preview__item">
                    <img
                        src={selectedImage}
                        alt="Product"
                        className={isFading ? 'fade' : 'show'}
                    />
                </div>
            </div>
            <div className="product-preview__thumbs d-md-none">
                {imageList.map((image, index) => (
                    <img
                        onClick={() => handleImageChange(image)}
                        key={index}
                        className={`product-preview__thumb-img ${image === selectedImage ? 'product-preview__thumb-img--current' : ''}`}
                        src={image}
                        alt="Product"
                    />
                ))}
            </div>
        </div>
    );
}
