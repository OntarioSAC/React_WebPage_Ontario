import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import { useTranslation } from "react-i18next";
import styles from "./ApartmentsLocationMap.module.css";
import LocationComponent from "../../../components/Modules/LocationComponent";

/**
 * Componente que muestra un mapa de ubicación de los apartamentos con título y datos de localización.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos necesarios para renderizar el mapa de ubicación.
 */
const ApartmentsLocationMap = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [locationData, setLocationData] = useState(data || {});
  useEffect(() => {
    if (data) {
      setLocationData({
        ...data,
        title: t(data.title),
        titleBold: t(data.titleBold)
      });
    }
  }, [data, i18n.language, t]);

  const colorsPage1 = {
    backgroundColor: "#1C284C",
    textColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    activeBackgroundColor: "#12B092",
    activeTextColor: "#1C284C",
    activeShadowColor: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <section className="">
      <div className="container g-0">
        <div className={styles["custom-container"]}>
          <h1 className={`${styles.customTitle} text-start`}>
            {locationData.title} <strong>{locationData.titleBold}</strong>
          </h1>
          <LocationComponent contentData={locationData} colors={colorsPage1} />
        </div>
      </div>
    </section>
  );
};

// Validación de props
ApartmentsLocationMap.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string.isRequired,
  }).isRequired,
};

export default ApartmentsLocationMap;

