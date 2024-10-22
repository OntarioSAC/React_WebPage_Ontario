import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes para validación de props
import styles from './ButtonGroup.module.css';

// Componente ButtonGroup que renderiza un grupo de botones
const ButtonGroup = ({ onKuulaClick, onSliderClick, onVideoClick }) => (
  <div className={styles.buttonGroup}>
    <button onClick={onKuulaClick} className={styles['tour-button']} >
      <img className={styles['card-icon']} loading="lazy" alt="" src="/img/ico/ico32.svg" /> Recorrido 360 
    </button>
    <button onClick={onSliderClick} className={styles['gallery-button']} >
      <img className={styles['card-icon']} loading="lazy" alt="" src="/img/features/icons_01.svg" /> Galeria 
    </button>
    <button onClick={onVideoClick} className={styles['video-button']} >
      <img className={styles['card-icon']} loading="lazy" alt="" src="/img/ico/ico30.svg" /> Video 
    </button>
  </div>
);

// Validación de props
ButtonGroup.propTypes = {
  onKuulaClick: PropTypes.func.isRequired, // Función requerida para el clic en Kuula
  onSliderClick: PropTypes.func.isRequired, // Función requerida para el clic en Slider
  onVideoClick: PropTypes.func.isRequired, // Función requerida para el clic en Video
};

export default ButtonGroup;
