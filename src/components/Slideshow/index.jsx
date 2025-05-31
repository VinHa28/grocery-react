import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { slideShows } from "data";

const AUTOPLAY_DELAY = 3000;

export default function Slideshow() {
    /** Component States */
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const autoplayRef = useRef(null);

    /** Event Handlers  */
    const resetAutoplayTimer = useCallback(() => {
        if (isAutoplay) {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }

            autoplayRef.current = setInterval(() => {
                handleNext();
            }, AUTOPLAY_DELAY);
        }
    }, [isAutoplay]);

    const goToSlide = useCallback(
        (index) => {
            setCurrentSlide(index);
            resetAutoplayTimer();
        },
        [resetAutoplayTimer]
    );

    const handleNext = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slideShows.length);
        resetAutoplayTimer();
    }, [resetAutoplayTimer]);

    const handlePrev = useCallback(() => {
        setCurrentSlide(
            (prev) => (prev - 1 + slideShows.length) % slideShows.length
        );
        resetAutoplayTimer();
    }, [resetAutoplayTimer]);

    const toggleAutoplay = useCallback(() => {
        setIsAutoplay((prev) => {
            const newState = !prev;
            if (newState) {
                setTimeout(() => {
                    resetAutoplayTimer();
                }, 0);
            }
            return newState;
        });
    }, [resetAutoplayTimer]);

    /** Side Effect */
    useEffect(() => {
        if (isAutoplay) {
            resetAutoplayTimer();
        } else if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }

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
                    transition: "transform 0.5s ease",
                }}
            >
                {slideShows.map((item) => (
                    <div className="slideshow__item" key={item.id}>
                        <a href="#!" className="slideshow__link">
                            <picture>
                                <source
                                    media="(max-width: 767.98px)"
                                    srcSet={item.slideshowImgMd}
                                />
                                <img
                                    className="slideshow__img"
                                    src={item.slideshowImg}
                                    alt={`Slideshow image ${item.id}`}
                                />
                            </picture>
                        </a>
                    </div>
                ))}
            </div>

            <div className="slideshow__nav">
                <button
                    className="slideshow__arrow slideshow__arrow--prev"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                    className={`slideshow__autoplay slideshow__arrow ${
                        isAutoplay ? "playing" : "paused"
                    }`}
                    onClick={toggleAutoplay}
                    aria-label={
                        isAutoplay ? "Pause slideshow" : "Play slideshow"
                    }
                >
                    <FontAwesomeIcon icon={isAutoplay ? faPause : faPlay} />
                </button>
                <button
                    className="slideshow__arrow slideshow__arrow--next"
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            <div className="slideshow__pagination">
                {slideShows.map((_, index) => (
                    <span
                        key={index}
                        className={`slideshow__dot ${
                            currentSlide === index ? "active" : ""
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
