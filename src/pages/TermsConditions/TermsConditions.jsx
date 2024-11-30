// Importaciones de librerías externas
import React from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
// Importaciones de componentes locales
import TermSection from "./Content/TermSection";
import styles from "./TermsConditions.module.css";

/**
 * Componente TermsConditions
 * 
 * Este componente renderiza la página de Términos y Condiciones.
 * Utiliza el hook useTranslation para manejar las traducciones y
 * pasa los datos de los términos al componente TermSection.
 * 
 * @component
 * @returns {JSX.Element} Un contenedor que incluye el componente TermSection con los datos de los términos.
 */
const TermsConditions = () => {
  // Inicializa el hook de traducción
  const { t } = useTranslation();
  const location = useLocation();

  /**
   * Datos de los términos y condiciones obtenidos del JSON de traducción.
   * @type {Object[]}
   */
  const termsData = t('termsData', { returnObjects: true });
// Obtiene la sección activa inicial del estado de navegación
  const initialActiveSection = location.state?.activeSection || termsData.terms[0]?.key;
  const initialActiveSubsection = location.state?.activeSubsection;
  const initialActiveSubsection2 = location.state?.activepromociones_noviembre;
  return (
    <div className="container g-0">
    <div className={styles["custom-container"]}>
      <TermSection 
        data={termsData} 
        initialActiveSection={initialActiveSection} 
        initialActiveSubsection={initialActiveSubsection}
        initialActiveSubsection2={initialActiveSubsection2}
      />
    </div>
  </div>
  );
};

export default TermsConditions;
