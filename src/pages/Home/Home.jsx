// 1. Importaciones de Librerías Externas
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // Añade esta línea
// 2. Importaciones de Componentes Locales
import ProjectSection from "./Content/ProjectSection";
import HomeSlider from "./Content/HomeSlider";
import TestimonialsSection from "./Content/TestimonialsSection";
import AboutSection from "./Content/AboutSection";
import FormSection from "./Content/FormSection";
import InfoBoxHome from "./Content/InfoBoxHome";
import WhatsappButton from "../../components/Modules/WhatsappButton";


// Importación del popup
import Popup from "../../components/Modules/PopUp"; // Asegúrate de que la ruta es correcta

// 3. Importaciones de Estilos
import styles from "./Home.module.css";

// 4. Componente Principal Home
/**
 * Componente principal de la página de inicio.
 * Renderiza varias secciones y maneja el desplazamiento al formulario.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.RefObject} props.formRef - Referencia al formulario
 * @param {boolean} props.autoFocus - Estado de autoenfoque
 * @param {Function} props.setAutoFocus - Función para actualizar el estado de autoenfoque
 * @returns {JSX.Element} El componente Home
 */
function Home({ formRef, autoFocus, setAutoFocus }) {
  const { t } = useTranslation();
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(true); // Estado para controlar la visibilidad del popup

  // Efecto para manejar el scroll al formulario si se indica en la ubicación
  useEffect(() => {
    // Desplazamiento al formulario si se indica en la ubicación
    if (location.state?.scrollToForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      formRef.current.focusFirstInput();
      setAutoFocus(false); // Desactiva autoFocus después de enfocar
    }
    setShowPopup(true); // Muestra el popup al cargar la página
  }, [location.state, formRef, setAutoFocus]);

  // Cerrar el popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Obtención de datos traducidos
  const homeSlider = t("homeSlider", { returnObjects: true });
  const homeInfoBoxes = t("homeInfoBoxes", { returnObjects: true });
  const homeAboutSection = t("homeAboutSection", { returnObjects: true });
  const homeSectionData = t("homeSectionData", { returnObjects: true });
  const homeTestimonialsData = t("homeTestimonialsData", { returnObjects: true, });
  const homeFormSection = t("homeFormSection", { returnObjects: true });

  // Renderizado del componente
  return (
    <>
      {showPopup && <Popup onClose={closePopup} />}
      <HomeSlider data={homeSlider} />

      <div className="container g-0">
        <div className={styles.customContent}>
          <div className={styles.overlap}>
            <InfoBoxHome data={homeInfoBoxes} />
          </div>
        </div>
        <AboutSection data={homeAboutSection} />
        <ProjectSection sectionData={homeSectionData}/>
        <FormSection data={homeFormSection} formRef={formRef} autoFocus={autoFocus} />
        <TestimonialsSection testimonialsData={homeTestimonialsData} />
        <div className="whatsapp">
          <WhatsappButton />
        </div>
      </div>
      
    </>
  );
}

// Validación de propiedades con PropTypes
Home.propTypes = {
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  autoFocus: PropTypes.bool.isRequired,
  setAutoFocus: PropTypes.func.isRequired,
};

export default Home;