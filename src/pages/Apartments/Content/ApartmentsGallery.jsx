import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import styles from "./ApartmentsGallery.module.css";
import GallerySlideComponent from "./Modules/GallerySlideComponent";

/**
 * Componente que muestra la galería de apartamentos con título, subtítulo y un componente de diapositivas.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos necesarios para renderizar la galería.
 * @param {Function} props.onButtonClick - Función que se ejecuta al hacer clic en el botón de llamada a la acción.
 */
const ApartmentsGallery = ({ data, onButtonClick }) => {
  const { t, i18n } = useTranslation();
  const [galleryData, setGalleryData] = useState({});

  // Efecto para actualizar los datos de la galería cuando cambia el idioma o los datos
  useEffect(() => {
    if (data) {
      setGalleryData({
        ...data,
        title: t(data.title),
        subtitle: t(data.subtitle),
        cta: {
          ...data.cta,
          headline: t(data.cta?.headline),
          description: t(data.cta?.description),
          buttonText: t(data.cta?.buttonText),
        },
      });
    }
  }, [data, i18n.language, t]);

  if (!galleryData || !galleryData.gallerySlide) {
    return null;
  }

  return (
    <>
        <div className="position-relative">
          <div className={`${styles["custom-card-title"]} d-block`}>
            <div className={styles["custom-margin"]}>
              <h1 className={`${styles.fw600} text-white`}>
                {galleryData.title}
              </h1>
              <h2 className={styles.fw900}>{galleryData.subtitle}</h2>
            </div>
          </div>
        </div>
        <div className={styles["card-overlap"]}>
          <GallerySlideComponent data={galleryData.gallerySlide} />
          <div className={styles["custom-description"]}>
            <h3>{galleryData.cta?.headline}</h3>
            <span>{galleryData.cta?.description}</span>
            <a className={styles["visit-button"]} onClick={onButtonClick}>
              {galleryData.cta?.buttonText}
              <img className={styles["card-icon-1"]} loading="lazy" alt="Arrow Icon" src={galleryData.cta?.buttonIcon} />
            </a>
          </div>
        </div>
    </>
  );
};

// Validación de props
ApartmentsGallery.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    gallerySlide: PropTypes.oneOfType([
      PropTypes.array,   // Si puede ser un array o un objeto
      PropTypes.object
    ]),
    cta: PropTypes.shape({
      headline: PropTypes.string,
      description: PropTypes.string,
      buttonText: PropTypes.string,
      buttonIcon: PropTypes.string,
    }),
  }),
  onButtonClick: PropTypes.func.isRequired,
};


export default ApartmentsGallery;
