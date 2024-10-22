import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import styles from './GalleryModule.module.css';

const GalleryModule = ({ contentData }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Cargar contenido según el tipo de dato proporcionado
    if (contentData) {
      if (contentData.kuulaUrl) {
        handleKuulaClick(); // Mostrar recorrido 360
      } else if (contentData.videoUrl) {
        handleVideoClick(); // Mostrar video con imagen de portada
      }
    }
  }, [contentData]);

  // Función para cargar el iframe de kuula
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

  // Función para cargar el video con una imagen de portada
  const handleVideoClick = () => {
    setContent(
      <video className={styles.iframe} controls poster={contentData.posterUrl}>
        <source src={contentData.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        {content}
      </div>
    </div>
  );
};

// Validación de props
GalleryModule.propTypes = {
  contentData: PropTypes.shape({
    kuulaUrl: PropTypes.string,
    videoUrl: PropTypes.string,
    posterUrl: PropTypes.string,
  }).isRequired,
};

export default GalleryModule;
