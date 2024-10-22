import React from "react";
import PropTypes from "prop-types"; // Importamos PropTypes para la validación
import styles from "./ReferredBaner.module.css";

/**
 * Componente ReferredBaner
 * Muestra un banner con información de referidos
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.data - Datos para el banner
 * @param {string} props.data.backgroundImage - URL de la imagen de fondo
 * @param {string} props.data.title - Título del banner
 * @param {string} props.data.titleBold - Parte en negrita del título
 * @param {Array} props.data.rewards - Lista de recompensas
 * @param {string} props.data.rewards[].icon - URL del icono de la recompensa
 * @param {string} props.data.rewards[].amount - Cantidad de la recompensa
 * @param {string} props.data.rewards[].description - Descripción de la recompensa
 * @returns {JSX.Element} Elemento JSX que representa el banner de referidos
 */
function ReferredBaner({ data }) {
  return (
    <div className={styles["custom-container"]}>
      <div className="container g-0">
        <div className={styles.overlap}>
          <div className={styles.rectangle}>
            <img
              className={styles["model-circle"]}
              src={data.backgroundImage}
              alt="Modelo Círculo"
              loading="lazy"
            />
          </div>
          <div className={styles["rectangle-2"]}>
            <h1 className={styles.title}>
              {data.title} <span>{data.titleBold}</span>
            </h1>
            {data.rewards.map((reward, index) => (
              <div key={index} className={styles.group}>
                <img src={reward.icon} loading="lazy" alt={`Icono ${index + 1}`} />
                <p className={styles["s-referido"]}>
                  <span className={styles["text-wrapper-1"]}>{reward.amount}</span>{" "}
                  <span className={styles["text-wrapper-2"]}>{reward.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Definimos las PropTypes para validar las propiedades
ReferredBaner.propTypes = {
  data: PropTypes.shape({
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string.isRequired,
    rewards: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ReferredBaner;
