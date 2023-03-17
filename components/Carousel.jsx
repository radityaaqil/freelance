import React from "react";
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
      <div className="h-[50vh]">
        <div className="flex justify-center">
          <div className="text-center text-6xl md:text-7xl font-bold mt-16 md:mt-8 font-ubuntu">
            <h3>BUILD</h3>
            <h3>CONNECT</h3>
            <h3>GROW</h3>
          </div>
        </div>
      </div>
      <div className="h-[50vh]">
        <div className="mx-5 my-5 hidden lg:block">
          <div className="flex justify-between">
            <img className="w-[250px]" src="./Shopee.png"/>
            <img className="w-[250px]" src="./OVO.png"/>
            <img className="w-[250px]" src="./Blibli.png"/>
            <img className="w-[250px]" src="./Jenius.png"/>
          </div>
          <div className="flex justify-between items-center">
            <img className="w-[150px]" src="./BNI.png"/>
            <img className="w-[150px] h-[44px]" src="./Halodoc.png"/>
            <img className="w-[150px]" src="./MieSedap.png"/>
            <img className="w-[150px]" src="./Yamaha.png"/>
            <img className="w-[150px]" src="./Sunsilk.png"/>
            <img className="w-[150px]" src="./Mandiri.png"/>
            <img className="w-[150px]" src="./SoSoft.png"/>
          </div>
          <div className="flex justify-between items-center">
            <img className="w-[150px]" src="./Royale.png"/>
            <img className="w-[150px]" src="./SoKlin.png"/>
            <img className="w-[150px]" src="./Chocodrink.png"/>
            <img className="w-[150px]" src="./Floridina.png"/>
            <img className="w-[150px]" src="./Dulcolax.png"/>
            <img className="w-[150px]" src="./Nuvo.png"/>
          </div>
          <div className="flex justify-between items-center">
            <img className="w-[150px]" src="./EsterC.png"/>
            <img className="w-[150px]" src="./Fres.png"/>
            <img className="w-[150px]" src="./Giv.png"/>
            <img className="w-[150px]" src="./Samsung.png"/>
            <img className="w-[150px]" src="./ShopeeExpress.png"/>
            <img className="w-[150px]" src="./ShopeeFood.png"/>
          </div>
        </div>
        <div className="md:hidden">
          <div className="mx-8 my-5 space-y-4">
            <div className="flex justify-between items-center">
              <img className="w-[150px]" src="./Shopee.png"/>
              <img className="w-[150px]" src="./OVO.png"/>
            </div>
            <div className="flex justify-between items-center">
              <img className="w-[150px]" src="./Blibli.png"/>
              <img className="w-[150px]" src="./Jenius.png"/>
            </div>
            <div className="flex justify-between items-center">
              <img className="w-[150px]" src="./BNI.png"/>
              <img className="w-[150px]" src="./Halodoc.png"/>
            </div>
            <div className="flex justify-between items-center">
              <img className="w-[150px]" src="./MieSedap.png"/>
              <img className="w-[150px]" src="./Yamaha.png"/>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="mx-8 my-5 space-y-4">
            <div className="flex justify-between items-center">
              <img className="w-[150px]" src="./Shopee.png"/>
              <img className="w-[150px]" src="./OVO.png"/>
              <img className="w-[150px]" src="./Jenius.png"/>
            </div>
            <div className="flex justify-between items-center">
              <img className="w-[150px]" src="./Blibli.png"/>
              <img className="w-[150px]" src="./Fres.png"/>
              <img className="w-[150px]" src="./ShopeeExpress.png"/>
            </div>
            <div className="flex justify-between items-center">
              <img className="w-[150px]" src="./BNI.png"/>
              <img className="w-[150px]" src="./Halodoc.png"/>
              <img className="w-[150px]" src="./ShopeeFood.png"/>
            </div>
            <div className="flex justify-between items-center">
              <img className="w-[150px]" src="./MieSedap.png"/>
              <img className="w-[150px]" src="./Yamaha.png"/>
              <img className="w-[150px]" src="./Giv.png"/>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
