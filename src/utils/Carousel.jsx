import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = (props) => {
  const { slides = [{
    client: 'Don Donaldson',
    username: '@donnydiesel',
    comment: "HollowPurple revolutionized my workflow! Highly recommend to anyone!",
    company: <p style={{ color: '#0099ff' }}>Twitter</p>,
    rated: <div>⭐⭐⭐⭐⭐</div>,
  },
  {
    client: 'Chandler Smith',
    username: '@chandlerSm',
    comment: "HollowPurple stands out as the best! It’s like having a secret weapon.",
    company: <p style={{ color: '#0099ff' }}>Twitter</p>,
    rated: <div>⭐⭐⭐⭐⭐</div>,
  },
  {
    client: 'Joe Jonathan',
    username: '@Joej2',
    comment: "HollowPurple has changed the game for me! Genuinely impressed!",
    company: <p style={{ color: '#0099ff' }}>Twitter</p>,
    rated: <div>⭐⭐⭐⭐⭐</div>,
  },], options = { axis: 'x' } } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide flex flex-col px-3 py-3 rounded-md cursor-grab" key={index}>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm sm:text-md font-semibold" style={{ color: '#fbfbfb' }}>{slide.client}</p>
                  <p className="text-xs sm:text-sm font-light" style={{ color: '#9f9fac' }}>{slide.username}</p>
                </div>
                {slide.company}
              </div>
              <p className="text-xs md:text-sm font-light md:font-normal pt-4" style={{ color: '#d6d6dc' }}>
                {slide.comment}
              </p>
              <div className="mt-4">{slide.rated}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* Dots Navigation */}
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;



 const PrevButton = ({ onClick, disabled }) => (
  <button className="embla__button embla__button--prev" onClick={onClick} disabled={disabled}>
    Prev
  </button>
);

export const NextButton = ({ onClick, disabled }) => (
  <button className="embla__button embla__button--next" onClick={onClick} disabled={disabled}>
    Next
  </button>
);

 const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  React.useEffect(() => {
    if (!emblaApi) return;
    const updateButtons = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);
    updateButtons();
  }, [emblaApi]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick: () => emblaApi && emblaApi.scrollPrev(),
    onNextButtonClick: () => emblaApi && emblaApi.scrollNext(),
  };
};

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
