import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./ProjectSection.module.css";
import PropTypes from 'prop-types';

const ProjectSection = ({ sectionData }) => {
  const { title, titleBold, subtitle, navLinks, projects, conditionsLabel } =
    sectionData;
  const [selectedFilter, setSelectedFilter] = useState("PREVENTA");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [swiperKey, setSwiperKey] = useState(0);

  const navigate = useNavigate();

  const handleFilterClick = (e, filter) => {
    e.preventDefault();
    setSelectedFilter(filter);
    setSwiperKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    const filterTerm = selectedFilter === "PREVENTA" ? 1 : selectedFilter;

    if (filterTerm) {
      setFilteredProjects(
        projects.filter(
          (project) =>
            project.filterStatus === filterTerm || project.label === filterTerm
        )
      );
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedFilter, projects]);

  const handleCardClick = (url) => {
    navigate(url);
  };

  const getSwiperProps = () => {
    const baseProps = {
      spaceBetween: 10,
      slidesPerView: 1,
      breakpoints: {
        350: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      modules: [Autoplay],
    };

    const specificFilters = ["MEJÍA", "LA JOYA", "TUMBES"];
    if (specificFilters.includes(selectedFilter)) {
      return {
        ...baseProps,
        onInit: (swiper) => {
          if (window.innerWidth >= 768) {
            swiper.wrapperEl.style.justifyContent = "center";
          }
        },
        onResize: (swiper) => {
          if (window.innerWidth >= 768) {
            swiper.wrapperEl.style.justifyContent = "center";
          } else {
            swiper.wrapperEl.style.justifyContent = "";
          }
        }
      };
    }

    return baseProps;
  };

  return (
    <>
      <div className={`d-flex flex-column flex-xl-row position-relative gap-3`}>
        <div className={`${styles.customCardTitle}  d-block`}>
          <div className={styles.customMargin}>
            <h1 className={styles.fw600}>
              {title} <span className={styles.fw900}>{titleBold}</span>
            </h1>
            <h2 className={styles.fw600}>{subtitle}</h2>
          </div>
        </div>

        <div className={`${styles.nav2}`}>
          <nav className={`nav nav-pills flex-row ${styles.customNav}`}>
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`flex-sm-fill text-sm-center nav-link ${
                  styles["link"]
                } ${selectedFilter === link.label ? "active" : ""}`}
                href="#"
                onClick={(e) => handleFilterClick(e, link.label)}
              >
                {link.label === "PREVENTA" ? (
                  <>
                    <span className={`${styles.lightText}`}>PRE</span>
                    <span className={`${styles.boldText}`}>VENTA</span>
                  </>
                ) : (
                  link.label
                )}
              </a>
            ))}
          </nav>

          <div
            className={`${styles.customLine} d-none d-lg-none d-xl-block`}
          ></div>
        </div>
      </div>

      <div className={`${styles.cardOverlap}`}>
        <Swiper
          key={swiperKey}
          {...getSwiperProps()}
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index} className={styles["swiper-modify"]}>
              <div
                className="general_body d-flex justify-content-center"
                onClick={() => handleCardClick(project.url)}
              >
                <div className={`${styles.customCard} position-relative`}>
                  <img
                    className={styles.backgroundImage}
                    loading="lazy"
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

                    <div className="prueba1 d-flex align-items-center">
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
                        <img
                          className={styles.priceIcon}
                          loading="lazy"
                          alt="Tag Icon"
                          src={project.icon}
                        />
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
                            <span className={`${styles["f12-light"]} ms-1`}>
                              {project.status}
                            </span>
                            <span className={`${styles["f12-bold"]} ms-1`}>
                              {project.status2}
                            </span>
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

        <div className={styles.terms}>
          <p className={styles.conditions}>(*) {conditionsLabel}</p>
        </div>
        <hr className={styles.line} />
      </div>
    </>
  );
};

ProjectSection.propTypes = {
  sectionData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleBold: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    navLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        filterStatus: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        location: PropTypes.shape({
          city: PropTypes.string.isRequired,
          region: PropTypes.string.isRequired,
        }).isRequired,
        icon: PropTypes.string.isRequired,
        combineStatus: PropTypes.bool.isRequired,
        status: PropTypes.string.isRequired,
        status2: PropTypes.string.isRequired,
        detail1: PropTypes.string.isRequired,
        detail2: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        conector: PropTypes.string.isRequired,
        priceAlt: PropTypes.string.isRequired,
      })
    ).isRequired,
    conditionsLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectSection;