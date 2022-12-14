import React, { Component } from "react";
import Slider from "react-slick";
import NextArrowCarousel from "./NextArrowCarousel";
import PrevArrowCarousel from "./PrevArrowCarousel";
import { GoPrimitiveDot } from "react-icons/go";
import { useState } from "react";

const Carousel = () => {
  //Active Dots
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowCarousel />,
    prevArrow: <PrevArrowCarousel />,
    appendDots: (dots) => (
      <div>
        <div> {dots} </div>
      </div>
    ),
    beforeChange(oldIndex, newIndex) {
      setActiveSlideIndex(newIndex);
    },
    customPaging: (slideIndex) => (
      <div
        key={slideIndex}
        active={slideIndex === activeSlideIndex}
        className={
          slideIndex === activeSlideIndex
            ? "text-3xl text text-black"
            : "text-3xl text text-black/50"
        }
      >
        <GoPrimitiveDot />
      </div>
    ),
  };
  return (
    <Slider {...settings} className="pb-10">
      <div className="h-[50vh] bg-red-400">
        <div className="flex justify-center">
          <div className="text-center text-6xl md:text-7xl font-bold mt-16 md:mt-8 font-ubuntu">
            <h3>BUILD</h3>
            <h3>CONNECT</h3>
            <h3>GROW</h3>
          </div>
        </div>
      </div>
      <div className="h-[50vh] bg-green-400">
        <h3>CONTENT 2</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
