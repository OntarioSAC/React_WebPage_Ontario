import React from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import styles from "./WelcomeSection.module.css";

/**
 * Componente de sección de bienvenida.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos para renderizar la sección.
 * @param {Object} props.data.images - Imágenes utilizadas en la sección.
 * @param {string} props.data.images.banner - URL de la imagen del banner.
 * @param {string} props.data.images.ontarioLogo - URL del logo de Ontario.
 * @param {string} props.data.flag - Texto de la bandera.
 * @param {string} props.data.title - Título de la sección.
 * @param {string} props.data.highlight - Texto destacado en el título.
 * @param {string} props.data.description - Descripción de la sección.
 * @param {Object} props.data.vision - Datos de la visión.
 * @param {string} props.data.vision.icon - URL del icono de la visión.
 * @param {string} props.data.vision.text - Texto de la visión.
 * @param {Object} props.data.mision - Datos de la misión.
 * @param {string} props.data.mision.icon - URL del icono de la misión.
 * @param {string} props.data.mision.text - Texto de la misión.
 * @returns {JSX.Element} Elemento JSX que representa la sección de bienvenida.
 */
function WelcomeSection({ data }) {
  return (
    <>
      {/* Contenedor principal centrado */}
      <div className="d-flex justify-content-center align-items-center align-content-center">
        <img
          className={styles["custom-img"]}
          src={data.images.banner}
          alt="Pareja"
        />
      </div>
      <section>
        <div className={styles["custom-box"]}>
          <div className={`row ${styles["custom-container"]}`}>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className={`col-12 ${styles["custom"]}`}>
                  <div className={styles["custom-flag"]}>{data.flag}</div>
                </div>
                <div className={`${styles["custom-title"]} col-12`}>
                  <h1> {data.title} <span>{data.highlight}</span>{" "} </h1>
                </div>
                <div className={`${styles["custom-detail"]} col-12 mt-2`}>
                  <p>{data.description}</p>
                </div>
              </div>
              {/* Imagen visible solo en dispositivos móviles */}
              <div className="col-12 d-block d-md-none">
                <img className={styles["img-fluid"]} loading="lazy" alt="Ontario" src={data.images.ontarioLogo} />
              </div>
              {/* Contenido de visión */}
              <div className={`d-flex align-items-center" ${styles["content-img"]}`}>
                <img className={styles["responsive-img"]} alt="Vision" loading="lazy" src={data.vision.icon} />
              </div>
              <div className={styles["custom-detail"]}>
                <p>{data.vision.text}</p>
              </div>
              {/* Contenido de misión */}
              <div className={`d-flex align-items-center" ${styles["content-img"]}`}>
                <img className={styles["responsive-img"]} alt="Mision" loading="lazy" src={data.mision.icon} />
              </div>
              <div className={styles["custom-detail"]}>
                <p>{data.mision.text}</p>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-none d-md-block">
              <img className={styles["img-fluid"]} loading="lazy" alt="Ontario" src={data.images.ontarioLogo} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Validación de props
WelcomeSection.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.shape({
      banner: PropTypes.string.isRequired,
      ontarioLogo: PropTypes.string.isRequired,
    }).isRequired,
    flag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    vision: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    mision: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WelcomeSection;
