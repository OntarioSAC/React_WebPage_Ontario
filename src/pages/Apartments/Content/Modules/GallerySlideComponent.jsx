import React, { useState } from "react";
import PropTypes from 'prop-types';
import SliderContent from "../../../../components/Modules/SliderContent";
import styles from "./GallerySlideComponent.module.css";

/**
 * Componente que renderiza una galería de imágenes con un slider.
 */
const GallerySlideComponent = ({ data }) => {
  const { slider1 } = data;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        <SliderContent
          key="slider1"
          sliderData={slider1}
          id="imageSlider1"
          activeIndex={activeIndex}
          onSlideChange={handleSlideChange}
        />
      </div>
    </div>
  );
};

GallerySlideComponent.propTypes = {
  data: PropTypes.shape({
    slider1: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default GallerySlideComponent;
