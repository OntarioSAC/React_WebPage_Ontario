import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import { useTranslation } from "react-i18next";
import styles from "./ProjectsLocationMap.module.css";
import LocationComponent from "../../../components/Modules/LocationComponent";

/**
 * Componente para mostrar el mapa de ubicación de los proyectos.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos necesarios para renderizar el componente.
 * @returns {JSX.Element} El componente ProjectsLocationMap.
 */
const ProjectsLocationMap = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [locationData, setLocationData] = useState(data || {});

  useEffect(() => {
    if (data) {
      setLocationData({
        ...data,
        title: t(data.title), // Traducir título
        titleBold: t(data.titleBold) // Traducir título en negrita
      });
    }
  }, [data, i18n.language, t]);

  return (
    <section className="bg-primary">
      <div className={styles["custom-container"]}>
        <h1 className={`${styles.customTitle}`}>
          {locationData.title} <span>{locationData.titleBold}</span>
        </h1>
        <LocationComponent contentData={locationData} />
      </div>
    </section>
  );
};

// Validación de props
ProjectsLocationMap.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string.isRequired,
  }),
};

export default ProjectsLocationMap;
