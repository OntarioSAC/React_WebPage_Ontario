// 1. Importaciones de Librerías Externas
import React from "react";
import { useTranslation } from "react-i18next"; // Importa el hook de traducción

// 2. Importaciones de Componentes Locales
import SocialHeader from './Content/SocialHeader';
import SocialSlider from './Content/SocialSlider';
import FormSection from '../Home/Content/FormSection';
import WhatsappButton from "../../components/Modules/WhatsappButton";

// 3. Importaciones de Estilos
import styles from "./SocialResponsibility.module.css";

/**
 * Componente SocialResponsibility
 * 
 * Este componente representa la página de Responsabilidad Social.
 * Utiliza componentes secundarios para mostrar diferentes secciones
 * y maneja las traducciones mediante el hook useTranslation.
 * 
 * @component
 * @returns {JSX.Element} Un componente que representa la página de Responsabilidad Social.
 */
function SocialResponsibility() {
  // Hook para obtener las traducciones
  const { t } = useTranslation(); // Hook para obtener las traducciones

  // Obtener datos de traducción para cada sección
  const socialHeader = t('socialHeader', { returnObjects: true });
  const socialSlider = t('socialSlider', { returnObjects: true });
  const formSection = t('formSection', { returnObjects: true });

  

  return (
    <>
      {/* Sección de encabezado social */}
      <SocialHeader data={socialHeader} />
      
      {/* Sección de slider social */}
      <SocialSlider data={socialSlider} />
      
      {/* Sección de formulario */}
      <FormSection data={formSection} />
      
      {/* Contenedor para el botón de WhatsApp */}
      <div className="container g-0">
        <div className={styles.customContent}>
          <div className="whatsapp">
            <WhatsappButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialResponsibility;
