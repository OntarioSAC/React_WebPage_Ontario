import React, { useState, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import dataES from "../../../data/news-content-es.json";
import dataEN from "../../../data/news-content-en.json";
import styles from './CardStyle.module.css';

const Cards = ({ selectedTab }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [hoveredtext, setHoveredtext] = useState(null);

  // Selección de datos según idioma
  const data = i18n.language === "es" ? dataES : dataEN;

  // Memoriza las tarjetas filtradas
  const filteredCards = useMemo(() => {
    return (selectedTab === "Todo" || selectedTab === "All")
      ? data.cards
      : data.cards.filter((card) => card.etiqueta === selectedTab);
  }, [data, selectedTab]);

  return (
    <div className={styles.bodycard}>
      {filteredCards.map((card) => (
        <div
          key={card.id}
          className={styles.cards}
          onMouseEnter={() => setHovered(card.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className={styles.insidecards}>
            {/* Imagen */}
            <div className={styles.fatherimage}>
              <img
                src={card.image}
                alt={card.title}
                className={styles.image}
                style={{
                  transform: hovered === card.id ? 'scale(1.2)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  objectFit: 'cover',
                  transformOrigin: 'center',
                }}
              />
            </div>

            {/* Título y descripción */}
            <div className={styles.fathertitle}>
              <div className={styles.h1text}>
                <p className={styles.h1texttitle}>{card.title}</p>
              </div>
              <div className={styles.content_text}>
                <p className={styles.texto}>{card.CardsDescription}</p>
                <p className={styles.texto2}>{card.subdescripcion}</p>
              </div>
            </div>
          </div>

          {/* Botón */}
          <div
            className={styles.general_button}
            onClick={() => navigate(`/card/${card.id}`)}
          >
            <div
              className={styles.content_button}
              onMouseEnter={() => setHoveredtext(card.id)}
              onMouseLeave={() => setHoveredtext(null)}
            >
              <div
                className={styles.boton}
                style={{
                  backgroundColor: hoveredtext === card.id ? '#1C284C' : '#CBF000',
                  color: hoveredtext === card.id ? '#CBF000' : '#273243',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
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
                      fill: hoveredtext === card.id ? '#CBF000' : '#273243',
                      transition: 'fill 0.3s ease',
                    }}
                  >
                    <path d="M0.774162 12.6663L5.59297 7.84749L0.774161 3.02868C0.289797 2.54432 0.289797 1.76188 0.774161 1.27752C1.25853 0.793155 2.04096 0.793155 2.52533 1.27752L8.22592 6.97812C8.71029 7.46248 8.71029 8.24492 8.22592 8.72928L2.52533 14.4299C2.04096 14.9142 1.25853 14.9142 0.774162 14.4299C0.302217 13.9455 0.289797 13.1507 0.774162 12.6663Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
