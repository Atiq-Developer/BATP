"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
  ];

const ImageCarousel: React.FC = () => {
  return (
    <div className="max-w-5xl py-10 mx-auto relative">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        centerMode
        showIndicators={false}
        centerSlidePercentage={33.33}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={clickHandler}
              className="absolute left-2 top-1/2 transform -translate-y-1/2  text-black p-3 h-5 w-5 rounded-full z-10"
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={clickHandler}
              className="absolute right-2 top-1/2 transform -translate-y-1/2  text-black p-3 h-5 w-5 rounded-full z-10"
            >
              ❯
            </button>
          )
        }
      >
        {images.map((img, index) => (
          <div key={index} className="p-2 px-9">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
