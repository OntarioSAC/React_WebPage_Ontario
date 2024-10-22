// 1. Importaciones de Librerías Externas
import React from "react";
import { useTranslation } from "react-i18next";

// 2. Importaciones de Componentes Locales
import ReferredSteps from "./Content/ReferredSteps";
import ReferredBaner from "./Content/ReferredBaner";
import ReferredHeader from "./Content/ReferredHeader";
import WhatsappButton from "../../components/Modules/WhatsappButton";

// 3. Importaciones de Estilos
import styles from "./Referrals.module.css";

/**
 * Componente Referrals
 * 
 * Este componente representa la página principal de referidos.
 * Muestra una cabecera, pasos para referir y un banner informativo.
 * También incluye un botón de WhatsApp flotante.
 * 
 * @component
 * @example
 * return (
 *   <Referrals />
 * )
 */
function Referrals() {
  // Hook para obtener las traducciones
  const { t } = useTranslation();

  // Desestructuración de los datos traducidos del JSON
  const referredHeader = t('referredHeader', { returnObjects: true });
  const referredSteps = t('referredSteps', { returnObjects: true });
  const referredBaner = t('referredBaner', { returnObjects: true });

  return (
    <>
      <ReferredHeader data={referredHeader} />
      <div className="container g-0">
        <ReferredSteps data={referredSteps} />
        <ReferredBaner data={referredBaner} />
        <div className={styles.customContent}>
          <div className="whatsapp">
            <WhatsappButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Referrals;
