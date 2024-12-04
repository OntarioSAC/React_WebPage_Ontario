// 1. Importaciones de Librerías Externas
import React from "react";
import { useTranslation } from "react-i18next";

// 2. Importaciones de Componentes Locales
import WelcomeSection from "./Content/WelcomeSection";
import InfoBoxAbout from "./Content/InfoBoxAbout";
import ValuesSection from "./Content/ValuesSection";
import ChronologySection from "./Content/ChronologySection";
import TitleSection from "./Content/TitleSection";
import BannerSection from "./Content/BannerSection";
import WhatsappButton from "../../components/Modules/WhatsappButton";

// 3. Importaciones de Estilos (si es necesario)
import styles from "./About.module.css";

/**
 * Componente About
 * 
 * Este componente representa la página "Acerca de" de la aplicación.
 * Utiliza varios subcomponentes para mostrar diferentes secciones de información.
 * 
 * @component
 * @example
 * return (
 *   <About />
 * )
 * 
 * @returns {JSX.Element} El componente About renderizado
 */
function About() {
  // Hook para obtener las traducciones
  const { t } = useTranslation();

  /**
   * Obtiene los datos traducidos para cada sección
   * @type {Object}
   */
  const welcomeSection = t("welcomeSection", { returnObjects: true });

  /**
   * Datos traducidos para la sección de información
   * @type {Object}
   */
  const infoBoxAbout = t("infoBoxAbout", { returnObjects: true });

  /**
   * Datos traducidos para la sección de valores
   * @type {Object}
   */
  const valuesSection = t("valuesSection", { returnObjects: true });

  /**
   * Datos traducidos para la sección de título
   * @type {Object}
   */
  const titleSection = t("titleSection", { returnObjects: true });

  /**
   * Datos traducidos para la sección de cronología
   * @type {Array}
   */
  const chronology = t("chronologySection.chronology", { returnObjects: true });

  /**
   * Datos traducidos para la sección de banner
   * @type {Object}
   */
  const bannerSection = t("bannerSection", { returnObjects: true });

  return (
    <>
    <div className="container g-0">
      <WelcomeSection data={welcomeSection} />
      <InfoBoxAbout data={infoBoxAbout} />
      <ValuesSection data={valuesSection} />
      <TitleSection data={titleSection} />
      <ChronologySection data={chronology} />
      
      <div className="whatsapp">
        <WhatsappButton />
      </div>
    </div>
    <BannerSection data={bannerSection} />
    </>
  );
}

export default About;
