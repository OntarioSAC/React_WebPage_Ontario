// Importaciones de librerías externas
import React from "react";
import { useTranslation } from 'react-i18next';

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

  /**
   * Datos de los términos y condiciones obtenidos del JSON de traducción.
   * @type {Object[]}
   */
  const termsData = t('termsData', { returnObjects: true });

  return (
    <div className="container g-0">
      <div className={styles["custom-container"]}>
        {/* Renderiza el componente TermSection pasando los datos de los términos */}
        <TermSection data={termsData} />
      </div>
    </div>
  );
};

export default TermsConditions;
