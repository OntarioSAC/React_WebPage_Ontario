import React from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import styles from "./ApartmentsSlider.module.css";
import ProjectSliderComponent from "../../../components/Modules/ProjectSliderComponent";

/**
 * Componente que muestra un slider de proyectos de apartamentos.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos necesarios para renderizar el slider.
 */
const ApartmentsSlider = ({ data }) => {
  const { title, titleBold } = data;

  return (
    <section className={styles.customContent}>
      <div className={`container g-0 mb-5`}>
        <h1 className={`${styles.customTitle} text-start`}>
          {title} <strong>{titleBold}</strong>
        </h1>
        <ProjectSliderComponent data={data} />
      </div>
    </section>
  );
};

// Validación de props
ApartmentsSlider.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string.isRequired,
  }).isRequired,
};

export default ApartmentsSlider;

