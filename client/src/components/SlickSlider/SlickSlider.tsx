"use client";

import { useEffect } from "react";
import { useSlider } from "@/store/store";

export const SlickSlider = () => {
  const [slides, getSlides] = useSlider((state: any) => [state.slides, state.getSlides]);

  useEffect(() => {
    getSlides();
  }, [])

  console.log(slides.data, 'slides')
  return (
    <div>
      
    </div>
  )
}