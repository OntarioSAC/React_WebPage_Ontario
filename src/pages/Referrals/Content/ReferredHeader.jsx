import React from "react";
import PropTypes from "prop-types"; // Importamos PropTypes para la validación
import styles from "./ReferredHeader.module.css";

/**
 * Componente ReferredHeader
 * Muestra una imagen centrada dentro de un contenedor personalizado
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.data - Datos de la imagen a mostrar
 * @param {string} props.data.image - URL de la imagen
 * @param {string} props.data.alt - Texto alternativo para la imagen
 * @returns {JSX.Element} Elemento JSX que representa el encabezado referido
 */
function ReferredHeader({ data }) {
  return (
    <div className={styles["custom-container"]}>
      <div className="d-flex justify-content-center align-items-center align-content-center">
        <img
          className={styles["custom-img"]}
          src={data.image}
          alt={data.alt}
          loading="lazy"
        />
      </div>
    </div>
  );
}

// Validación de propiedades
ReferredHeader.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReferredHeader;
