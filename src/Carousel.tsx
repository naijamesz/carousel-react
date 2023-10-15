import { useState } from 'react';

export type CarouselProps = {
  images: {
    src: string;
    alt: string;
    url: string;
    caption: string;
  }[];
};

export const Carousel = ({ images }: CarouselProps) => {
  const even: boolean = images.length % 2 === 0;

  const [activeIndex, setActiveIndex] = useState<number>(Math.floor(images.length / 2));
  const [transform, setTransform] = useState<number>(even ? -250 : 0);

  const slide = (direction: string) => {
    if (direction === 'left' && activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
      setTransform(transform + 520);
    }

    if (direction === 'right' && activeIndex !== images.length - 1) {
      setActiveIndex(activeIndex + 1);
      setTransform(transform - 520);
    }
  };

  const slideByImage = (event: React.SyntheticEvent, index: number) => {
    if (index !== activeIndex) {
      event.preventDefault();
      slide(index < activeIndex ? 'left' : 'right');
    }
  };

  return (
    <div className='carousel'>
      <ul className={even ? 'even' : undefined} style={{ transform: `translateX(${transform}px)` }}>
        {images.map((image, index: number) => (
          <li
            key={index}
            className={index === activeIndex ? 'active' : undefined}
            onClick={(event: React.SyntheticEvent) => slideByImage(event, index)}>
            <a href={image.url}>
              <img src={image.src} alt={image.alt} />
              <div className='meta'>
                <span className='cta'>Learn More</span>
                <span className='caption'>{image.caption}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className='arrows'>
        <span className={activeIndex == 0 ? 'left disabled' : 'left'} onClick={() => slide('left')} />
        <span
          className={activeIndex == images.length - 1 ? 'right disabled' : 'right'}
          onClick={() => slide('right')}
        />
      </div>
    </div>
  );
};
