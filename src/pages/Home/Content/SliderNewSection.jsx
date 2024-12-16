import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import dataES from "../../../data/home-content-es.json";  // Importamos los datos JSON
import dataEN from "../../../data/home-content-en.json";
import styless from "./SliderNewSection.module.css";  // Importamos el archivo CSS

const SliderNewSection = () => {
   const { i18n } = useTranslation();
  // Estado para manejar los datos del slider
  const [sliderData, setSliderData] = useState(null);
  const [currentSlider, setCurrentSlider] = useState(0);  // Inicia con el slider izquierdo (0)
  const [activeButton, setActiveButton] = useState("left");  // Inicia con el botón izquierdo activo
  const [isFlipped, setIsFlipped] = useState(false);
  const [leftColor, setLeftColor] = useState("lightpurple");
  const [rightColor, setRightColor] = useState("blue");
  const [activeLeft, setActiveLeft] = useState(true); // El botón izquierdo está activo al inicio
  const [activeRight, setActiveRight] = useState(false); // El botón derecho está inactivo al inicio

  const intervalRef = useRef(null); // Referencia para controlar el intervalo
  // Estado para manejar la animación
  const [animationKey, setAnimationKey] = useState(0);

  // Nueva función de animación de números
  const animateNumber = (element, start, end, duration) => {
    let startTime = null;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = `+ ${value}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    // Asumiendo que tienes una variable que define el idioma, por ejemplo, `language` que puede ser "es" o "en"
    const language = "es"; // O lo que sea que estés usando para definir el idioma
  
    if (language === "es" && dataES.slidernew) {
      setSliderData(dataES.slidernew.slider);
    } else if (language === "en" && dataEN.slidernew) {
      setSliderData(dataEN.slidernew.slider);
    }
  }, []);

  // Efecto para animar los números cuando cambia el slider
  useEffect(() => {
    // Espera un poco para asegurar que los elementos estén renderizados
    const timer = setTimeout(() => {
      const numberElements = document.querySelectorAll(`.${styless.animatedNumber}`);
      numberElements.forEach((element) => {
        const fullText = element.textContent.trim();
        const numberValue = parseInt(fullText.replace('+', '').trim());
        
        if (!isNaN(numberValue)) {
          animateNumber(element, 0, numberValue, 2000);
        }
      });
    }, 10);

    return () => clearTimeout(timer);
  }, [currentSlider, animationKey]);

  const startAutoSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlider((prev) => {
        const newSlider = prev === 0 ? 1 : 0;
        setActiveButton(newSlider === 0 ? "left" : "right");
        setActiveLeft(newSlider === 0); // Activar el botón izquierdo si estamos en el slider izquierdo
        setActiveRight(newSlider === 1); // Activar el botón derecho si estamos en el slider derecho
        setIsFlipped((prevFlipped) => !prevFlipped);
         // Reiniciar la animación
         setAnimationKey(prevKey => prevKey + 1);
        return newSlider;
      });

      setLeftColor(prevLeftColor => (prevLeftColor === "lightpurple" ? "green" : "lightpurple"));
      setRightColor(prevRightColor => (prevRightColor === "blue" ? "purple" : "blue"));
    }, 3000);
  };

  const changeSlider = (direction) => {
    // Cambiar solo si el slider no está en el estado deseado
    if (direction === "left" && currentSlider !== 0) {
      setCurrentSlider(0);
      setActiveButton("left");
      setActiveLeft(true); // Activar el botón izquierdo
      setActiveRight(false); // Desactivar el botón derecho
      setLeftColor(prevLeftColor => (prevLeftColor === "lightpurple" ? "green" : "lightpurple"));
      setRightColor(prevRightColor => (prevRightColor === "blue" ? "purple" : "blue"));
      // Reiniciar la animación
      setAnimationKey(prevKey => prevKey + 1);
    } else if (direction === "right" && currentSlider !== 1) {
      setCurrentSlider(1);
      setActiveButton("right");
      setActiveLeft(false); // Desactivar el botón izquierdo
      setActiveRight(true); // Activar el botón derecho
      setLeftColor(prevLeftColor => (prevLeftColor === "lightpurple" ? "green" : "lightpurple"));
      setRightColor(prevRightColor => (prevRightColor === "blue" ? "purple" : "blue"));
      // Reiniciar la animación
      setAnimationKey(prevKey => prevKey + 1);
    }

    // Detener y reiniciar el intervalo cuando se presiona un botón
    clearInterval(intervalRef.current); // Detener el intervalo actual
    startAutoSlider(); // Reiniciar el intervalo
  };

  useEffect(() => {
    startAutoSlider(); // Iniciar el intervalo al cargar el componente

    return () => clearInterval(intervalRef.current); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  if (!sliderData) return null;

  const currentData = sliderData[currentSlider];

  return (
    <div className={styless.container}>
      <div className={styless.containerslider}>

        {/* Contenido izquierdo */}
        <div className={styless.leftslider}>
          <div className={leftColor === "lightpurple" ? styless.leftDivLightPurple : styless.leftDivGreen}>
          <div className={`${styless.containerlefti} ${styless.bajandoElementos} `}key={animationKey}>
              <div className={leftColor === "lightpurple" ? styless.acercn : styless.acercn2}>
                <h2 className={styless.movilsize}>{currentData.titleone}</h2>
              </div>
              <div className={styless.titlesliderg}>
                <h3 className={leftColor === "lightpurple" ? styless.title1 : styless.title11}>{currentData.title1}</h3>
                <h4 className={leftColor === "lightpurple" ? styless.title2 : styless.title22}>{currentData.title2}</h4>
              </div>
              <div className={styless.textsliderg}>
                <p className={leftColor === "lightpurple" ? styless.text1 : styless.text11}>
                  {currentData.text1} <strong className={leftColor === "lightpurple" ? styless.text1color : styless.text1color2}>{currentData.textbold}</strong> {currentData.text2}
                </p>
              </div>
              <div className={styless.linetext}>
                <svg className={leftColor === "lightpurple" ? styless.linetext1 : styless.linetext12} xmlns="http://www.w3.org/2000/svg" width="320" height="3" viewBox="0 0 316 2" fill="none">
                  <path d="M0 1H316" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div className={styless.textsliderg2}>
                <p className={leftColor === "lightpurple" ? styless.linetext11 : styless.linetext12}>{currentData.text3}</p>
              </div>

              <div className={styless.contentlogo}>
                <div className={styless.imagenesnewslider}>
                
                  <span className={leftColor === "lightpurple" ? styless.spamlogo : styless.spamlogo2}>{currentData.text3logo}</span>
                  {currentData.logo1.map((logo, index) => (
                    <div key={index}> {/* Usa un contenedor que tenga la key */}
                      
                      <img className={styless.icoimage} src={logo.image} alt={`Logo ${logo.id}`} />
                    </div>
                  ))}
                </div>

                <div className={styless.imagenesnewslider}>
                  
                  <span className={leftColor === "lightpurple" ? styless.spamlogo : styless.spamlogo2}>{currentData.titlelogo}</span>
                  {currentData.logo2.map((logo, index) => (
                    <div key={index}> {/* Usa un contenedor que tenga la key */}
                      
                      <img className={styless.icoimage} src={logo.image} alt={`Logo ${logo.id}`} />
                    </div>
                  ))}
                </div>
              </div>
              

            </div>
          </div>
        </div>

        {/* Imagen central */}
        <div className={styless.midimage}>
          <div className={styless.middleDiv}>
            <div className={`${styless.imagenlo} ${isFlipped ? styless.imageStyleFlipped : ""}`}>
              <img
                src={currentData.imageslider}
                alt="Imagen Slider"
                className={activeButton === "right" ? styless.imageStyle2 : styless.imageStyle}
              />
            </div>

            <div className={styless.buttonsGeneral}>
                <div className={styless.buttonsGeneralint}>
                  <div className={styless.buttonsleft}>
                      {/* Botón izquierdo */}
                      <div
                        onClick={() => {
                          changeSlider("left");
                          setActiveLeft(true); // Activar el botón izquierdo
                          setActiveRight(false); // Desactivar el botón derecho
                          setIsFlipped(!isFlipped);
                        }}
                        className={`${activeButton === "left" || activeLeft ? styless.activeButtonStyle : styless.inactiveButtonStyle} ${styless.additionalClassName}`}

                      >
                        <svg className={styless.iconslideryw} xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 140 40" fill="none">
                          <circle cx="20" cy="20" r="12" fill={activeLeft ? "#CBF000" : "#1C284C"} />
                          <circle cx="20" cy="20" r="19.5" stroke={activeLeft ? "#CBF000" : "#1C284C"} />
                        </svg>
                      </div>

                  </div>

                  <div className={styless.buttonsrigth}>
                          {/* Botón izquierdo */}
                      <div
                        onClick={() => {
                          changeSlider("right");
                          setActiveLeft(false); // Activar el botón izquierdo
                          setActiveRight(true); // Desactivar el botón derecho
                          setIsFlipped(!isFlipped);
                        }}
                        className={`${activeButton === "right" || activeLeft ? styless.activeButtonStyle : styless.inactiveButtonStyle} ${styless.additionalClassName}`}

                      >
                        <svg className={styless.iconslideryw} xmlns="http://www.w3.org/2000/svg" viewBox="93 0 140 40" fill="none">
                          <circle cx="120" cy="20" r="12" fill={activeRight ? "#CBF000" : "#1C284C"} />
                          <circle cx="120" cy="20" r="19.5" stroke={activeRight ? "#CBF000" : "#1C284C"} />
                        </svg>
                      </div>
                  </div>
                </div>
                  
            </div>      

          </div>
        </div>

        {/* Contenido derecho */}
        <div className={styless.rigthslider}>
          <div className={rightColor === "blue" ? styless.rightDivBlue : styless.rightDivPurple}>
            <div className={styless.rigtconte}>
              <div className={styless.recordcu} key={animationKey}>
                {currentData.projects.map((project, index) => (
                  <div key={index} className={`${rightColor === "blue" ? styless.project : styless.project2} ${styless.newClass}  ${styless.bajandoElementos}`} >
                    <div>
                      <img src={project.image} alt={`Proyecto ${project.id}`} className={styless.projectImage} />
                    </div>
                    <div className={styless.iconrigth}>
                      <div>
                        <h4 
                          className={`${activeButton === "right" ? styless.titlerigth2 : styless.titlerigth} ${styless.animatedNumber}`}
                        >
                          {project.title}
                        </h4>
                      </div>
                      <div>
                        <p className={activeButton === "right" ? styless.textrigthti2 : styless.textrigthti}>{project.text1} <strong>{project.text2}</strong></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderNewSection;