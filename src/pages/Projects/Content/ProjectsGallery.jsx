import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import { useTranslation } from "react-i18next";
import styles from "./ProjectsGallery.module.css";
import GalleryComponent from "../../../components/Modules/GalleryComponent";

/**
 * Componente para mostrar una galería de proyectos.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos necesarios para renderizar el componente.
 * @param {Function} props.onButtonClick - Función que se ejecuta al hacer clic en el botón.
 * @returns {JSX.Element} El componente ProjectsGallery.
 */
const ProjectsGallery = ({ data, onButtonClick }) => {
  const { t, i18n } = useTranslation();
  const [galleryData, setGalleryData] = useState({});

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

  return (
    <>
      <div className="position-relative">
        
        <div className={`${styles["custom-card-title"]} d-block`}>
          <div className={styles["custom-margin"]}>
            <h1 className={styles["fw-600"]}>{galleryData.title}</h1>
            <h2 className={styles["fw-900"]}>{galleryData.subtitle}</h2>
            <p className={styles["fw-p"]}>{galleryData.note}</p>
          </div>
        </div>

      </div>
      <div className={styles["card-overlap"]}>
        <GalleryComponent contentData={galleryData} />
        <div className={styles["custom-description"]}>
          <h3>{galleryData.cta?.headline}</h3>
          <span>{galleryData.cta?.description}</span>
          <a className={styles["visit-button"]} onClick={onButtonClick}>
            {galleryData.cta?.buttonText}
            <img
              className={styles["card-icon-1"]}
              loading="lazy"
              alt="Arrow Icon"
              src={galleryData.cta?.buttonIcon}
            />
          </a>
        </div>
      </div>
    </>
  );
};

// Validación de props
ProjectsGallery.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cta: PropTypes.shape({
      headline: PropTypes.string,
      description: PropTypes.string,
      buttonText: PropTypes.string,
      buttonIcon: PropTypes.string,
    }),
  }),
  onButtonClick: PropTypes.func.isRequired, // Función requerida
};

export default ProjectsGallery;
