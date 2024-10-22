import React from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import styles from "./ValuesSection.module.css";

/**
 * Componente para mostrar la sección de valores.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos para la sección de valores.
 * @param {string} props.data.flag - La bandera a mostrar.
 * @param {string} props.data.title - El título de la sección.
 * @param {string} [props.data.highlight] - El texto destacado en el título.
 * @param {Array} props.data.values - Lista de valores a mostrar.
 * @param {string} props.data.mainImage - La imagen principal a mostrar.
 * @returns {JSX.Element} El componente de la sección de valores.
 */
const ValuesSection = ({ data }) => {
  return (
    <>
      <div className={styles["custom-box"]}>
        <div className={`row ${styles["custom-container"]}`}>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className={`col-12 ${styles["custom"]}`}>
                <div className={styles["custom-flag"]}>{data.flag}</div>
              </div>
              <div className={`${styles["custom-title"]} col-12`}>
                <h1>
                  {data.title} <span>{data.highlight}</span>
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.parent}>
            {data.values.map((value, index) => {
              // Definir clases específicas para cada div basado en el índice
              const divClass = styles[`div${index + 1}`];
              
              // Asignar flex-container o flex-container2 según el índice
              const containerClass = (index === 2 || index === 3) 
                ? styles["flex-container2"] 
                : styles["flex-container"];

              return (
                <div key={index} className={`${divClass} ${containerClass}`}>
                  <div>
                    <h5 className={index === 2 || index === 3 ? styles.subtitle2 : styles.subtitle}>
                      {value.title}
                    </h5>
                    <p className={index === 2 || index === 3 ? styles.description2 : styles.description}>
                      {value.description}
                    </p>
                  </div>
                  <div>
                    <img
                      className={styles["img-fluid"]}
                      alt={value.title}
                      src={value.icon}
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
            <div className={styles.div5}>
              <img
                className={styles["img-fluid2"]}
                alt="Family"
                src={data.mainImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Validación de props
ValuesSection.propTypes = {
  data: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    mainImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ValuesSection;
