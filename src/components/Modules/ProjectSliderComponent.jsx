import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"; // Importar useNavigate para la navegación
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import styles from "./ProjectSliderComponent.module.css";

// Componente para mostrar un slider de proyectos
const ProjectSliderComponent = ({ data }) => {
  const { projects } = data;
  const navigate = useNavigate(); // Crear una instancia de useNavigate

  // Redirige al usuario a la URL del proyecto seleccionado
  const handleCardClick = (url) => {
    if (url) {
      navigate(url); // Redirigir a la ruta especificada
    }
  };

  return (
    <div className={`${styles.cardOverlap}`}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}

        breakpoints={{
          350: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id || index}>
            <div
              className="d-flex justify-content-center"
              onClick={() => handleCardClick(project.url)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleCardClick(project.url)}
            >
              <div className={`${styles.customCard} position-relative`}>
                <img
                loading="lazy"
                  className={styles.backgroundImage}
                  src={project.image}
                  alt={project.title}
                />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div
                  className={`${styles.descriptionCard} position-absolute d-flex justify-content-center d-none d-lg-none d-xl-block`}
                >
                  <div className="d-flex align-items-center">
                    <img
                      className={styles.cardIcon1}
                      loading="lazy"
                      alt="Area Icon"
                      src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/icons/area.svg"
                    />
                    <span className={styles.f12}>
                      {project.from}
                      <strong className={styles.f15}>
                        {project.area}
                      </strong>{" "}
                      <strong className={styles.f12}>
                        m<sup>2</sup>
                      </strong>
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      className={styles.cardIcon2}
                      loading="lazy"
                      alt="Location Icon"
                      src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/icons/location.svg"
                    />
                    <div className="d-flex flex-column">
                      <span className={styles.f12}>
                        {project.location.city}{" "}
                      </span>
                      <span className={styles.f10}>
                        {project.location.region}{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.priceCard} text-center align-self-end position-absolute end-0`}
                >
                  <div className="d-inline-block">
                    <div className={styles.detailTitle}>
                      <img className={styles.priceIcon} loading="lazy" alt="Tag Icon" src={project.icon} />
                      {project.combineStatus ? (
                        <>
                          <span className={`${styles["f12-light"]} ms-1`}>
                            {project.status}
                          </span>
                          <span className={`${styles["f12-bold"]}`}>
                            {project.status2}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className={`${styles["f12-light"]} ms-1`}> {project.status} </span>
                          <span className={`${styles["f12-bold"]} ms-1`}> {project.status2} </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={styles.cardContainer}>
                    <div className={styles.textLine}>
                      <span className="g-0">
                        {project.detail1} {project.detail2}
                      </span>
                    </div>
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>{project.price}</span>
                      <div className={styles.priceFooter}>
                        <span className={styles.conector}>
                          {project.conector}{" "}
                        </span>
                        {project.priceAlt}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Validación de props
ProjectSliderComponent.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      url: PropTypes.string,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      from: PropTypes.string,
      area: PropTypes.string,
      location: PropTypes.shape({
        city: PropTypes.string,
        region: PropTypes.string,
      }),
      icon: PropTypes.string,
      status: PropTypes.string,
      status2: PropTypes.string,
      combineStatus: PropTypes.bool,
      detail1: PropTypes.string,
      detail2: PropTypes.string,
      price: PropTypes.string,
      conector: PropTypes.string,
      priceAlt: PropTypes.string,
    })).isRequired,
  }).isRequired,
};

export default ProjectSliderComponent;
