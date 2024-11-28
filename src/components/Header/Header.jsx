import React, { useState, useMemo, useEffect, useRef } from "react";
import { useLocation, NavLink, Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Svg/Logo";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useTranslation } from "react-i18next";


/**
 * Componente Header: Maneja la navegación principal y el cambio de idioma.
 * @component
 */
function Header() {
  const { t, i18n } = useTranslation();
  const loc = useLocation();
  const navigate = useNavigate();
  const isAptRoute = loc.pathname.startsWith("/apartments/");
  const [lang, setLang] = useState(i18n.language || "es");
  const [headerLinks, setHeaderLinks] = useState([]);

  // Estados para los dropdowns y menú móvil
  const [isCondOpen, setCondOpen] = useState(false);
  const [isMultiOpen, setMultiOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    setHeaderLinks(t("links", { returnObjects: true }));
  }, [t]);

  // Estilo condicional para el header basado en la ruta actual
  const headerStyle = useMemo(() => {
    return loc.pathname === "/apartments/o2" || loc.pathname === "/apartments/killa"
      ? { "--primary-color": "#fff" }
      : { "--primary-color": "#cbf000" };
  }, [loc.pathname]);

  const width = useWindowWidth();
  const isWideScreen = width >= 992;

  useEffect(() => {
    if (!loc.pathname.startsWith("/projects/")) {
      closeMenus();
    }
  }, [loc.pathname]);

  // Cierra los menús al hacer clic fuera de ellos
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenus();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Funciones para manejar la apertura y cierre de menús
  const toggleCond = () => setCondOpen(prev => !prev && (setMultiOpen(false), true));
  const toggleMulti = () => setMultiOpen(prev => !prev && (setCondOpen(false), true));
  const closeMenus = () => {
    setCondOpen(false);
    setMultiOpen(false);
    setMenuOpen(false);
  };
  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    closeMenus();
  }, [lang]);


  /**
   * Cambia el idioma de la aplicación.
   * @function
   */
  const handleChangeLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };


  /**
   * Navega a una nueva ruta y cierra los menús.
   * @function
   * @param {string} path - La ruta a la que se debe navegar.
   */
  const handleNavClick = (path) => {
    closeMenus();
    navigate(path);
  };

  return (
    <nav className={styles["navbar-custom"]} style={headerStyle}>
      <div className={`container ${styles["custom-container"]}`}>
        <Link className={styles["navbar-brand"]} to="/" aria-label="Ir a la página principal">
        <Logo className={styles.logo} type={isAptRoute ? "logo1" : "default"} />
        </Link>
        <button
          className={styles["navbar-toggler"]}
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <img loading="lazy" alt="Menu Toggle" src="/img/icons/drop.svg" />
        </button>
        
        <div className={`${styles["navbar-collapse"]} ${isMenuOpen ? styles.show : ""}`}>
          <ul className={styles["navbar-nav"]} ref={dropdownRef}>
            {headerLinks.map((link, index) => (
              <li
                className={`${styles["nav-item"]} ${link.subItems ? styles.dropdown : ""}`}
                key={index}
              >
                <div className={styles["icon-container"]}>
                  <img
                    className={`${styles["circle2-icon"]} ${styles["mobile-icon"]}`}
                    loading="lazy"
                    alt={`${link.name} Icon`}
                    src={link.icon}
                  />
                </div>
                {link.subItems ? (
                  <>
                    <button
                      className={`${styles["nav-link"]} ${styles["dropdown-toggle"]}`}
                      onClick={
                        link.name === "Condominios" || link.name === "Condominiums"
                          ? toggleCond
                          : toggleMulti
                      }
                      aria-expanded={
                        link.name === "Condominios" || link.name === "Condominiums"
                          ? isCondOpen
                          : isMultiOpen
                      }
                    >
                      {link.name}
                      {/* Icono personalizado para dropdown */}
                      <span
                        className={`icon ico-ico09 ${styles["dropdown-icon"]} ${
                          (link.name === "Condominios" || link.name === "Condominiums"
                            ? isCondOpen
                            : isMultiOpen)
                            ? styles.open
                            : ""
                        }`}
                      ></span>
                    </button>
                    {!isWideScreen && (
                      <ul
                        className={`${styles["dropdown-menu-simple"]} ${
                          (link.name === "Condominios" || link.name === "Condominiums"
                            ? isCondOpen
                            : isMultiOpen)
                            ? styles.show
                            : ""
                        }`}
                      >
                        {link.subItems.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            
                            <NavLink
                              className={({ isActive }) =>
                                isActive
                                  ? `${styles["dropdown-item"]} ${styles["active-link"]}`
                                  : styles["dropdown-item"]
                              }
                              to={subLink.to}
                              onClick={() => handleNavClick(subLink.to)}
                            >
                              {subLink.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                    {isWideScreen &&
                      (link.name === "Condominios" || link.name === "Condominiums"
                        ? isCondOpen
                        : isMultiOpen) && (
                        <div
                          className={`${styles["dropdown-menu-cards"]} ${styles.show}`}
                        >
                          <div className={styles.row}>
                            {link.subItems.map((subLink, subIndex) => (
                              <NavLink
                                to={subLink.to}
                                className={styles.card}
                                onClick={closeMenus}
                                key={subIndex}
                              >
                                
                                <img
                                  src={subLink.image}
                                  alt={subLink.name}
                                  loading="lazy"
                                  className={styles["card-image"]}
                                />
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )}
                  </>
                ) : (
                  <Link className={styles["nav-link"]} to={link.to} onClick={closeMenus}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            {/* Switch de idioma */}
            <li className={`${styles["nav-item"]} ${styles["nav-item-toggle"]}`}>
              <div className={styles.toggleWrapper}>
                <input
                  type="checkbox"
                  id="toggle"
                  className={styles.toggleCheckbox}
                  checked={lang === "en"}
                  onChange={handleChangeLang}
                />
                <label htmlFor="toggle" className={styles.toggleContainer}>
                  <div className={styles.toggleTextWrapper}>
                    <span
                      className={`${styles.toggleText} ${
                        lang === "en" ? styles.activeText : ""
                      }`}
                    >
                      ES
                    </span>
                    <span
                      className={`${styles.toggleText} ${
                        lang === "es" ? styles.activeText : ""
                      }`}
                    >
                      EN
                    </span>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {(isCondOpen || isMultiOpen || isMenuOpen) && (
        <div className={styles.overlay} onClick={closeMenus}></div>
      )}
    </nav>
  );
}

export default Header;
