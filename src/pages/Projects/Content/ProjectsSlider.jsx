import React from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación de props

import styles from "./ProjectsSlider.module.css";
import ProjectSliderComponent from "../../../components/Modules/ProjectSliderComponent";

/**
 * Componente para mostrar un deslizador de proyectos.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos para el deslizador.
 * @param {string} props.data.title - El título del deslizador.
 * @param {string} props.data.titleBold - La parte en negrita del título.
 * @returns {JSX.Element} El componente JSX.
 */
const ProjectsSlider = ({ data }) => {
  const { title, titleBold } = data;

  return (
    <section className={styles["custom-content"]}>
      <div>
        <h1 className={`${styles["custom-title"]}`}>
          {title} <strong>{titleBold}</strong>
        </h1>
        <ProjectSliderComponent data={data} />
      </div>
    </section>
  );
};

// Validación de props
ProjectsSlider.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired, // Título requerido
    titleBold: PropTypes.string.isRequired, // Título en negrita requerido
  }).isRequired, // data es requerido
};

export default ProjectsSlider;
