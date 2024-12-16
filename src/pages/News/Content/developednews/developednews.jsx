import React from 'react';

import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importa el hook de traducción

import styles from "./developed.module.css";
import Sidebar from '../Sidebar';
import FormSection from '../../../Home/Content/FormSection';
import Banner from '../../../../components/Banner/Banner';
import dataES from "../../../../data/news-content-es.json";
import dataEN from "../../../../data/news-content-en.json";
import WhatsappButton from "../../../../components/Modules/WhatsappButton";
import WhatsappButton2 from "../../../../components/Modules/WhatsappButton2";
function developednews( ) {
  const { t } = useTranslation(); // Hook para obtener las traducciones
  const formSection = t('formSection', { returnObjects: true });
  const { i18n } = useTranslation(); // Hook para obtener el idioma actual
  // Seleccionar los datos correctos según el idioma
  const data = i18n.language === "es" ? dataES : dataEN;
  const { id } = useParams();
  const navigate = useNavigate(); // Hook para navegar entre rutas
  const card = data.cards.find((card) => card.id === parseInt(id)); // Busca la tarjeta por ID

  if (!card) {
    // Si no se encuentra una tarjeta con el ID, muestra un mensaje de error
    return <div>Card not found</div>;
  }

  const customContent = {
    position: 'relative',
    padding: 0,
    margin: 0,
  }

  return (
    <div>
      <div className={styles.generalbody}>
        <div className={styles.information}>
          {/* Botón para regresar */}
          <div onClick={() => navigate(-1)} className={styles.buttomback}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none">
              <path d="M9.5993 3.15099L3.9893 8.76098L9.5993 14.371C10.1632 14.9349 10.1632 15.8458 9.5993 16.4097C9.03541 16.9736 8.12451 16.9736 7.56061 16.4097L0.924049 9.77309C0.360158 9.2092 0.360158 8.2983 0.924049 7.73441L7.56062 1.09785C8.12451 0.533954 9.03541 0.533954 9.5993 1.09785C10.1487 1.66174 10.1632 2.5871 9.5993 3.15099Z" fill="#1C284C" />
            </svg>
            <div className={styles.textback}>{card.ButtomNotice}</div>
          </div>
          
          {/* Etiqueta */}
          {card.etiqueta && (
            <div>
              <span className={styles.etiquetas}>{card.etiqueta}</span>
            </div>
          )}

          {/* Título */}
          {card.title && (
            <h1 className={styles.titleinf}>{card.title}</h1>
          )}

          {/* Subdescripción */}
          {card.subdescripcion && (
            <div className={styles.descripstart}>{card.subdescripcion}</div>
          )}

          {/* Fecha */}
          {card.fecha && (
            <span className={styles.fechact}>{card.fecha}</span>
          )}

          {/* Imagen */}
          {card.image && (
            <div className={styles.imageinf}>
              <img src={card.image} alt={card.title} className={styles.imageinf} />
            </div>
          )}

          {/* Descripción de la imagen */}
          {(card.fecha || card.imagedescrip) && (
            <div className={styles.fechaimgedescrip}>
              <div>{`${card.fecha}  ${card.imagedescrip}`}</div>
            </div>
          )}


          {/* Descripciones y párrafos */}
          {card.description && <div className={styles.descrips}>{card.description}</div>}
          {card.tituMYKONOS && <div className={styles.titledown}>{card.tituMYKONOS}</div>}
          {card.parrafo1 && <div className={styles.descrips}>{card.parrafo1}</div>}
          {card.title1 && <h2 className={styles.titledown}>{card.title1}</h2>}
          {/* Lista 0 */}
          {card.lista0 && card.lista0.length > 0 && (
            <ul className={styles.listp}>
              {card.lista0.map((item, index) => (
                <li key={index}>•  {item}</li>
              ))}
            </ul>
          )}
          {card.parrafoFia && <div className={styles.descrips}>{card.parrafoFia}</div>}
          {/* Lista 1 */}
          {card.lista1 && card.lista1.length > 0 && (
            <ul className={styles.listp}>
              {card.lista1.map((item, index) => (
                <li key={index}>•  {item}</li>
              ))}
            </ul>
          )}

          {/* Imagen 2 */}
          {card.image2 && (
            <div>
              <img src={card.image2} alt={card.title} className={styles.imageinf2} />
            </div>
          )}

          {/* Título 2 y párrafo */}
          {card.title2 && <h2 className={styles.titledown}>{card.title2}</h2>}
          {card.parrafo2 && <div className={styles.descrips}>{card.parrafo2}</div>}

          {/* Título 3 y lista 2 */}
          {card.title3 && <h2 className={styles.titledown}>{card.title3}</h2>}
          {card.lista2 && card.lista2.length > 0 && (
            <ul className={styles.listp}>
              {card.lista2.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          )}

          {card.parrafo3 && <div className={styles.descrips}>{card.parrafo3}</div>}
          {card.parrafo4 && <div className={styles.descrips}>{card.parrafo4}</div>}

          {/* Fin */}
          {card.end && (
            <div className={styles.end}>{card.end}</div>
          )}

          <div className={styles.contentshared}>
            <div className={styles.shared}>
              {card.Social}
            </div>
            <div className={styles.iconred}>

              <div>
                <a href="https://www.facebook.com/inmobiliariaontario" target="_blank" rel="noopener noreferrer">
                    <img className={styles.iconsocialdev} src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/news/icons/facebook.svg" alt="Facebook Icon" />
                </a>
              </div>
                            
              <div>
                <a href="https://www.instagram.com/ontarioinmobiliaria/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.iconsocialdev} src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/news/icons/instagram.svg" alt="Instagram Icon" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/ontarioinmobiliaria/" target="_blank" rel="noopener noreferrer">
                   
                    <WhatsappButton2/>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/ontario-inmobiliaria" target="_blank" rel="noopener noreferrer">
                  <img className={styles.iconsocialdev} src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/news/icons/linkedin.svg" alt="Facebook Icon" />
                </a>
              </div>

            </div>
          </div>
        </div>

        <Sidebar />
      </div>

      <div>
        <Banner />
      </div>

      <div>
        {/* Sección de formulario */}
        <FormSection data={formSection} />
      </div>

      {/* Contenedor para el botón de WhatsApp */}
      <div className="container g-0">
        <div style={customContent}>
          <div className="whatsapp">
            <WhatsappButton />
          </div>
        </div>
      </div>

    </div>
  );
};


export default developednews;
