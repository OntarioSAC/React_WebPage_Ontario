import React from "react";
import PropTypes from 'prop-types';
import styles from "./ApartmentsProgress.module.css";
import GalleryModule from "./Modules/GalleryModule";

/**
 * Componente que muestra el progreso de los apartamentos, incluyendo título, subtítulo y descripción.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos necesarios para renderizar el progreso.
 */
const ApartmentsProgress = ({ data }) => {

  const { title, titleBold, subtitle, description } = data;

  return (
    <>
      <div className="position-relative">
        <div className={`${styles["custom-card-title"]} d-block`}>
          <div className={styles["custom-margin"]}>
            <h1 className={styles.fw600}>
              {title} <span className={styles.fw900}>{titleBold}</span>
            </h1>
            <h2 className={`${styles.fw600} text-white`}>{subtitle}</h2>
          </div>
        </div>
      </div>
      <div className={styles["card-overlap"]}>
        <GalleryModule contentData={data}/>
        <div className={styles["custom-description"]}>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

// Validación de props
ApartmentsProgress.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    titleBold: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ApartmentsProgress;
