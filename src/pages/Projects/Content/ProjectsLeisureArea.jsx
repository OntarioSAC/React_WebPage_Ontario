import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import styles from "./ProjectsLeisureArea.module.css";
import ContactForm from "../../../components/Form/ContactForm";

/**
 * Componente para mostrar el área de ocio de los proyectos.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos necesarios para renderizar el componente.
 * @param {Object} props.formRef - Referencia al formulario de contacto.
 * @returns {JSX.Element} El componente ProjectsLeisureArea.
 */
function ProjectsLeisureArea({ data, formRef, projectId }) {
  // Desestructuración de props
  const { title, titleBold, description, icons, contact } = data;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = window.innerHeight * 0.9;

      // Cambiar estado basado en la posición de desplazamiento
      setIsScrolled(scrollTop > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="row">
        <div className={`col-12 col-lg-7 col-md-12 order-1 order-sm-2 order-md-1`}>
          <div className={styles["custom-container"]}>
            {/* Título y descripción */}
            <h1 className={styles.title}>
              {title} <span className={styles["title-span"]}>{titleBold}</span>
            </h1>
            <p className={styles["custom-description"]}>{description}</p>
  
            {/* Contenido de Áreas */}
            <div className={styles["area-container"]}>
              {/* Contenedor de Áreas Propias y Compartidas con línea divisora */}
              {projectId === "punta-arena-2" ? (
                <div className={styles["custom-card-pt2"]}>
                  <div className={styles["title-column"]}>
                    <div className={styles["vertical-text"]}>
                      <span className={styles["text-light"]}>ÁREAS</span> <span className={styles["text-bold"]}>PROPIAS</span>
                    </div>
                  </div>

                  {/* Iconos de ÁREAS PROPIAS */}
                  <div className={styles["icon-column"]}>
                    {icons.filter(icon => icon.type === "propia").map((icon, index) => (
                      <div key={index} className={styles["icon-size"]}>
                        <img src={icon.src} alt={icon.alt} loading="lazy" className={styles["icon-image-small"]} />
                        <p className={styles["icon-text"]}>{icon.text}</p>
                      </div>
                    ))}
                  </div>
                
                  {/* Divisor central */}
                  <div className={styles["divider"]}></div>
                
                  <div className={styles["title-column-compartidas"]}>
                    <div className={styles["vertical-text"]}>
                      <span className={styles["text-light"]}>ÁREAS</span> <span className={styles["text-bold"]}>COMPARTIDAS</span>
                    </div>
                  </div>

                  {/* Iconos de ÁREAS COMPARTIDAS */}
                  <div className={styles["icon-column-grid"]}>
                    {icons.filter(icon => icon.type === "compartida").map((icon, index) => (
                      <div key={index} className={styles["icon-size"]}>
                        <img src={icon.src} alt={icon.alt} loading="lazy" className={styles["icon-image-small"]} />
                        <p className={styles["icon-text"]}>{icon.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={styles["custom-card"]}>
                  {icons.map((icon, index) => (
                    <div key={index} className={styles["icon-size"]}>
                      <img src={icon.src} alt={icon.alt} loading="lazy" className={styles["icon-image"]} />
                      <p className={styles["icon-text"]}>{icon.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 order-0 order-sm-1 order-md-2">
          <div className={`${styles.fixedContactForm} ${isScrolled ? styles.scrolled : ""}`}>
            <ContactForm ref={formRef} data={contact} />
          </div>
        </div>
      </div>
    </>
  );  
}

ProjectsLeisureArea.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    contact: PropTypes.object.isRequired,
  }).isRequired,
  formRef: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired, // Asegúrate de agregar esta prop
};

export default ProjectsLeisureArea;