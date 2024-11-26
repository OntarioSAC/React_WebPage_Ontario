import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import dataES from "../../../data/news-content-es.json";
import dataEN from "../../../data/news-content-en.json";
import styles from './NewsTabsStyle.module.css';
const tabsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "2rem auto",
  marginTop: "-55px",
  backgroundColor: "var(--primary-color)",
  borderTopLeftRadius: "40px",
  borderBottomRightRadius: "40px",
  padding: "1rem 0rem",
  position:'absolute',
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  width: "76%",
  zIndex: 90,
};

const tabStyle = {
  backgroundColor: "var(--primary-color)",
  color: "var(--secondary-color)",
  padding: "0.5rem 1.5rem",
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
  padding: "1.4rem",
};

const hoverTabStyle = {
  ...tabStyle,
  backgroundColor: "var(--secondary-hover-color)", // Cambia este color al que prefieras
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
};

const NewsTabs = ({ selectedTab, onTabChange }) => {
  const { i18n } = useTranslation(); // Hook para obtener el idioma actual
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Seleccionar los datos correctos según el idioma
  const data = i18n.language === "es" ? dataES : dataEN;

  return (
    <>
    <div className={styles.fathergeneral}>
      
      <div className={styles.generalbody} style={tabsContainerStyle}>
        <div
          className={styles.displayn}
          
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div>

          
          {selectedTab || (data.tabs.find((tab) => tab.active) || {}).label || "Seleccionar"}
        </div>
          <div 
            className={styles.toggleButton} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span>{isMenuOpen ? "▲" : "▼"}</span>
          </div>
          
        </div>

        <div 
          className={styles.desktop}
        >
            {data.tabs.map((tab) => (
              <button
                key={tab.id}
                className={styles.buttonfilter}
                style={
                  tab.active || selectedTab === tab.label
                    ? activeTabStyle
                    : hoveredTab === tab.id
                    ? hoverTabStyle
                    : tabStyle
                }
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={() => onTabChange(tab.label)} // Cambiar el filtro
              >
                {tab.label}
              </button>
            ))}
      </div>
      
      </div>
    </div>

      {/* Contenedor del menú que se oculta/muestra */}
      <div className={styles.fathernav}>

      
      <div 
          className={`${styles.menu} ${isMenuOpen ? styles.open : styles.closed}`}
        >
            {data.tabs.map((tab) => (
              <button
                key={tab.id}
                className={styles.buttonfilter}
                style={
                  tab.active || selectedTab === tab.label
                    ? activeTabStyle
                    : hoveredTab === tab.id
                    ? hoverTabStyle
                    : tabStyle
                }
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={() => onTabChange(tab.label)} // Cambiar el filtro
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

