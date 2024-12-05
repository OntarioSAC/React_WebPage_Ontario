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
      className={`bg-secondary end-0 ${styles.customContent}`}
      style={getFooterStyle()}
    >
      <footer className={`text-white ${styles.customFooter}`}>
        <div className={`container ${styles.furia1}`}>
          <div className={`${styles.content_int}`}>
            
            {/* Sección de contacto */}
            <div className={` ${styles.leftr}`} >
              <div className={styles.logooo}  aria-label="Ir a la página principal">
                
                <img  className={styles.logomobile} src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/logo/OntarioPos.svg" alt=""
                 />
              </div>
              <button
                onClick={onContactClick}
                className={`${styles.contactButton} d-none d-sm-block`}
              >
                {t("contact.title")}
                <span className={`icon ico-arrow ${styles.arrow}`}></span>
              </button>

              {/* Sección de Nosotros */}
            <div className={styles.anexadoone}>
              <p className={styles.titlefooterisz}>{t("about.title")}</p>
                <ul className={`list-unstyled ${styles.footernot}`}>
                  {t("about.items", { returnObjects: true }).map(
                    (item, index) => (
                      <li onClick={item.route} key={index} className={styles.listafooter}>
                        <span
                          className={`icon ico-circle ${styles.textPrimary} ${styles.circle}`}
                        ></span>
                        <Link to={item.route} className={`${styles.link2} ms-2`}>
                          {" "}
                          {item.text}{" "}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
            </div>


            <div className={styles.mobilsocial}>
              {Array.isArray(t("socialMedia", { returnObjects: true })) &&
                  t("socialMedia", { returnObjects: true }).map((item) => (
                    <a
                      key={item.link} // Cambié el key para que sea único según la URL
                      href={item.link}
                      target="_blank" // Abre el enlace en una nueva pestaña
                      rel="noopener noreferrer" // Mejora de seguridad
                      className="me-2"
                      aria-label={`Ir al perfil de ${item.alt}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className={`${styles.iconfooterdesc}`} // Usa tu clase de estilos para el ícono
                        role="img"
                      />
                    </a>
                  ))}
              </div>

            </div>

            

            {/* Sección de Proyectos */}
            <div className={` ${styles.project}`}>

              <p className={`fw-bold ${styles.textPrimarytiel}`}>
                {t("projects.title")}
              </p>

                <div className={styles.projectint}>

                  <div className={styles.leftproject}>
                    <p className={`fw-bold ${styles.textPrimary2}`}>
                    {t("projects.subtitle1")}
                    </p>

                    {t("projects.categories", { returnObjects: true }).map(
                      
                      (category, catIndex) => (
                        
                        <div className={styles.lineh} key={catIndex}>
                          
                          <div className="d-flex align-items-center mb-1">
                            <span
                              className={`icon ico-circle ${styles.textPrimary}  ${styles.circle}`}
                            ></span>
                            <span 
                            className={`ms-2 ${styles.textPrimarytitle} `}
                            >
                              {category.name}
                              
                            </span>
                          </div>
                          
                          <ul 
                          className={`list-unstyled ms-3 ${styles.textPrimary} `}
                          >
                            {category.items.map((item, index) => (
                              <li key={index}>
                                <div onClick={item.route} className={styles.link}>
                                  {" "}
                                  <Link className={styles.enlacefooter} to={item.route}>{item.text}</Link>{" "}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                </div>

                <div className={styles.leftproject}>
                <p className={`fw-bold ${styles.textPrimary2}`}>
                  {t("projects.subtitle2")}
                  </p>

                  {t("projects.categories2", { returnObjects: true }).map(
                    
                    (category, catIndex) => (
                      
                      <div key={catIndex}>
                        <div className="d-flex align-items-center mb-1">
                          <span
                            className={`icon ico-circle ${styles.textPrimary} ${styles.circle}`}
                          ></span>
                          <span className={`ms-2 ${styles.textPrimarytitle} `}>
                            
                            {category.name}</span>
                        </div>
                        <ul className="list-unstyled ms-3">
                          {category.items.map((item, index) => (
                            <li key={index}>
                              <div className={styles.link}>
                                {" "}
                                <Link className={styles.enlacefooter}  to={item.route}>{item.text}</Link>{" "}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>


            </div>



            {/* Sección de Ubicación */}
            <div className={styles.ubicationfooter}>
              <p className={`${styles.textPrimary} ${styles.mobilubi}`}>
                {t("conditions.title")}
              </p>

              <p className={styles.sede}>
                {t("conditions.subtitle1")}
              </p>
              
              <ul className={` list-unstyled ${styles.contentlisgeneral}`} >
                {t("conditions.items", { returnObjects: true }).map(
                  (item, index) => (
                    <div className={styles.contentlist} key={index}>
                        <li key={index} className={` mb-0 ${styles.liststilo}`}>
                          <span
                            className={`icon ico-circle ${styles.textPrimary} ${styles.ubication}`}
                          ></span>

                          {item.type === "phone" || item.type === "email" ? (
                            <a href={item.href} className={`${styles.liststilo2} ms-2 ${styles.textubimobile}`}>
                              {item.address}
                            </a>
                          ) : (
                            <span className="ms-2">{item.address}</span>
                          )}
                          
                        </li>

                      
                            <p className={` ${styles.liststilo2}`}>{item.text}</p>
                      
                        
                    </div>
                    
                      
                  )
                )}
              </ul>


              
            </div>


          </div>




          {/* Texto y libro de reclamaciones */}
          <div className={styles.fotterletralibro}>

          
          <div  className={`mt-4 text-start  ${styles.contentsosialdescktop}`} >
            <div className={styles.fatherfooter}>
            <div 
              className={`col-12 col-md-auto order-1 order-md-2 ms-md-6  ${styles.reclam}`}>
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
              
              <div 
              className={`${styles.textreer}`}
              >
                <span>{t("footerText")}</span>
                
              </div>
              
              
              

            </div>
            
            <div className={styles.socialfooter}>
              {Array.isArray(t("socialMedia", { returnObjects: true })) &&
                t("socialMedia", { returnObjects: true }).map((item) => (
                  <a
                    key={item.link} // Cambié el key para que sea único según la URL
                    href={item.link}
                    target="_blank" // Abre el enlace en una nueva pestaña
                    rel="noopener noreferrer" // Mejora de seguridad
                    className="me-2"
                    aria-label={`Ir al perfil de ${item.alt}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`${styles.iconfooterdesc}`} // Usa tu clase de estilos para el ícono
                      role="img"
                    />
                  </a>
                ))}
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