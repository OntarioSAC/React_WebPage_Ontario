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
import Popup from "../../components/Modules/PopUp";
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

function Home({ 
  formRef, 
  autoFocus, 
  setAutoFocus, 
  setPageLoaded 
}) {
  const { t } = useTranslation();
  const location = useLocation();
  
  const [showPopup, setShowPopup] = useState(false); // Cambié el estado inicial a `false` para que no se muestre inmediatamente

  // Efecto para manejar el scroll al formulario si se indica en la ubicación
  useEffect(() => {
    // Señalar que la página está cargada
    setPageLoaded(true);
  
    // Desplazamiento al formulario si se indica en la ubicación
    if (location.state?.scrollToForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      formRef.current.focusFirstInput();
      setAutoFocus(false); // Desactiva autoFocus después de enfocar
    }
  
    // Mostrar el popup después de 3 segundos
    const popupTimeout = setTimeout(() => {
      setShowPopup(true); // Muestra el popup después de 3 segundos
    }, 2000); // 3000 ms = 3 segundos
  
    return () => {
      // Limpiar el timeout cuando el componente se desmonte o cambie
      clearTimeout(popupTimeout);
  
      setPageLoaded(false); // Resetear al desmontar
    };
  }, [location.state, formRef, setAutoFocus, setPageLoaded]);

  // Cerrar el popup
  const closePopup = () => {
    setShowPopup(false);
  };
  
  // Datos traducidos
  const homeSlider = t("homeSlider", { returnObjects: true });
  const homeInfoBoxes = t("homeInfoBoxes", { returnObjects: true });
  const homeAboutSection = t("homeAboutSection", { returnObjects: true });
  const homeSectionData = t("homeSectionData", { returnObjects: true });
  const homeTestimonialsData = t("homeTestimonialsData", { returnObjects: true });
  const homeFormSection = t("homeFormSection", { returnObjects: true });

  return (
    <div>
      {showPopup && <Popup onClose={closePopup} />}
      <HomeSlider data={homeSlider} />
      
      <div className="container g-0">
        <div className={styles.customContent}>
          <div className={styles.overlap}>
            <InfoBoxHome data={homeInfoBoxes} />
          </div>
        </div>
        <AboutSection data={homeAboutSection} />
        <ProjectSection sectionData={homeSectionData} />
        <FormSection 
          data={homeFormSection} 
          formRef={formRef} 
          autoFocus={autoFocus} 
        />
        <TestimonialsSection testimonialsData={homeTestimonialsData} />
        <div className="whatsapp">
          <WhatsappButton />
        </div>
      </div>
      
    </div>
  );
}

Home.propTypes = {
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  autoFocus: PropTypes.bool.isRequired,
  setAutoFocus: PropTypes.func.isRequired,
  setPageLoaded: PropTypes.func.isRequired,
};

export default Home;

