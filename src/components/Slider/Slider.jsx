import React from "react";
import styles from "./Slider.module.css";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

export default function Slider({images}) {
    const [currentSlide, setCurrentSlide] = React.useState(2);
  const getSlides = () => {
    let slides = [];
    for (let i = currentSlide -1; i < currentSlide + 2; i++) {
      if(i > images.length - 1) slides.push(images[i - images.length]);
      else if(i < 0) slides.push(images[i + images.length]);
      else
      slides.push(images[i]);
    }
    return slides;
  }
  const next = () => {
    if(currentSlide === images.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }
  const previous = () => {
    if(currentSlide === 0) {
      setCurrentSlide(images.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }
    return(
        <div>
        <div className={styles.gliderContainer}>
          {getSlides().map((image, index) => (
            <img
              className={styles.imageSlide}
              key={crypto.randomUUID()}
              src={image}
              alt=""
            />
          ))}
        </div>
        <div className={styles.controls}>
          <button onClick={() => previous()}>
            <img src="./icon-arrow-left.svg" alt="" />
            <VisuallyHidden description="Previous slide"/>
          </button>
          <button onClick={() => next()}>
            <img src="./icon-arrow-right.svg" alt="" />
            <VisuallyHidden description="Next slide"/>
          </button>
        </div>
      </div>
    )


}