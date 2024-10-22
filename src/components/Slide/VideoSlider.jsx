import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';

import styles from './VideoSlider.module.css';

// Componente VideoSlider: Muestra un carrusel de imágenes y videos
const VideoSlider = ({ data }) => {
  return (
    <Swiper
      spaceBetween={0} 
      slidesPerView={1} 
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={styles['video-slider']} 
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index} className={styles['custom-slider-item']}>
          {slide.type === 'image' ? (
            <img
              src={slide.src}
              loading="lazy"
              className={styles['image-slider']}
              alt={`Slide ${index + 1}`}
            />
          ) : (
            <video
              className={styles['video-slider']}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={slide.src} type="video/mp4" />
              Tu navegador no soporta el tag de video.
            </video>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Validación de props
VideoSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VideoSlider;
