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
  const [hasReachedTrigger, setHasReachedTrigger] = useState(false); 
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


  const [hig, setHig] = useState(0.161); // Valor por defecto
  const [hig2, setHig2] = useState(0.67); // Valor por defecto

   // Detectar cambios de tamaño de pantalla
   useEffect(() => {
    const updateHeights = () => {
      if (window.innerWidth <= 1366) {
        setHig(0.116); // Cambia el valor para pantallas pequeñas
        setHig2(0.65); // Cambia el valor para pantallas pequeñas
      } else {
        setHig(0.161); // Valor original
        setHig2(0.67); // Valor original
      }
    };

    updateHeights(); // Llama al inicio
    window.addEventListener("resize", updateHeights); // Escucha cambios en tamaño

    return () => window.removeEventListener("resize", updateHeights); // Limpieza
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight; // Altura total de la página
      const triggerHeight15 = pageHeight * hig; // 15% de la altura total de la página
      const triggerHeight30 = pageHeight * hig2; // 70% de la altura total

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
  }, [hasReachedTrigger]);

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
                  ? `${document.documentElement.scrollHeight * hig}px`
                  : isFixedAt30
                  ? `${document.documentElement.scrollHeight * hig2}px`
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