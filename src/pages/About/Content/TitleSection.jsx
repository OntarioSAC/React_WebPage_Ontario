import React from "react";
import PropTypes from 'prop-types';
import styles from "./TitleSection.module.css";

/**
 * Componente TitleSection: Renderiza el título principal y subtítulo.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos para el título y subtítulo.
 * @param {string} props.data.mainTitle - Título principal.
 * @param {string} props.data.highlight - Texto destacado en el título.
 * @param {string} props.data.subtitle - Subtítulo.
 * @returns {JSX.Element} Elemento JSX que representa la sección de título.
 */
const TitleSection = ({ data }) => {
  const { mainTitle, highlight, subtitle } = data;

  return (
    <div className={styles.content}>
      <div className={`${styles['custom-card-title']}`}>
        <div className={styles['custom-margin']}>
          <h1 className={styles.fw600}>
            {mainTitle.split(" ")[0]}{" "}
            <span className={styles.fw900}>{highlight}</span>
          </h1>
          <h2 className={styles.fw600}>{subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

TitleSection.propTypes = {
  data: PropTypes.shape({
    mainTitle: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default TitleSection;
