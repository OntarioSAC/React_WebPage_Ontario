import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InfoBoxAbout.module.css';

/**
 * Anima un número desde un valor inicial hasta un valor final en una duración dada.
 * @param {HTMLElement} element - El elemento DOM que se actualizará con el número animado.
 * @param {number} start - El número inicial.
 * @param {number} end - El número final.
 * @param {number} duration - La duración de la animación en milisegundos.
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
 * Componente InfoBoxAbout que muestra un conjunto de cajas de información con números animados.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos para las cajas de información.
 * @param {Array} props.data.boxes - Un arreglo de objetos de caja.
 * @param {string} props.data.boxes[].icon - La URL de la imagen del icono.
 * @param {string} props.data.boxes[].highlight - El texto destacado.
 * @param {string} props.data.boxes[].number - El número a animar.
 * @param {string} props.data.boxes[].description - El texto de descripción.
 * @returns {JSX.Element} El componente renderizado.
 */
const InfoBoxAbout = ({ data }) => {
  useEffect(() => {
    const numberElements = document.querySelectorAll(`.${styles['custom-info-number']}`);
    numberElements.forEach((element) => {
      animateNumber(element, 0, parseInt(element.textContent.trim().slice(1)), 2000);
    });
  }, []);

  return (
    <div className={styles['custom-info-boxes']}>
      <div className={styles['grid-container']}>
        {data.boxes.map((box, index) => (
          <div key={index} className={styles['custom-info-box']}>
            <img
              src={box.icon}
              alt={box.highlight}
              loading="lazy"
              className={styles['custom-info-icon']}
            />
            <div className={styles['custom-info-text']}>
              <h4 className={styles['custom-info-number']}>{box.number}</h4>
              <p className={styles['custom-info-description']}>
                <span>{box.description}</span>
                <br />
                <span className={styles['custom-info-description-bold']}>
                  {box.highlight}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Definición de PropTypes para validar las props
InfoBoxAbout.propTypes = {
  data: PropTypes.shape({
    boxes: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      highlight: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default InfoBoxAbout;
