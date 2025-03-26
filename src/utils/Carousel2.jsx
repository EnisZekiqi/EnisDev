import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import { RiReactjsFill,RiTailwindCssFill  } from "react-icons/ri";
import { LuFramer } from "react-icons/lu";

const Carousel2 = (props) => {
  const { 
  slides = [
    { icon:<RiReactjsFill className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"/>,
      client: 'React',
      username: 'Proficient with useState,useEffect,useCallback,useRef',
    },
    { icon:<RiTailwindCssFill className="text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]"/>,
      client: 'Tailwind',
      username: 'Rapidly build styles and themes without leaving the code & functions',
    },
    { icon:<LuFramer className="text-purple-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]"/>,
      client: 'FramerMotion',
      username: 'Smooth animations,different transitions and multiple styles',
    },
  ], 
  options = { axis: 'x' } 
} = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
 
    useEffect(() => {
    let autoplay;
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList()); // Capture slide snap points

      autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Autoplay every 3 seconds

      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on('select', onSelect); // Update selected dot on scroll
      emblaApi.on('pointerDown', () => clearInterval(autoplay)); // Stop autoplay when user interacts
      onSelect();
    }

    return () => clearInterval(autoplay); // Clean up autoplay interval on unmount
  }, [emblaApi]);
    
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
   const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
    )
     const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  return (
    <section className="embla2">
  <div className="embla__viewport2" ref={emblaRef}>
    <div className="embla__container2">
      {slides.map((slide, index) => (
        <div className="embla__slide2" key={index}>
          <div className="embla__black-background2">
            <div className="embla__icon2">{slide.icon}</div>
            <p className="client-text">{slide.client}</p>
          </div>
          <div className="embla__text2 text-start w-full">
            <p className="username-text2 text-start px-0 lg:px-2 w-full">{slide.username}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
          <div className="embla__dots mt-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
</section>

  );
};

export default Carousel2;


 const DotButton = ({ onClick, className }) => (
  <button className={className} type="button" onClick={onClick} />
);

 const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick: (index) => emblaApi && emblaApi.scrollTo(index),
  };
};
