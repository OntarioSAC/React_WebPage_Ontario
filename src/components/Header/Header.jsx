import React, { useState, useEffect, useRef, useMemo } from "react";
import { useLocation, NavLink, Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Svg/Logo";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useTranslation } from "react-i18next";
import Loader from "../../pages/Loader/Loader"; // Importa el componente Loader

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
  const [loading, setLoading] = useState(false); // Estado de carga

  // Estados para los dropdowns y menú móvil
  const [isCondOpen, setCondOpen] = useState(false);
  const [isMultiOpen, setMultiOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Cambia el idioma inicial según i18n
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  // Obtiene los links traducidos
  useEffect(() => {
    setHeaderLinks(t("links", { returnObjects: true }));
  }, [t]);

  // Detecta cambios en la ubicación para mostrar el Loader
  useEffect(() => {
    if (loading) return; // Evita múltiples loaders simultáneos

    // Muestra el loader al cambiar la ubicación
    setLoading(true);

    // Simula el tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false); // Oculta el loader
    }, 1000);

    return () => clearTimeout(timer); // Limpia el temporizador
  }, [loc.pathname]);

  const width = useWindowWidth();
  const isWideScreen = width >= 992;

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

  const headerStyle = useMemo(() => {
    return loc.pathname === "/apartments/o2" || loc.pathname === "/apartments/killa"
      ? { "--primary-color": "#fff" }
      : { "--primary-color": "#cbf000" };
  }, [loc.pathname]);

  // Funciones para manejar la apertura y cierre de menús
  const toggleCond = () => setCondOpen((prev) => !prev && (setMultiOpen(false), true));
  const toggleMulti = () => setMultiOpen((prev) => !prev && (setCondOpen(false), true));
  const closeMenus = () => {
    setCondOpen(false);
    setMultiOpen(false);
    setMenuOpen(false);
  };
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  /**
   * Cambia el idioma de la aplicación.
   * @function
   */
  const handleChangeLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <>
      {/* Si está cargando, mostramos el Loader */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 1.0)",
            zIndex: 9999,
          }}
        >
          <Loader />
        </div>
      )}

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
            <img loading="lazy" alt="Menu Toggle" src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/icons/drop.svg" />
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
                                onClick={closeMenus}
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
                    <Link
                      className={styles["nav-link"]}
                      to={link.to}
                      onClick={closeMenus}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
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
    </>
  );
}

export default Header;
