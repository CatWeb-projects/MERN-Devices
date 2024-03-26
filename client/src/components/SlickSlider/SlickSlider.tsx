"use client";

import { useEffect } from "react";
import Link from "next/link";
import Slider, { Settings } from 'react-slick';
import { useSlider } from "@/store/store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickSlider.scss';


export const SlickSlider = () => {
  const [slides, getSlides] = useSlider((state) => [state.slides, state.getSlides]);

  useEffect(() => {
    getSlides();
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'anticipated'
  };

  return (
    <div className="slick-wrapper">
      <Slider {...settings}>
      {slides &&
        slides.map((slide) => (
          <Link href={slide.link} key={slide.id}>
            <img
              data-lazy={slide.imgUrl}
              src={slide.imgUrl}
              alt={slide.altName}
            />
          </Link>
        ))}
      </Slider>
    </div>
  )
}