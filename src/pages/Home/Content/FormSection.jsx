import React from "react";
import PropTypes from "prop-types";
import styles from "./FormSection.module.css";
import ContactForm from "../../../components/Form/ContactForm";

/**
 * Componente FormSection: Renderiza una sección con un formulario de contacto
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.data - Datos para renderizar la sección
 * @param {React.RefObject} props.formRef - Referencia al formulario
 * @param {boolean} [props.autoFocus=false] - Indica si el formulario debe tener autoenfoque
 * @returns {JSX.Element} - Elemento JSX renderizado
 */
function FormSection({ data, formRef, autoFocus = false }) {
  return (
    <div className={`${styles["custom-container"]}`}>
      <div className="container g-0">
        <div className={styles["overlap"]}>
          <div className={styles["rectangle"]}>
            <h2 className={styles["fatherspantitleone"]}>
              <span className={styles["spantitleone"]}>{data.title1}</span>
              
              <span className={styles["span-style"]}>{data.title2}</span>
            </h2>
            
            {/* Renderizar solo si data.ctaText tiene contenido */}
            {data.ctaText && (
              <div className={`rounded-pill bg-primary text-secondary text-center p-2 ${styles["flag"]}`} >
                {data.ctaText}
              </div>
            )}
            
            <div className={styles["img-content"]}>
              <img src={data.imageSrc} loading="lazy" alt={data.imageAlt} />
            </div>
          </div>
          <div className={styles["rectangle-2"]}>
            <ContactForm ref={formRef} data={data} autoFocus={autoFocus} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Validación de props
FormSection.propTypes = {
  data: PropTypes.object.isRequired,
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  autoFocus: PropTypes.bool,
};

export default FormSection;