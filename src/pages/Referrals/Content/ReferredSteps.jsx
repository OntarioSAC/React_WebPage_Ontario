import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Importar PropTypes
import styles from "./ReferredSteps.module.css";
import ReferralsForm from "../../../components/Form/ReferralsForm";

/**
 * Componente principal para mostrar los pasos de referidos y el formulario.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos necesarios para renderizar el componente.
 * @param {string} props.data.introText - Texto introductorio.
 * @param {Array} props.data.steps - Lista de pasos de referidos.
 * @param {Object} props.data.referredForm - Datos del formulario de referidos.
 * @returns {JSX.Element} El componente ReferredSteps.
 */
function ReferredSteps({ data }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Maneja el evento de scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = window.innerHeight * 0.9;
      setIsScrolled(scrollTop > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del efecto
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Validación para asegurar que 'data' y 'data.steps' existen
  if (!data || !data.steps) {
    return <p>No hay datos disponibles.</p>; // Mensaje de error
  }

  return (
    <div className={`row ${styles["custom-container"]}`}>
      <div className={`col-12 col-lg-6 ${styles["content-card"]}`}>
        <p className={styles["custom-paragraph"]}>{data.introText}</p>
        {data.steps.map((step, index) => (
          <div key={index} className="my-2 my-lg-5">
            <div className={styles["referral-card"]}>
              <img src={step.icon} loading="lazy" className={styles["decorative-image"]} alt="decoración" />
              <div className="card-body">
                <img src={step.image} loading="lazy" alt="refiere" />
                <div className={styles["custom-flag"]}>{step.title}</div>
                <p className={styles["card-text"]}>
                  {step.description}{" "}
                  {step.link && (
                    <a href={step.link} target="_blank" rel="noopener noreferrer" >
                      REFIERE AQUÍ
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-12 col-lg-6">
        <div className={`${styles.fixedContactForm} ${ isScrolled ? styles.scrolled : "" }`} >
          <ReferralsForm data={data.referredForm} />
        </div>
      </div>
    </div>
  );
}

// Definición de PropTypes
ReferredSteps.propTypes = {
  data: PropTypes.shape({
    introText: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string,
      })
    ).isRequired,
    referredForm: PropTypes.object.isRequired,
  }).isRequired,
};

export default ReferredSteps;
