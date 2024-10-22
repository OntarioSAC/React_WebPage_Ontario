import React from "react";
import PropTypes from "prop-types"; // Importamos PropTypes para la validación
import styles from "./PromoBanner.module.css"; // Importamos el CSS Module

/**
 * Componente que muestra un banner promocional con título, subtítulo, imagen y botón de llamada a la acción.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos necesarios para renderizar el banner.
 * @param {Function} props.onButtonClick - Función que se ejecuta al hacer clic en el botón.
 */
const PromoBanner = ({ data, onButtonClick }) => {
  const { title, titleBold, subtitle, designation, ctaText, ctaHighlight, imageSrc, imageAlt } = data;

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>
          {title} <span>{titleBold}</span>
        </h1>
        <p className={styles.subtitle}>
          {subtitle} <span>{designation}</span>
        </p>
        <button className={styles.ctaButton} onClick={onButtonClick}>
          {ctaText} <span>{ctaHighlight}</span>
        </button>
      </div>
      <div className={styles.imageSection}>
        <img
          src={imageSrc} 
          alt={imageAlt}
          className={styles.buildingImage}
          loading="lazy"
        />
      </div>
    </div>
  );
};

// Validación de props
PromoBanner.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    designation: PropTypes.string,
    ctaText: PropTypes.string.isRequired,
    ctaHighlight: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default PromoBanner;
