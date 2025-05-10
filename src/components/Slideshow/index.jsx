import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const dataSrc = [
  {
    id: 1,
    slideshowImg: './src/assets/img/slideshow/item-1.png',
    slideshowImgMd: './src/assets/img/slideshow/item-1-md.png',
  },
  {
    id: 2,
    slideshowImg: './src/assets/img/slideshow/item-2.png',
    slideshowImgMd: './src/assets/img/slideshow/item-2-md.png',
  },
  {
    id: 3,
    slideshowImg: './src/assets/img/slideshow/item-3.png',
    slideshowImgMd: './src/assets/img/slideshow/item-3-md.png',
  },
  {
    id: 4,
    slideshowImg: './src/assets/img/slideshow/item-4.png',
    slideshowImgMd: './src/assets/img/slideshow/item-4-md.png',
  },
  {
    id: 5,
    slideshowImg: './src/assets/img/slideshow/item-2.png',
    slideshowImgMd: './src/assets/img/slideshow/item-2-md.png',
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  const AUTOPLAY_DELAY = 3000; // 5 giây
  
  // Hàm để khởi động lại autoplay timer
  const resetAutoplayTimer = useCallback(() => {
    if (isAutoplay) {
      // Xóa interval hiện tại nếu có
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
      
      // Tạo interval mới
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, AUTOPLAY_DELAY);
    }
  }, [isAutoplay]);
  
  // Xử lý chuyển slide
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    resetAutoplayTimer();
  }, [resetAutoplayTimer]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % dataSrc.length);
    resetAutoplayTimer();
  }, [resetAutoplayTimer]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + dataSrc.length) % dataSrc.length);
    resetAutoplayTimer();
  }, [resetAutoplayTimer]);

  // Xử lý autoplay
  const toggleAutoplay = useCallback(() => {
    setIsAutoplay((prev) => {
      const newState = !prev;
      if (newState) {
        // Nếu bật autoplay, khởi động timer ngay lập tức
        setTimeout(() => {
          resetAutoplayTimer();
        }, 0);
      }
      return newState;
    });
  }, [resetAutoplayTimer]);

  // Cài đặt và xóa interval cho autoplay
  useEffect(() => {
    if (isAutoplay) {
      // Khởi tạo timer ban đầu
      resetAutoplayTimer();
    } else if (autoplayRef.current) {
      // Xóa timer khi tắt autoplay
      clearInterval(autoplayRef.current);
    }
    
    // Cleanup function khi component unmount
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, resetAutoplayTimer]);

  return (
    <div className="slideshow">
      <div
        className="slideshow__inner"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {dataSrc.map((item) => (
          <div className="slideshow__item" key={item.id}>
            <a href="#!" className="slideshow__link">
              <picture>
                <source media="(max-width: 767.98px)" srcSet={item.slideshowImgMd} />
                <img className="slideshow__img" src={item.slideshowImg} alt={`Slideshow image ${item.id}`} />
              </picture>
            </a>
          </div>
        ))}
      </div>

      <div className="slideshow__nav">
        <button className="slideshow__arrow slideshow__arrow--prev" onClick={handlePrev} aria-label="Previous slide">
        <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button 
          className={`slideshow__autoplay slideshow__arrow ${isAutoplay ? 'playing' : 'paused'}`} 
          onClick={toggleAutoplay}
          aria-label={isAutoplay ? 'Pause slideshow' : 'Play slideshow'}
        >
          <FontAwesomeIcon icon={isAutoplay ? faPause : faPlay } />
          
        </button>
        <button className="slideshow__arrow slideshow__arrow--next" onClick={handleNext} aria-label="Next slide">
        <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      
      <div className="slideshow__pagination">
        {dataSrc.map((_, index) => (
          <span
            key={index}
            className={`slideshow__dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}