import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importación de PropTypes para validación de props
import styles from "./ApartmentsLeisureArea.module.css";
import ContactForm from "../../../components/Form/ContactForm";

/**
 * Componente que muestra el área de ocio de los apartamentos, incluyendo títulos, descripciones, íconos y un formulario de contacto.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos necesarios para renderizar el área de ocio.
 * @param {React.Ref} props.formRef - Referencia al formulario de contacto.
 */
function ApartmentsLeisureArea({
  data = {}, 
  formRef = null
}) {
  const { 
    title = "", 
    titleBold = "", 
    description = "", 
    icons = [], 
    contact = {}, 
    building = "" 
  } = data;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = window.innerHeight * 0.9;

      if (scrollTop > triggerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className={`row ${styles["content"]}`}>
        <div className={`col-12 col-lg-7 col-md-12 order-1 order-sm-2 order-md-1`}>
          <div className={styles["custom-container"]}>
            <h1 className={styles.title}>
              {title}
              <span className={styles["title-span"]}> {titleBold}</span>
            </h1>
            <p className={styles["custom-description"]}>{description}</p>
            <div className={`${styles["custom-card"]}`}>
              {icons.map((icon, index) => (
                <div key={index} className={styles["icon-size"]}>
                  <img src={icon.src} alt={icon.alt} loading="lazy" className={styles["icon-image"]} />
                  <p className={styles["icon-text"]}>{icon.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["content-building"]}>
            <img src={building} alt="edificio" loading="lazy" className={styles["image-building"]} />
          </div>
        </div>
        <div className="col-12 col-lg-5 order-0 order-sm-1 order-md-2">
          <div className={`${styles.fixedContactForm} ${isScrolled ? styles.scrolled : ""}`}>
            <ContactForm ref={formRef} data={contact} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Validación de las propiedades recibidas por el componente
ApartmentsLeisureArea.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string,
    description: PropTypes.string,
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        text: PropTypes.string,
      })
    ),
    contact: PropTypes.object.isRequired,
    building: PropTypes.string.isRequired,
  }).isRequired,
  formRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
  ]),
};

export default ApartmentsLeisureArea;
