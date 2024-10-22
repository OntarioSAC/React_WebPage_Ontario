import React from 'react';
import styles from './CustomSection.module.css'; // Importar los estilos como module

const CustomSection = () => {
  return (
    <section className={`container bg-primary ${styles.customSection}`}>
      {}
      <img src="/img/textures/textura-1.svg" loading="lazy" className={styles.topRight} alt="Imagen superior derecha" />

      {}
      <img src="/img/textures/textura-2.svg" loading="lazy" className={styles.bottomLeft} alt="Imagen inferior izquierda" />
    </section>
  );
};

export default CustomSection;
