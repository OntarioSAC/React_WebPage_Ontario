import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InfoBoxAbout.module.css';

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


export default InfoBoxAbout;
