import React from "react";
import PropTypes from 'prop-types';
import { useLocation, Link } from "react-router-dom";
import Logo from "../Svg/Logo";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

/**
 * Componente Footer que muestra la información del pie de página.
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onContactClick - Función que se ejecuta al hacer clic en el botón de contacto.
 * @returns {JSX.Element} El componente Footer.
 */
const Footer = ({ onContactClick }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const isApartmentRoute = location.pathname.startsWith("/apartments/");

  /**
   * Determina el estilo del footer basado en la ruta actual.
   * 
   * @returns {Object} Un objeto con el estilo del footer.
   */
  const getFooterStyle = () => {
    return {
      "--primary-color": location.pathname.startsWith("/apartments")
        ? "#12b092"
        : "#cbf000",
    };
  };

  return (
    <section
      className={`bg-secondary bottom-0 end-0 ${styles.customContent}`}
      style={getFooterStyle()}
    >
      <footer className={`text-white ${styles.customFooter}`}>
        <div className="container">
          <div className="row">
            {/* Sección de contacto */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 pb-1">
              <Link className="navbar-brand d-block" to="/" aria-label="Ir a la página principal">
                <Logo className={styles.logo} type={isApartmentRoute ? "logo1" : "default"} />
              </Link>
              <button
                onClick={onContactClick}
                className={`${styles.contactButton} d-none d-sm-block`}
              >
                {t("contact.title")}
                <span className={`icon ico-arrow ${styles.arrow}`}></span>
              </button>
            </div>

            {/* Sección de Nosotros */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <p className={`${styles.textPrimary}`}>{t("about.title")}</p>
              <ul className="list-unstyled">
                {t("about.items", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index} className="d-flex align-items-center">
                      <span
                        className={`icon ico-circle ${styles.textPrimary} ${styles.circle}`}
                      ></span>
                      <Link to={item.route} className={`${styles.link} ms-2`}>
                        {" "}
                        {item.text}{" "}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Sección de Proyectos */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-none d-sm-block">
              <p className={`fw-bold ${styles.textPrimary}`}>
                {t("projects.title")}
              </p>
              {t("projects.categories", { returnObjects: true }).map(
                (category, catIndex) => (
                  <div key={catIndex}>
                    <div className="d-flex align-items-center mb-1">
                      <span
                        className={`icon ico-circle ${styles.textPrimary} ${styles.circle}`}
                      ></span>
                      <span className="fw-bold ms-2">{category.name}</span>
                    </div>
                    <ul className="list-unstyled ms-3">
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <Link to={item.route} className={styles.link}>
                            {" "}
                            {item.text}{" "}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>

            {/* Sección de Ubicación */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <p className={`fw-bold ${styles.textPrimary}`}>
                {t("conditions.title")}
              </p>
              <ul className="list-unstyled">
                {t("conditions.items", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index} className="d-flex  mb-1">
                      <span
                        className={`icon ico-circle ${styles.textPrimary} ${styles.ubication}`}
                      ></span>
                      {item.type === "phone" || item.type === "email" ? (
                        <a href={item.href} className={`${styles.link} ms-2`}>
                          {item.text}
                        </a>
                      ) : (
                        <span className="ms-2">{item.text}</span>
                      )}
                    </li>
                  )
                )}
              </ul>

              <div className="d-flex justify-content-start">
                {Array.isArray(t("socialMedia", { returnObjects: true })) &&
                  t("socialMedia", { returnObjects: true }).map((item) => (
                    <a
                      key={item.src}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                      aria-label={`Ir al perfil de ${item.alt}`}
                    >
                      <span
                        className={`icon ${item.src} ${styles.textPrimary}`}
                        role="img"
                        aria-label={item.alt}
                      />
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Texto y libro de reclamaciones */}
          <div className="mt-4 text-start">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-auto order-2 order-md-1 my-1">
                <span>{t("footerText")}</span>
              </div>
              <div className="col-12 col-md-auto order-1 order-md-2 ms-md-6">
                <Link
                  to={t("footerComplaintBook.route")}
                  className={styles.customLink}
                >
                  <span>
                    <span
                      className={`icon ico-book ${styles.textPrimary}`}
                    ></span>
                    {t("footerComplaintBook.text")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};

export default Footer;