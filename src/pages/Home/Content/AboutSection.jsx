import React from "react";
import PropTypes from "prop-types"; // Importar PropTypes para validación
import styles from "./AboutSection.module.css";

/**
 * Componente AboutSection
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.data - Datos para renderizar la sección
 * @param {string} props.data.flag - Bandera para pantallas grandes
 * @param {string} props.data.flag2 - Bandera para pantallas pequeñas
 * @param {string} props.data.title - Título de la sección
 * @param {string} props.data.titlhighlights - Resaltado del título
 * @param {string} props.data.introText - Texto de introducción
 * @param {Array} props.data.highlights - Palabras/frases a resaltar
 * @param {string} props.data.recognitionText - Texto de reconocimiento
 * @param {Object} props.data.certifications - Imágenes de certificaciones
 * @param {string} props.data.certifications.epa2022 - Certificación EPA 2022
 * @param {string} props.data.certifications.epa2023 - Certificación EPA 2023
 * @param {string} props.data.certifications.iso9001 - Certificación ISO 9001
 * @param {string} props.data.certifications.iso14001 - Certificación ISO 14001
 * @param {string} props.data.certifications.ccia - Certificación CCIA
 * @param {string} props.data.advisorImage - Imagen del asesor
 * @param {string} props.data.certificate - Texto del certificado
 * @param {string} props.data.partners - Texto de socios
 * @returns {JSX.Element} - Elemento JSX renderizado
 */
function AboutSection({ data }) {
  // Desestructuración de props
  const { flag, flag2, title, titlhighlights, introText, highlights, recognitionText, certifications, advisorImage, certificate, partners } = data;

  /**
   * Función para resaltar palabras/frases en el texto
   * @param {string} text - Texto original
   * @param {Array} highlights - Palabras/frases a resaltar
   * @returns {string} - Texto con palabras/frases resaltadas
   */
  const getHighlightedText = (text, highlights) => {
    highlights.forEach((highlight) => {
      if (highlight.strong) {
        const regex = new RegExp(`(${highlight.text})`, 'gi');
        text = text.replace(regex, `<strong>${highlight.text}</strong>`);
      }
    });
    return text;
  };

  const highlightedIntroText = getHighlightedText(introText, highlights);

  return (
    <section>
      <div className={`container ${styles.customBox}`}>
        <div className={`row ${styles.customContainer}`}>
          {/* Contenido principal para pantallas grandes */}
          <div className="col-12 col-lg-7 d-none d-lg-block">
            <div className="row">
              {/* Bandera y título */}
              <div className="col-12 text-start d-none d-lg-block">
                <div className={styles.customFlag}>{flag}</div>
              </div>
              <div className={`${styles.customTitle} col-12 text-start`}>
                <h1>{title}</h1>
                <span>{titlhighlights}</span>
              </div>
              <div className={`${styles.customDetail} col-12 mt-2`}>
                {/* Renderizar el texto con resaltado */}
                <p dangerouslySetInnerHTML={{ __html: highlightedIntroText }} />
                <hr />
                <p>{recognitionText}</p>
              </div>
              {/* Certificaciones */}
              <div className="d-flex align-items-center">
                <img className={styles.responsiveImg} loading="lazy" alt="Certificado 2022" src={certifications.epa2022} />
                <img className={styles.responsiveImg} loading="lazy" alt="Certificado 2023" src={certifications.epa2023} />
              </div>
              {/* Detalles de certificación y socios */}
              <div className="row">
                <div className="col-md-8">
                  <p className="fw-bold">{certificate}</p>
                  <div className="d-flex align-items-center">
                    <img className={styles.responsiveImg2} loading="lazy" alt="ISO 9001" src={certifications.iso9001} />
                    <img className={styles.responsiveImg2} loading="lazy" alt="ISO 14001" src={certifications.iso14001} />
                  </div>
                </div>
                <div className="col-md-4">
                  <p className="fw-bold">{partners}</p>
                  <img className={styles.responsiveImg3} loading="lazy" alt="CCIA" src={certifications.ccia} />
                </div>
              </div>
            </div>
          </div>
          {/* Imagen del asesor para pantallas grandes */}
          <div className={`col-12 col-lg-5 text-center mt-5 d-none d-md-block ${styles["backimage"]}`}>
            <img className={styles["img-fluid"]} loading="lazy" alt="Asesor" src={advisorImage} />
          </div>
          {/* Contenido para pantallas pequeñas */}
          <div className="col-12 d-block d-lg-none">
            <div className="row">
              <div className="col-12 text-center mt-3">
                <div className={styles.customFlag}>{flag2}</div>
              </div>
              <div className={`${styles.customTitle} col-12 text-center`}>
                <h1>{title} </h1> 
                <span> {titlhighlights}</span>
              </div>
              <div className={`${styles.customDetail} col-12 mt-2`}>
                {/* Renderizar el texto con resaltado */}
                <p dangerouslySetInnerHTML={{ __html: highlightedIntroText }} />
              </div>
              <div className="col-7">
                <div className={`${styles.customDetail}`}>
                <hr />
                <p>{recognitionText}</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className={styles.responsiveImg} loading="lazy" alt="Certificado 2022" src={certifications.epa2022} />
                  <img className={styles.responsiveImg} loading="lazy" alt="Certificado 2023" src={certifications.epa2023} />
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <p className={styles.customP}>{certificate}</p>
                    <div className="d-flex align-items-center">
                      <img className={styles.responsiveImg2} loading="lazy" alt="ISO 9001" src={certifications.iso9001} />
                      <img className={styles.responsiveImg2} loading="lazy" alt="ISO 14001" src={certifications.iso14001} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p className={styles.customP}>{partners}</p>
                    <img className={styles.responsiveImg3} loading="lazy" alt="CCIA" src={certifications.ccia} />
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="col-12 col-xxl-5 text-center mt-5">
                  <img className="img-fluid" loading="lazy" alt="Asesor" src={advisorImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Validación de props
AboutSection.propTypes = {
  data: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    flag2: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titlhighlights: PropTypes.string.isRequired,
    introText: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      strong: PropTypes.bool.isRequired,
    })).isRequired,
    recognitionText: PropTypes.string.isRequired,
    certifications: PropTypes.shape({
      epa2022: PropTypes.string.isRequired,
      epa2023: PropTypes.string.isRequired,
      iso9001: PropTypes.string.isRequired,
      iso14001: PropTypes.string.isRequired,
      ccia: PropTypes.string.isRequired,
    }).isRequired,
    advisorImage: PropTypes.string.isRequired,
    certificate: PropTypes.string.isRequired,
    partners: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutSection;