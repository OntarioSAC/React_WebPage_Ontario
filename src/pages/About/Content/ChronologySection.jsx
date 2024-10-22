import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ChronologySection.module.css";

/**
 * Componente que muestra una sección de cronología con barras expandibles.
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.data - Array de objetos que contiene la información de la cronología.
 * @param {string} props.data[].year - Año de la cronología.
 * @param {string} props.data[].image - URL de la imagen para pantallas grandes.
 * @param {string} props.data[].imageSm - URL de la imagen para pantallas móviles.
 * @returns {JSX.Element} El componente de la sección de cronología.
 */
const ChronologySection = ({ data }) => {
  // Estado para controlar la barra expandida y si es vista móvil
  const [expandedBar, setExpandedBar] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    /**
     * Función para manejar el cambio de tamaño de la ventana.
     */
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Inicializar el estado de isMobile
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Función para manejar el clic en una barra.
   * @param {number} barIndex - Índice de la barra clicada.
   */
  const handleBarClick = (barIndex) => {
    setExpandedBar(barIndex === expandedBar ? null : barIndex);
  };

  return (
    <div className={styles["custom-container"]}>
      <div className={styles["gallery-container"]}>
        {data.map((item, index) => (
          <div
            key={item.year}
            className={`${styles.bar} ${
              expandedBar === index ? styles["bar-expanded"] : ""
            }`}
            onClick={() => handleBarClick(index)}
          >
            <span
              className={`${styles.title} ${
                expandedBar === index ? styles["title-hidden"] : ""
              }`}
            >
              {item.year}
            </span>
            {expandedBar === index && (
              <div className={styles["image-content"]}>
                <img
                  loading="lazy"
                  src={isMobile ? item.imageSm : item.image}
                  alt={`Imagen ${item.year}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Validación de propiedades
ChronologySection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      imageSm: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChronologySection;
