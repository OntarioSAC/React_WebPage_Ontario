import React from "react";
import IframeContent from "../../../../components/Modules/IframeContent";
import styles from "./VrComponent.module.css";

// Componente para mostrar contenido VR en un iframe
const VrComponent = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        {/* Renderiza el contenido VR en un iframe */}
        <IframeContent src={data} />
      </div>
    </div>
  );
};

// Validación de propiedades
VrComponent.propTypes = {
  data: PropTypes.string.isRequired,
};

export default VrComponent;
