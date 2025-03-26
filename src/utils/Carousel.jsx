import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect,useState,useCallback } from 'react';
const Carousel = (props) => {
  const { 
  slides = [
    {
      client: '10+',
      username: 'Projects and counting',
    },
    {
      client: '97k',
      username: 'Lines of Code Written',
    },
    {
      client: '5+',
      username: 'Years of Experience',
    },
    {
      client: '500+',
      username: 'GitHub Contributions',
    },
    {
      client: '100%',
      username: 'Client Satisfaction Rate',
    },
  ], 
  options = { axis: 'x' } 
} = props;


  
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, draggable: true, // Ensure drag is enabled explicitly
  axis: 'x', });
 
    useEffect(() => {
    let autoplay;
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList()); // Capture slide snap points

      autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Autoplay every 3 seconds

      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on('select', onSelect); // Update selected dot on scroll
emblaApi.on('pointerDown', () => {
  clearInterval(autoplay);
  emblaApi.stop(); // Stop scrolling manually when the user touches the carousel
});
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
    <section className="embla ">
     <div className="embla__viewport bg-[#000]" ref={emblaRef}>
  <div className="embla__container ">
    {slides.map((slide, index) => (
      <div className="embla__slide " key={index}>
        <div className="embla__slide__number flex flex-col items-center ">
          <p className="text-xl sm:text-2xl lg:text-5xl font-bold text-white  transition-colors duration-300" >
            {slide.client}
          </p>
          <p className="text-sm sm:text-md font-light md:font-medium dark:text-[#9f9fac] text-[#66666e]">
            {slide.username}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Navigation Buttons */}
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

export default Carousel;


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
