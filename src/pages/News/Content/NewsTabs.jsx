import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import dataES from "../../../data/news-content-es.json";
import dataEN from "../../../data/news-content-en.json";
import styles from "./NewsTabsStyle.module.css";

const tabsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "2rem auto",
  marginTop: "-55px",
  backgroundColor: "var(--primary-color)",
  borderTopLeftRadius: "40px",
  borderBottomRightRadius: "40px",
  padding: "1rem 0rem",
  position: "absolute",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  width: "76%",
  zIndex: 90,
};

const tabStyle = {
  backgroundColor: "var(--primary-color)",
  color: "var(--secondary-color)",
  padding: "1rem",
  margin: "0 0.5rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: "15px",
  transition: "all 0.3s ease",
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: "var(--secondary-color)",
  color: "var(--primary-color)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const hoverTabStyle = {
  ...tabStyle,
  backgroundColor: "var(--secondary-hover-color)",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
};

const NewsTabs = ({ onTabChange }) => {
  const { i18n } = useTranslation(); // Hook para obtener el idioma actual
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Todo"); // Estado para la pestaña seleccionada

  // Seleccionar los datos correctos según el idioma
  const data = i18n.language === "es" ? dataES : dataEN;

  // Resetear la pestaña seleccionada a "Todo" cuando cambia el idioma
  useEffect(() => {
    const defaultTab = data.tabs[0].label; // "Todo" o equivalente
    setSelectedTab(defaultTab);
    onTabChange(defaultTab); // Informar al componente padre del cambio
  }, [i18n.language, data.tabs, onTabChange]);

  return (
    <>
      <div className={styles.fathergeneral}>
        <div className={styles.tabsContainerStyle} >
          <div className={styles.displayn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={styles.contentdespleg}>
              {selectedTab || "Seleccionar"}
            </div>
            <div
              className={styles.toggleButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span>
              {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                    <path d="M1.93903 0.552221L6.18763 4.80082L10.4362 0.552221C10.8633 0.125171 11.5531 0.125171 11.9802 0.552221C12.4072 0.979271 12.4072 1.66912 11.9802 2.09617L6.95413 7.12222C6.52708 7.54927 5.83723 7.54927 5.41018 7.12222L0.38413 2.09617C-0.0429197 1.66912 -0.0429197 0.979271 0.38413 0.552221C0.81118 0.136121 1.51198 0.125171 1.93903 0.552221Z" fill="#1C284C"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M11.1885 7.1221L6.93994 2.8735L2.69134 7.12209C2.26429 7.54914 1.57444 7.54914 1.14739 7.12209C0.720336 6.69504 0.720336 6.00519 1.14739 5.57814L6.17344 0.552097C6.60049 0.125047 7.29034 0.125047 7.71739 0.552097L12.7434 5.57815C13.1705 6.0052 13.1705 6.69505 12.7434 7.1221C12.3164 7.5382 11.6156 7.54915 11.1885 7.1221Z" fill="#1C284C"/>
                    </svg>
                  )}

              </span>
            </div>
          </div>

          <div className={styles.desktop}>
            {data.tabs.map((tab) => (
              <button
                key={tab.id}
                className={styles.buttonfilter}
                style={
                  selectedTab === tab.label
                    ? activeTabStyle
                    : hoveredTab === tab.id
                    ? hoverTabStyle
                    : tabStyle
                }
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={() => {
                  setSelectedTab(tab.label);
                  onTabChange(tab.label);
                  
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenedor del menú que se oculta/muestra solo en moviles */}
      <div className={styles.fathernav}>
        <div className={`${styles.menu} ${isMenuOpen ? styles.open : styles.closed}`}>
          {data.tabs.map((tab) => (
            <button
              key={tab.id}
              className={styles.buttonfilter}
              style={
                selectedTab === tab.label
                  ? activeTabStyle
                  : hoveredTab === tab.id
                  ? hoverTabStyle
                  : tabStyle
              }

              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => {
                setSelectedTab(tab.label);
                onTabChange(tab.label);
                setIsMenuOpen(false);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsTabs;
