'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider, { Settings } from '@ant-design/react-slick';
import { useLocale } from 'next-intl';
import { useSlider } from '@/store/store';
import { Loading } from '../Loading/Loading';
import { ShowErrorMessage } from '../ShowErrorMessage/ShowErrorMessage';
import { NoData } from '../NoData/NoData';
import { apiBaseUrl } from '@/helpers/baseUrl';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';

export const SlickSlider = () => {
  const locale = useLocale();
  const [slides, getSlides, loading, error] = useSlider((state) => [
    state.slides,
    state.getSlides,
    state.loading,
    state.error
  ]);

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
    lazyLoad: 'ondemand'
  };

  return (
    <div className="slick-wrapper">
      {slides?.length > 0 && (
        <Slider {...settings}>
          {slides.map((slide) => (
            <Link href={`/${locale}/${slide.link}`} key={slide.id}>
              <Image
                priority
                src={`${apiBaseUrl}/${slide.imgUrl}`}
                alt={slide.altName}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Link>
          ))}
        </Slider>
      )}

      {slides?.length === 0 && !loading && <NoData />}

      {loading && <Loading />}

      {error && <ShowErrorMessage errorMessage={error} />}
    </div>
  );
};
