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
  const [hasReachedTrigger, setHasReachedTrigger] = useState(false); 
  const [isAt70Percent, setIsAt70Percent] = useState(false);
  const [isFixedAt30, setIsFixedAt30] = useState(false);
  const [isFixedAt15, setIsFixedAt15] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Detecta si el ancho de la ventana está dentro del rango móvil
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Agrega un evento de resize para actualizar en tiempo real
    window.addEventListener("resize", checkIfMobile);
    checkIfMobile();

    // Limpieza del evento
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight; // Altura total de la página
      const triggerHeight15 = pageHeight * 0.15; // 15% de la altura total de la página
      const triggerHeight30 = pageHeight * 0.786; // 70% de la altura total

         // Lógica para el 15%
         if (scrollTop > triggerHeight15 && scrollTop < triggerHeight30) {
          setIsScrolled(true); // El formulario se mueve con el scroll
          
        } else if (scrollTop < triggerHeight15) {
          setIsFixedAt15(true);
          setIsScrolled(false); // El formulario se detiene antes del 15%
        }

        // Lógica para el 30%
        if (scrollTop > triggerHeight30) {
          setIsScrolled(false); // El formulario se detiene al llegar al 30%
          setIsFixedAt30(true); // El formulario se queda fijo
          setIsFixedAt15(false);
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

        <div className={` col-12 col-lg-5 order-0 order-sm-1 order-md-2 ${styles.formula}`}>
          
        <div
        style={
          !isMobile
            ? {
                position: isScrolled
                  ? "fixed"
                  : isFixedAt15 || isFixedAt30
                  ? "absolute"
                  : "static",
                top: isScrolled
                  ? "20px"
                  : isFixedAt15
                  ? `${document.documentElement.scrollHeight * 0.15}px`
                  : isFixedAt30
                  ? `${document.documentElement.scrollHeight * 0.786}px`
                  : "auto",
              }
            : undefined
        }
        className={`${isMobile ? styles.mobileStyles : ""}`} // Aplica clases específicas para móviles
      >
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
