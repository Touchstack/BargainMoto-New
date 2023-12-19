import PropTypes from 'prop-types';
import { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <button onClick={prevSlide} className="left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl focus:outline-none">
        &#9664;
      </button>
      <button onClick={nextSlide} className="right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl focus:outline-none">
        &#9654;
      </button>
      <div className="w-full overflow-hidden">
        <div className="flex transition-transform ease-in-out duration-300" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="w-full flex">
              <img src={img} alt={`slide-${index}`} className="max-w-sm" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  

export default ImageCarousel;
