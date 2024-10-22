import React, { useState } from "react";
import PropTypes from 'prop-types'; // Importar PropTypes para validación
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/navigation';
import styles from "./ProjectsProgress.module.css";

import { Navigation } from 'swiper/modules';

/**
 * Componente para mostrar el progreso de los proyectos.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos necesarios para renderizar el componente.
 * @returns {JSX.Element} El componente ProjectsProgress.
 */
const ProjectsProgress = ({ data }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { title, titleBold, subtitle, description, images } = data;

  // Maneja el mouse sobre la tarjeta
  const handleMouseOver = (rowId, index) => {
    setHoveredCard({ rowId, index });
  };

  // Maneja el mouse fuera de la tarjeta
  const handleMouseOut = () => {
    setHoveredCard(null);
  };

  // Renderiza una tarjeta
  const renderCard = (rowId, index) => (
    <div
      className={`${styles["custom-card"]} position-relative`}
      style={{
        width:
          hoveredCard &&
          hoveredCard.rowId === rowId &&
          hoveredCard.index !== index
            ? "150px"
            : hoveredCard &&
              hoveredCard.rowId === rowId &&
              hoveredCard.index === index
            ? "450px"
            : "300px",
      }}
      onMouseOver={() => handleMouseOver(rowId, index)}
      onMouseOut={handleMouseOut}
    >
      <img
        className={styles["background-image"]}
        src={images[index]}
        loading="lazy"
        alt={`Background Image ${index + 1}`}
      />
    </div>
  );

  return (
    <>
      <div className="position-relative">
        <div className={`${styles["custom-card-title"]} d-block`}>
          <div className={styles["custom-margin"]}>
            <h1 className={styles.fw600}>
              {title} <span className={styles.fw900}>{titleBold}</span>
            </h1>
            <h2 className={styles.fw600}>{subtitle}</h2>
          </div>
        </div>
      </div>

      {}
      <div className={`${styles["card-overlap"]} d-none d-md-block`}>
        <div className={styles["card-over-card"]} id="row-1">
          {renderCard("row-1", 0)}
          {renderCard("row-1", 1)}
        </div>

        <div className={`${styles["card-over-card"]} pt-3`} id="row-2">
          {renderCard("row-2", 2)}
          {renderCard("row-2", 3)}
        </div>
        <div className={styles["custom-description"]}>
          <p className={styles["description"]}>{description}</p>
        </div>
      </div>

      {}
      <div className={`d-md-none ${styles["card-overlap2"]}`}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onInit={(swiper) => {
            const nextButton = swiper.el.querySelector(".swiper-button-next");
            const prevButton = swiper.el.querySelector(".swiper-button-prev");
            nextButton.classList.add(styles.customButtonNext);
            prevButton.classList.add(styles.customButtonPrev);
          }}
          loop={true}
           autoplay={{
             delay: 1500,
             disableOnInteraction: false,
           }}
          modules={[ Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles["custom-slide"]}>
                <img
                  src={image}
                  loading="lazy"
                  className={styles["custom-image"]}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles["custom-description"]}>
          <p className={styles["description"]}>{description}</p>
        </div>
      </div>
    </>
  );
};

// Validación de props
ProjectsProgress.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectsProgress;
