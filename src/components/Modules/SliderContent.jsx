import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from './SliderContent.module.css';

/**
 * Componente SliderContent usando Swiper para mostrar un carrusel de imágenes.
 * @param {Object[]} sliderData - Array de objetos con datos para cada slide.
 * @param {string} id - ID único para el carrusel.
 */
const SliderContent = ({ sliderData, id }) => (
  <Swiper
    id={id}
    modules={[Navigation]}
    navigation={true}
    className={styles.slider}
    onInit={(swiper) => {
      const nextButton = swiper.el.querySelector(".swiper-button-next");
      const prevButton = swiper.el.querySelector(".swiper-button-prev");
      nextButton.classList.add(styles.customButtonNext);
      prevButton.classList.add(styles.customButtonPrev);
    }}
  >
    {sliderData.map((item, index) => (
      <SwiperSlide key={item.id || index}>
        {item.type === 'image' && (
          <div>
            <img
              src={item.src}
              alt={item.alt || `Slide ${index + 1}`}
              className={styles.cover}
            />
          </div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>
);

// Definición de PropTypes para validación de props
SliderContent.propTypes = {
  sliderData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default SliderContent;
