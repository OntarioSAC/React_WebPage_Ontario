import React, { useEffect, useRef, useState } from 'react';
import styles from './HomeSlider.module.css';
import PropTypes from 'prop-types'; // Importar PropTypes para validación de props

/**
 * Componente HomeSlider
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.data - Datos para renderizar el slider
 * @param {string} props.data[].type - Tipo de contenido (imagen o video)
 * @param {string} props.data[].src - Fuente del contenido
 * @returns {JSX.Element} - Elemento JSX renderizado
 */
const HomeSlider = ({ data }) => {
  const videoRefs = useRef([]);
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setLoaded((prevLoaded) => {
              const newLoaded = [...prevLoaded];
              newLoaded[index] = true; // Marca el video como cargado
              return newLoaded;
            });
          }
        });
      },
      { threshold: 0.2 } 
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <div id="videoSlider" className={`carousel slide ${styles['video-slider']}`} data-bs-ride="carousel">
      <div className={styles["carousel-inner"]}>
        {data.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''} ${styles['custom-slider-item']}`}
          >
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                loading="lazy"
                className={`d-block w-100 ${styles['image-slider']}`}
                alt={`Slide ${index}`}
              />
            ) : (
              <div
                ref={(el) => (videoRefs.current[index] = el)} // Referencia al video
                data-index={index}
              >
                {loaded[index] ? ( // Carga solo si el video es visible
                  <video
                    className={`d-block w-100 ${styles['video-slider']}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className={styles['video-placeholder']}>Cargando video...</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Validación de props
HomeSlider.propTypes = {
  data: PropTypes.arrayOf( // Asegurarse de que data sea un array
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired, // Validar tipo
      src: PropTypes.string.isRequired, // Validar fuente
    }).isRequired
  ).isRequired,
};

export default HomeSlider;