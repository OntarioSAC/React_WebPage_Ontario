import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes para validación
import IframeContent from '../../../components/Modules/IframeContent';
import SliderContent from '../../../components/Modules/SliderContent';
import VideoContent from '../../../components/Modules/VideoContent';
import ButtonGroup from '../../../components/Modules/ButtonGroup';
import styles from './GalleryComponent.module.css';

/**
 * Componente que muestra una galería con diferentes tipos de contenido (iframe, slider, video).
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos necesarios para renderizar la galería.
 */
const GalleryComponent = ({ data }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    handleSliderClick(); // Inicializa el contenido con el slider
  }, []);

  const handleKuulaClick = () => {
    setContent(<IframeContent src={data.kuulaUrl} />); // Carga contenido de Iframe
  };

  const handleSliderClick = () => {
    setContent(<SliderContent sliderData={data.slider} />); // Carga contenido del slider
  };

  const handleVideoClick = () => {
    setContent(<VideoContent src={data.videoUrl} />); // Carga contenido de video
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        {content} {/* Muestra el contenido seleccionado */}
      </div>
      
      <ButtonGroup
        onKuulaClick={handleKuulaClick}
        onSliderClick={handleSliderClick}
        onVideoClick={handleVideoClick}
      />
    </div>
  );
};

// Validación de props
GalleryComponent.propTypes = {
  data: PropTypes.shape({
    kuulaUrl: PropTypes.string.isRequired,
    slider: PropTypes.array.isRequired,
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryComponent;
