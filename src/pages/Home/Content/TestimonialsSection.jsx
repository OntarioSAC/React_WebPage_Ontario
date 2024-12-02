import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Importar PropTypes para validación
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./TestimonialsSection.module.css";

/**
 * Componente para la sección de testimonios.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.testimonialsData - Datos de los testimonios.
 * @param {string} props.testimonialsData.titleMain - Título principal.
 * @param {string} props.testimonialsData.titleHighlight - Título destacado.
 * @param {string} props.testimonialsData.subtitle - Subtítulo.
 * @param {string} props.testimonialsData.projectLabel - Etiqueta del proyecto.
 * @param {Array} props.testimonialsData.testimonials - Lista de testimonios.
 * @param {string} props.testimonialsData.testimonials[].quote - Cita del testimonio.
 * @param {string} props.testimonialsData.testimonials[].clientImage - Imagen del cliente.
 * @param {string} props.testimonialsData.testimonials[].clientNames - Nombres del cliente.
 * @param {string} props.testimonialsData.testimonials[].clientPartner - Socio del cliente.
 * @param {string} props.testimonialsData.testimonials[].projectName - Nombre del proyecto.
 * @returns {JSX.Element} - Elemento JSX que representa la sección de testimonios.
 */
function TestimonialsSection({ testimonialsData }) {
  const [titleMain, setTitleMain] = useState("");
  const [titleHighlight, setTitleHighlight] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [projectLabel, setProjectLabel] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    if (testimonialsData) {
      setTitleMain(testimonialsData.titleMain);
      setTitleHighlight(testimonialsData.titleHighlight);
      setSubtitle(testimonialsData.subtitle);
      setProjectLabel(testimonialsData.projectLabel);
      setTestimonials(testimonialsData.testimonials);
    }
  }, [testimonialsData]);

  return (
    <div className={styles["testimonials-container"]}>
      <div className="row">
        <div className="col-12">
          <h1 className={styles["custom-title"]}>
            {titleMain} <span>{titleHighlight}</span>
          </h1>
          <h4 className={styles["custom-sub-title"]}>
            {subtitle}
          </h4>
        </div>
        <div className="col-12">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={`d-flex justify-content-center my-5 ${styles.testimonialCol}`}>
                  <div className={styles["testimonial-card"]}>
                    <img src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/icons/icon-test.svg" loading="lazy" className={styles["decorative-image"]} alt="decoración" />
                    <div className={`card-body ${styles.body}`}>
                      <p className={styles["card-text"]}>{testimonial.quote}</p>
                    </div>
                    <div className={styles["custom-client"]}>
                      <div className={styles.image}>
                        <img
                          src={testimonial.clientImage}
                          loading="lazy"
                          className={`img-fluid d-block ${styles["card-image"]}`}
                          alt="Clientes"
                        />
                      </div>
                      <div>
                        <div className={styles.name}>
                          <p className={styles["client-name"]}>
                            {testimonial.clientNames} <br /> {testimonial.clientPartner}
                          </p>
                        </div>
                        <div className={styles.project}>
                          <p className={styles["project-name"]}>
                            <span className={styles["project-label"]}>
                              {projectLabel}
                            </span>
                            <span className={styles["project-name-text"]}>
                              {testimonial.projectName}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

// Validación de props
TestimonialsSection.propTypes = {
  testimonialsData: PropTypes.shape({
    titleMain: PropTypes.string,
    titleHighlight: PropTypes.string,
    subtitle: PropTypes.string,
    projectLabel: PropTypes.string,
    testimonials: PropTypes.arrayOf(PropTypes.shape({
      quote: PropTypes.string,
      clientImage: PropTypes.string,
      clientNames: PropTypes.string,
      clientPartner: PropTypes.string,
      projectName: PropTypes.string,
    })),
  }),
};

export default TestimonialsSection;
