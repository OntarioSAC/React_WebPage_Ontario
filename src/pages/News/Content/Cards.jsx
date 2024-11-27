// import { bottom, right } from '@popperjs/core';
// import { Button } from 'bootstrap';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import dataES from "../../../data/news-content-es.json";
import dataEN from "../../../data/news-content-en.json";
import styles from './CardStyle.module.css';
import React , {useState} from 'react';

const Cards = ({ selectedTab }) => {
  const { i18n } = useTranslation(); // Hook para obtener el idioma actual
  // Seleccionar los datos correctos según el idioma
  const data = i18n.language === "es" ? dataES : dataEN;
  const [hovered, setHovered] = useState(false);
  const [hoveredtext, setHoveredtext] = useState(false);
  const navigate = useNavigate();


  const filteredCards = (selectedTab === "Todo" || selectedTab === "All")
  ? data.cards // Mostrar todo si es "Todo" o "All"
  : data.cards.filter((card) => card.etiqueta === selectedTab); // Filtrar por etiqueta
  

  return (

    <div className={styles.bodycard} >
      {filteredCards.map((card) => (
        <div
          key={card.id}
          className={styles.cards} 
          onMouseEnter={() => setHovered(card.id)} // Al pasar el mouse, establece el id de la tarjeta
          onMouseLeave={() => setHovered(null)} // Al quitar el mouse, borra el id
          onClick={() => navigate(`/card/${card.id}`)}

        >
          <div className={styles.insidecards}>
            {/* Imagen */}
            <div className={styles.fatherimage}>
              <img
                src={card.image}
                alt={card.title}
                className={styles.image}
                style={{
                  transform: hovered === card.id ? 'scale(1.2)' : 'scale(1)',  // Solo hace zoom si el id coincide
                  transition: 'transform 0.3s ease',  // Suaviza la animación
                  objectFit: 'cover',  // Asegura que la imagen se ajuste bien
                  transformOrigin: 'center',  // Centra el zoom
                }}
              />
            </div>

            {/* Título */}
            <div className={styles.fathertitle}>

              <div className={styles.h1text}>
                <p  className={styles.h1texttitle}>{card.title}</p>
              </div>

              {/* Descripción */}
              <div className={styles.content_text}>
                <p className={styles.texto}>{card.CardsDescription}</p>
                <p className={styles.texto2}>{card.subdescripcion}</p>
              </div>
            </div>

          </div>

          {/* Botón */}
          <div className={styles.general_button}
          >
            <div className={styles.content_button}>
              <div className={styles.boton} style={{
                backgroundColor: hoveredtext === card.id ? '#1C284C' : '#CBF000', // Cambia el fondo a azul cuando el mouse pasa
                color: hoveredtext === card.id ? '#CBF000' : '#273243', // Cambia el color del texto a blanco
                transition: 'background-color 0.3s ease, color 0.3s ease', // Suaviza la transición de color

              }}
                onMouseEnter={() => setHoveredtext(card.id)} // Al pasar el mouse, establece el id de la tarjeta
                onMouseLeave={() => setHoveredtext(null)} // Al quitar el mouse, borra el id
              >

                <div>{card.buttonText}</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    style={{
                      fill: hoveredtext === card.id ? '#CBF000' : '#273243', // Cambia el color del SVG a blanco cuando pasa el mouse
                      transition: 'fill 0.3s ease', // Suaviza el cambio de color del SVG
                    }}
                  >
                    <path d="M0.774162 12.6663L5.59297 7.84749L0.774161 3.02868C0.289797 2.54432 0.289797 1.76188 0.774161 1.27752C1.25853 0.793155 2.04096 0.793155 2.52533 1.27752L8.22592 6.97812C8.71029 7.46248 8.71029 8.24492 8.22592 8.72928L2.52533 14.4299C2.04096 14.9142 1.25853 14.9142 0.774162 14.4299C0.302217 13.9455 0.289797 13.1507 0.774162 12.6663Z" />
                  </svg>
                </div>

              </div>
            </div>
          </div>


          <div >

          </div>

        </div>
      ))}

    </div>






  );
};

export default Cards;


