import React from 'react';
import styles from './BannerSection.module.css';

/**
 * Componente para la sección de banner.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.data - Los datos para el banner.
 * @param {Array} props.data.items - Los elementos a mostrar en el banner.
 * @param {string} props.data.items[].type - El tipo de elemento.
 * @param {string} [props.data.items[].src] - La fuente de la imagen (si el tipo es 'image').
 * @param {string} [props.data.items[].alt] - El texto alternativo de la imagen (si el tipo es 'image').
 * @param {string} [props.data.items[].content] - El contenido del texto (si el tipo es 'text').
 * @returns {JSX.Element} El componente de la sección de banner.
 */
const BannerSection = ({ data }) => {
  // Duplicar los items para un desplazamiento continuo
  const scrollingItems = [...data.items, ...data.items];

  return (
    <div className={styles['banner-wrapper']}>
      <div className={styles.banner}>
        <div className={styles['scroll-content']}>
          {scrollingItems.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.type === 'image' ? (
                <img src={item.src} loading="lazy" alt={item.alt} className={styles['logo-image']} />
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
