import React from "react";
import PropTypes from "prop-types"; // Importamos PropTypes para la validación de props
import styles from "./SocialHeader.module.css";

/**
 * Componente principal para la cabecera de la sección de responsabilidad social.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos necesarios para renderizar el componente.
 * @param {string} props.data.bannerImage - URL de la imagen del banner.
 * @param {Object} props.data.leftColumn - Datos para la columna izquierda.
 * @param {string} props.data.leftColumn.flag - Bandera de la columna izquierda.
 * @param {string} props.data.leftColumn.title - Título de la columna izquierda.
 * @param {string} props.data.leftColumn.highlight - Texto destacado de la columna izquierda.
 * @param {Object} props.data.rightColumn - Datos para la columna derecha.
 * @param {string} props.data.rightColumn.description - Descripción de la columna derecha.
 * @param {Object} props.data.recycleSection - Datos para la sección de reciclaje.
 * @param {string} props.data.recycleSection.image - Imagen de la sección de reciclaje.
 * @param {string} props.data.recycleSection.description - Descripción de la sección de reciclaje.
 * @param {Object} props.data.studentsSection - Datos para la sección de estudiantes.
 * @param {string} props.data.studentsSection.image - Imagen de la sección de estudiantes.
 * @param {string} props.data.studentsSection.description - Descripción de la sección de estudiantes.
 * @returns {JSX.Element} El componente SocialHeader.
 */
function SocialHeader({ data }) {
  return (
    <>
      {/* Sección de banner */}
      <div className="d-flex justify-content-center align-items-center align-content-center">
        <img
          className={styles["custom-img"]}
          loading="lazy"
          src={data.bannerImage}
          alt="Pareja"
        />
      </div>
      <section>
        <div className="container g-0">
          {/* Contenedor principal con información dividida en dos columnas */}
          <div className={styles["custom-container"]}>
            <div className={styles["custom-grid"]}>
              {/* Columna izquierda con bandera y título */}
              <div className={styles["custom-column-left"]}>
                <div className={styles["custom-flag"]}>{data.leftColumn.flag}</div>
                <h1 className={styles["custom-title"]}>
                  {data.leftColumn.title}
                  <span> {data.leftColumn.highlight}</span>
                </h1>
              </div>
              {/* Columna derecha con descripción */}
              <div className={styles["custom-column-right"]}>
                <p className={styles["custom-description"]}>
                  {data.rightColumn.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sección de reciclaje */}
          <div className={styles["custom-recycle"]}>
            <div className={styles["content-recycle"]}>
              <img
                className={`d-none d-sm-none d-md-block ${styles["custom-img3"]}`}
                loading="lazy"
                src={data.recycleSection.image}
                alt="Hoja"
              />
              <p className={styles["custom-description"]}>
                {data.recycleSection.description}
              </p>
            </div>
          </div>

          {/* Sección de estudiantes */}
          <div className={`row d-flex align-items-center py-lg-5 py-sm-2 ${styles["custom-student"]}`}>
            <div className="col-md-6 text-center">
              <img
                className={styles["custom-img2"]}
                loading="lazy"
                src={data.studentsSection.image}
                alt="Estudiantes"
              />
            </div>
            <div className="col-md-6 my-sm-3">
              <p className={styles["custom-description2"]}>
                {data.studentsSection.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Validación de propiedades con PropTypes
SocialHeader.propTypes = {
  data: PropTypes.shape({
    bannerImage: PropTypes.string.isRequired,
    leftColumn: PropTypes.shape({
      flag: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      highlight: PropTypes.string.isRequired,
    }).isRequired,
    rightColumn: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }).isRequired,
    recycleSection: PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    studentsSection: PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SocialHeader;
