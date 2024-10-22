import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Importar PropTypes
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import styles from "./SocialSlider.module.css";

/**
 * Componente para el slider de imágenes en la sección de responsabilidad social.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos necesarios para renderizar el componente.
 * @param {string[]} props.data.images - Array de URLs de imágenes para el slider.
 * @returns {JSX.Element} El componente SocialSlider.
 */
function SocialSlider({ data }) {
  const [images] = useState(data.images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Extiende el array de imágenes un número específico de veces.
   * @param {string[]} images - Array de URLs de imágenes.
   * @param {number} times - Número de veces que se debe extender el array.
   * @returns {string[]} Array extendido de imágenes.
   */
  const extendImages = (images, times) => {
    let extendedImages = [];
    for (let i = 0; i < times; i++) {
      extendedImages = [...extendedImages, ...images];
    }
    return extendedImages;
  };

  const extendedImages = extendImages(images, 3);

  const changeBackground = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
      swiperRef.current.swiper.slideTo(newIndex);
    }
  };

  const handleCardClick = () => {
    changeBackground();
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setCurrentIndex(swiperRef.current.swiper.realIndex);
    }
  };

  if (isMobile) {
    return (
      <Swiper 
        spaceBetween={30} 
        slidesPerView={1} 
        loop={true} 
        style={{ padding: "0 10px" }} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {extendedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              loading="lazy"
              alt={`Slide ${index + 1}`}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={`${styles.container} g-0`} onClick={changeBackground}>
      <div
        className={styles["background-wrapper"]}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className={styles["background-image"]}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className={styles.carouselContainer}>
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={2.5}
          centeredSlides={false}
          loop={false}
          onSlideChangeTransitionEnd={handleSlideChange}
          modules={[]} // Sin Navigation ni Pagination
          style={{ width: "100%", marginRight: 0 }}
        >
          {extendedImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className={styles.card}
              onClick={handleCardClick}
            >
              <img
                src={image}
                loading="lazy"
                alt={`Card ${index + 1}`}
                className={styles.cardImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// Validación de PropTypes
SocialSlider.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // Validar que data.images es un array de strings
  }).isRequired, // data es obligatorio
};

export default SocialSlider;
