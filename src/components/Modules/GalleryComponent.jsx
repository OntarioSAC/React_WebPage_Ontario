import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./GalleryComponent.module.css";

const GalleryComponent = ({ contentData }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Cargar el slider por defecto cuando se actualiza contentData
    if (contentData) {
      handleSliderClick();
    }
  }, [contentData]); // Escuchar cambios en contentData

  // Manejar clic en el enlace de Kuula
  const handleKuulaClick = () => {
    setContent(
      <iframe
        src={contentData.kuulaUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className={styles.iframe}
      ></iframe>
    );
  };

  // Manejar clic en el slider
  const handleSliderClick = () => {
    if (contentData.slider && contentData.slider.length > 0) {
      setContent(
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className={styles.swiperContainer}
          onInit={(swiper) => {
            const nextButton = swiper.el.querySelector(".swiper-button-next");
            const prevButton = swiper.el.querySelector(".swiper-button-prev");
            nextButton.classList.add(styles.customButtonNext);
            prevButton.classList.add(styles.customButtonPrev);
          }}
        >
          {contentData.slider.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === "image" && (
                <img
                  src={item.src}
                  loading="lazy"
                  className={styles.cover}
                  alt={`Slide ${index + 1}`}
                  style={{ borderRadius: "1.25rem" }}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  };

  // Manejar clic en el video
  const handleVideoClick = () => {
    setContent(
      <video className={styles.iframe} controls>
        <source src={contentData.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>{content}</div>
      <div className={styles.buttonGroup}>
        <button onClick={handleKuulaClick} className={styles.tourButton}>
          <span className="icon ico-ico34"></span> Recorrido 360
        </button>
        <button onClick={handleSliderClick} className={styles.galleryButton}>
          <span className="icon ico-ico34"></span> Galeria
        </button>
        <button onClick={handleVideoClick} className={styles.videoButton}>
          <span className="icon ico-ico32"></span> Video
        </button>
      </div>
    </div>
  );
};

// Validación de props
GalleryComponent.propTypes = {
  contentData: PropTypes.shape({
    kuulaUrl: PropTypes.string,
    slider: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        src: PropTypes.string,
      })
    ),
    videoUrl: PropTypes.string,
  }).isRequired, // contentData es requerido
};

export default GalleryComponent;