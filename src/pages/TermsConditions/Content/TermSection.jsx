import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TermSection.module.css";

import ArrowUp from "/img/icons/arrow-up.svg";
import ArrowDown from "/img/icons/arrow-down.svg";

/**
 * Componente TermSection
 * 
 * Este componente muestra una sección de términos con un sistema de acordeón.
 * Permite seleccionar diferentes secciones y expandir o colapsar contenido.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.data - Datos para renderizar el componente
 * @param {string} props.data.title - Título de la sección
 * @param {string} props.data.highlight - Texto destacado en el título
 * @param {Array} props.data.terms - Lista de términos con sus detalles
 * @param {string} props.data.terms[].key - Clave única del término
 * @param {string} props.data.terms[].title - Título del término
 * @param {string} props.data.terms[].icon - Icono asociado al término
 * @param {Array} props.data.terms[].accordions - Lista de acordeones dentro del término
 * @param {string} props.data.terms[].accordions[].key - Clave única del acordeón
 * @param {string} props.data.terms[].accordions[].title - Título del acordeón
 * @param {string} props.data.terms[].accordions[].content - Contenido del acordeón
 * 
 * @returns {JSX.Element} El componente TermSection
 */
const TermSection = ({ data, initialActiveSection, initialActiveSubsection ,initialActiveSubsection2}) => {
  
  const { title = "", highlight = "", terms = [] } = data || {};

  if (!terms.length) {
    return <div>No hay datos disponibles.</div>;
  }

  const [selectedSection, setSelectedSection] = useState(
    initialActiveSection || terms[0]?.key || ""
  );

  const [openAccordion, setOpenAccordion] = useState(
    initialActiveSubsection || null
  );

  

  // --- added
  const [openSubAccordion, setOpenSubAccordion] = useState(
    initialActiveSubsection2 || null
  
  );



  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  // --- added
  const toggleSubAccordion = (key) => {
    setOpenSubAccordion(openSubAccordion === key ? null : key);
  };


  // Renderiza cada sección de acuerdo a su tipo
  const renderSection = (section, index) => {
    switch (section.type) {
      case "title":
        return <h2 key={index} className={styles.mainTitle}>{section.text}</h2>;
      case "subtitle":
        return <h3 key={index} className={styles.subtitle}>{section.text}</h3>;
      case "sectionTitle":
        return <h4 key={index} className={styles.sectionTitle}>{section.text}</h4>;
      case "numbered":
        return <p key={index} className={styles.numbered}>{section.text}</p>;
      case "paragraph":
        return <p key={index} className={styles.paragraph}>{section.text}</p>;
      case "list":
        return <li key={index} className={styles.listItem}>{section.text}</li>;
      default:
        return <p key={index}>{section.text}</p>;
    }
  };


  return (
    <div className={styles.customContent}>

      <div className="row">
        <div className={`${styles["custom-title"]} col-12`}>
          <h1>
            {" "}
            {title} <span> {highlight}</span>{" "}
          </h1>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.sidebar}>
          {/* Itera sobre los términos destructurados */}
          {terms.map(({ key, title, icon }) => (
            <button key={key} className={`${styles.button} ${ selectedSection === key ? styles.buttonActive : "" }`} onClick={() => setSelectedSection(key)} >
              <span className={`${icon} ${styles["custom-icon"]}`}></span>
              <span className={styles.buttonTitle}>{title}</span>
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {terms.map(
            ({ key, accordions }) =>
              selectedSection === key && (
                <div key={key} className={styles.accordion}>
                  {accordions.map(({ key: accordionKey, title, content, subitems }) => (
                    <div
                      key={accordionKey}
                      className={`${styles.accordionItem} ${
                        openAccordion === accordionKey
                          ? styles.accordionActive
                          : ""
                      }`}
                    >
                      <div className={styles.accordionHeader}>
                        <h3 className={styles.accordionTitle}>{title}</h3>
                        <button
                          className={styles.accordionButton}
                          onClick={() => toggleAccordion(accordionKey)}
                        >
                          <span className={styles.circle}>
                            <img
                              src={
                                openAccordion === accordionKey
                                  ? ArrowUp
                                  : ArrowDown
                              }
                              alt="toggle"
                              loading="lazy"
                            />
                          </span>
                        </button>
                      </div>
                      {openAccordion === accordionKey && (
                        <>
                          <div className={styles.accordionDivider}></div>
                          {/* <div className={styles.accordionBody}>
                            {content}
                          </div> */}

                          <div className={styles.accordionBody}>
                            <p>{content}</p>
                            {/* Renderizar subitems si existen */}
                            {subitems && subitems.map(({ key, title, sections }) => (
                              <div
                                key={key}
                                className={`${styles.subAccordionItem} ${
                                  openSubAccordion === key ? styles.subAccordionActive : ""
                                }`}
                              >
                                
                                <div className={styles.subAccordionHeader}>
                                  <h4>{title}</h4>
                                  <button
                                    className={styles.subAccordionButton}
                                    onClick={() => toggleSubAccordion(key)}
                                  >
                                    <span className={styles.circle}>
                                      <img
                                        src={openSubAccordion === key ? ArrowUp : ArrowDown}
                                        alt="toggle subitem"
                                        loading="lazy"
                                      />
                                    </span>
                                  </button>

                                </div>
                                {openSubAccordion === key && (
                                  
                                  <div className={styles.subAccordionBody}>
                                    
                                    {sections.map((section, index) => renderSection(section, index))}
                                  
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                        </>
                      )}
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Alterna el estado de un acordeón específico.
 * 
 * @param {string} key - Clave del acordeón a alternar
 */
const toggleAccordion = (key) => {
  setOpenAccordion(openAccordion === key ? null : key);
};

// Validación de propiedades usando PropTypes
TermSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    highlight: PropTypes.string,
    terms: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        accordions: PropTypes.arrayOf(
          PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default TermSection;
