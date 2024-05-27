import React, { useState, useEffect } from 'react';
import image1 from '../../assets/homeImage1.avif'
import image2 from '../../assets/homeImage2.jpg'
import image3 from '../../assets/homeImage3.jpg'

const slides = [
    {
        id: 1,
        image: image1,
        text: 'First Slide Text'
    },
    {
        id: 2,
        image: image2,
        text: 'Second Slide Text'
    },
    {
        id: 3,
        image: image3,
        text: 'Third Slide Text'
    }
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50  ">
                            <h2 className="text-white text-xl md:text-4xl">{slide.text}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Carousel;
