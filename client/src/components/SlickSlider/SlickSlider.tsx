"use client";

import { useEffect } from "react";
import Link from "next/link";
import Slider from 'react-slick';
import { useSlider } from "@/store/store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickSlider.scss';


export const SlickSlider = () => {
  const [slides, getSlides] = useSlider((state: any) => [state.slides, state.getSlides]);

  useEffect(() => {
    getSlides();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  console.log(slides.data, 'slides')
  return (
    <div className="slick-wrapper">
      <Slider {...settings}>
      {slides.data &&
        slides.data.map((slide: any) => (
          <Link href={slide.link} key={slide.id}>
            <img
              data-lazy={slide.imgUrl}
              src={slide.imgUrl}
              alt={slide.altName}
              // src="/images/loader.gif"
            />
          </Link>
        ))}
      </Slider>
    </div>
  )
}