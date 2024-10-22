import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes para validación
import styles from './InfoBoxHome.module.css';

/**
 * Función para animar números
 * @param {HTMLElement} element - Elemento HTML donde se mostrará el número
 * @param {number} start - Valor inicial
 * @param {number} end - Valor final
 * @param {number} duration - Duración de la animación en milisegundos
 */
const animateNumber = (element, start, end, duration) => {
  let startTime = null;

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = `+ ${value}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

/**
 * Componente InfoBoxHome
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.data - Datos para renderizar las cajas de información
 * @param {string} props.data[].icon - URL del icono
 * @param {string} props.data[].number - Número a mostrar
 * @param {string} props.data[].line1 - Primera línea de texto
 * @param {string} props.data[].line2 - Segunda línea de texto
 * @returns {JSX.Element} - Elemento JSX renderizado
 */
const InfoBoxHome = ({ data }) => {
  useEffect(() => {
    const numberElements = document.querySelectorAll(`.${styles.customInfoNumber}`);
    numberElements.forEach((element) => {
      animateNumber(element, 0, parseInt(element.textContent.trim().slice(1)), 2000);
    });
  }, []);

  return (
    <div className={styles.customInfoBoxes}>
      <div className={styles.gridContainer}>
        {data.map((box, index) => (
          <div key={index} className={`${styles.customInfoBox}`}>
            <img src={box.icon} loading="lazy" alt='icon' className={styles.customInfoIcon} />
            <div className={styles.customInfoText}>
              <h4 className={styles.customInfoNumber}>{box.number}</h4>
              <p className={styles.customInfoDescription}>
                <span>{box.line1}</span><br />
                <span className={styles.customInfoDescriptionBold}>{box.line2}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Validación de props
InfoBoxHome.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      line1: PropTypes.string.isRequired,
      line2: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InfoBoxHome;