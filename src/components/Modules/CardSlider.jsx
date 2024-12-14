import React, { useState, useMemo ,useRef } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import dataES from "../../data/news-content-es.json";
import dataEN from "../../data/news-content-en.json";
import stylesDefault from './CardSlider.module.CSS';
//import stylesAlternative from './CardStyle2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';


const Cards = ({ selectedTab , useAlternateStyles }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [hoveredtext, setHoveredtext] = useState(null);

  // Selección de datos según idioma
  const data = i18n.language === "es" ? dataES : dataEN;

//Carrousel
// Estado para controlar el slide activo
  const [activeIndex, setActiveIndex] = useState(0);
  // Referencia a Swiper para cambiar los slides programáticamente
    const swiperRef = useRef(null);
  // Maneja el cambio de slide
  const handleSlideChange = (swiper) => {
    const totalSlides = data.length;
    // Asegura que el índice se mantenga en el rango de 0 a totalSlides-1
    const realIndex = swiper.realIndex % totalSlides;  
    setActiveIndex(realIndex);  // Actualiza el índice activo sin acumular
  };
 // Función para cambiar al slide seleccionado al presionar un botón
 const handleButtonClick = (index) => {
    const totalSlides = data.length;
    setActiveIndex(index);  // Actualiza el índice en el estado
    if (swiperRef.current) {
      // Asegura que el swiper reciba el índice correcto dentro del rango
      swiperRef.current.swiper.slideTo(index % totalSlides);  
    }
  };




  // Memoriza las tarjetas filtradas
  const filteredCards = useMemo(() => {
    return (selectedTab === "Todo" || selectedTab === "All")
      ? data.cards
      : data.cards.filter((card) => card.etiqueta === selectedTab);
  }, [data, selectedTab]);
  // Usa el conjunto de estilos alternativos si la propiedad `useAlternateStyles` es verdadera
  //const styles = useAlternateStyles ? stylesAlternative : stylesDefault;
    const styles = useAlternateStyles ? stylesDefault : stylesDefault;
  return (
    <div className={styles.bodycard}>
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,  // Tiempo en milisegundos (3000 ms = 3 segundos)
                disableOnInteraction: false, // Evita que el autoplay se detenga cuando el usuario interactúe
            }}
            loop={true}
            modules={[Autoplay]}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
        >                

      {filteredCards.map((card) => (

        <SwiperSlide
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
                <p className={styles.h1texttitle}>{card.titlecards}</p>
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
                <div className={styles.botonsize}>{card.buttonText}</div>
                <div>
                  <svg
                    className={styles.arrow}
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

          {/* Botón */}         
           <div className={styles.etiquet}>
             <div className={styles.textetiquet}>
                {card.etiqueta}
              </div>         
          </div>          

        </SwiperSlide>
      ))}
      </Swiper> 
    </div>
  );
};

export default Cards;
