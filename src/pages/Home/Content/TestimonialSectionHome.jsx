import React, { useState, useRef } from 'react';
import dataES from "../../../data/home-content-es.json";  // Importamos los datos JSON
import styless from "./TestimonialSectionHome.module.css";  // Importamos el archivo CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSectionHome = () => {
  // Verificamos que el JSON tenga la estructura esperada
  const testimonios = dataES?.TestimonsHome?.Testimon;

  // Estado para controlar el slide activo
  const [activeIndex, setActiveIndex] = useState(0);

  // Referencia a Swiper para cambiar los slides programáticamente
  const swiperRef = useRef(null);

  // Maneja el cambio de slide
  const handleSlideChange = (swiper) => {
    const totalSlides = testimonios.length;
    // Asegura que el índice se mantenga en el rango de 0 a totalSlides-1
    const realIndex = swiper.realIndex % totalSlides;  
    setActiveIndex(realIndex);  // Actualiza el índice activo sin acumular
  };

  // Función para cambiar al slide seleccionado al presionar un botón
  const handleButtonClick = (index) => {
    const totalSlides = testimonios.length;
    setActiveIndex(index);  // Actualiza el índice en el estado
    if (swiperRef.current) {
      // Asegura que el swiper reciba el índice correcto dentro del rango
      swiperRef.current.swiper.slideTo(index % totalSlides);  
    }
  };

  return (
    <div className={styless.FatherTestimonials}>
      <div className={styless.FatherTestimonialsInts}>
        <div className={styless.Testimoabsolute}>
          <div className={styless.containertestiti}>
            <h1 className={styless.texttitletesti}>Conoce a Nuestra FAMILIA <strong>ONTARIO</strong></h1>
            <p className={styless.parrafotestimotitle}>Nuestros clientes comparten sus sueños hechos realidad en Ontario</p>
          </div>
        </div>

        <div className={styless.contentTestimonials}>
          <div className={styless.Testimslider}>
            <div className={styless.imageframe}>
              <img src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/slider-gallery/Frame283.svg" alt="Flecha izquierda" className={styless.arrowLeft} />
            </div>
            <div className={styless.imageframe2}>
              <img  src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/slider-gallery/fametop.svg" alt="Flecha izquierda" className={styless.arrowLeft} />
            </div>
            <div className={styless.testimonsliderint}>
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
                {testimonios.map((testimon) => (
                  <SwiperSlide key={testimon.id} className={styless.swiperSlide}>
                    <div className={styless.CardTestimon}>
                      <div key={testimon.id} className={styless.testimonCard}>
                        {/* Imagen */}
                        <div className={styless.imageWrapper}>
                          <img src={testimon.image} alt={testimon.Titular} className={styless.testimonImage} />
                        </div>

                        {/* Texto del testimonio */}
                        <div className={styless.textWrapper}>
                          <p className={styless.parrafo}>{testimon.parrafo}</p>
                          <div className={styless.infosliderFather}>
                            <div className={styless.infoslider}>
                                <h3 className={styless.titular}>{testimon.Titular}</h3>
                                <p className={styless.proyecto}>{testimon.Proyecto}</p>
                            </div>
                            
                          </div>
                        </div>

                        {/* Ícono */}
                        <div className={styless.iconWrapper}>
                          <img src={testimon.icon} alt="Icono" className={styless.testimonIcon} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Botones debajo del slider */}
            <div className={styless.buttonsWrapperFather}>
              <div className={styless.buttonsWrapper}>
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    className={`${styless.button} ${activeIndex === index ? styless.activeButton : ''}`}  // Cambia el estilo si es el botón activo
                    onClick={() => handleButtonClick(index)}  // Cambia al slide correspondiente al hacer clic
                  >
                    {/* SVG para el círculo */}
                    <svg className={styless.botonesfath} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      {/* Círculo interior */}
                      <circle
                        cx="20"
                        cy="20"
                        r="12"
                        fill={activeIndex === index ? "#CBF000" : "#1C284C"}  // Cambia el color si está activo
                      />
                      {/* Círculo exterior */}
                      <circle
                        cx="20"
                        cy="20"
                        r="19.5"
                        stroke={activeIndex === index ? "#CBF000" : "#1C284C"}  // Cambia el color si está activo
                      />
                    </svg>
                  </button>
                ))}
              </div> 
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSectionHome;
