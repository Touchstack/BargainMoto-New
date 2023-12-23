import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          vertical: true,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='lg:w-[1000px] md:w-[600px] w-[300px]'>
      <Slider {...settings}>
      {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`slide-${index}`}
              className='md:w-8/12 md:ml-32'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageCarousel;
