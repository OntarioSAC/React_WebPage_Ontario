import React, { useState, useEffect } from 'react';
import dataES from "../../../data/home-content-es.json";  // Importamos los datos JSON

const SliderNewSection = () => {
  // Estado para manejar los datos del slider
  const [sliderData, setSliderData] = useState(null);
  const [currentSlider, setCurrentSlider] = useState(0); // Determina qué slider mostrar (0 para el primer slider, 1 para el segundo)
  const [activeButton, setActiveButton] = useState("left"); // Estado para controlar qué botón está activo
  const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar la rotación de la imagen
  const [leftColor, setLeftColor] = useState("lightpurple"); // Color del lado izquierdo
  const [rightColor, setRightColor] = useState("blue"); // Color del lado derecho

  // Cargar los datos desde el JSON
  useEffect(() => {
    if (dataES.slidernew) {
      setSliderData(dataES.slidernew.slider);
    }
  }, []);

  // Función para alternar el slider
  const changeSlider = (direction) => {
    setCurrentSlider(prev => {
      const newSlider = prev === 0 ? 1 : 0;
      setActiveButton(newSlider === 0 ? "left" : "right"); // Cambiar el estado del botón cuando el slider cambia
      return newSlider;
    });

    // Cambiar los colores de los lados
    setLeftColor(prevLeftColor => (prevLeftColor === "lightpurple" ? "green" : "lightpurple"));
    setRightColor(prevRightColor => (prevRightColor === "blue" ? "purple" : "blue"));
  };

  // Función para rotar la imagen automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => {
        const newSlider = prev === 0 ? 1 : 0;
        setActiveButton(newSlider === 0 ? "left" : "right"); // Cambiar el estado del botón cuando el slider cambia automáticamente
        setIsFlipped((prevFlipped) => !prevFlipped); // Cambiar la rotación de la imagen automáticamente
        return newSlider;
      });

      // Cambiar los colores de los lados cuando el slider cambia automáticamente
      setLeftColor(prevLeftColor => (prevLeftColor === "lightpurple" ? "green" : "lightpurple"));
      setRightColor(prevRightColor => (prevRightColor === "blue" ? "purple" : "blue"));

    }, 5000); // Cambiar cada 5 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  // Si los datos no han sido cargados, no renderizar nada
  if (!sliderData) return null;

  // Obtener los datos del slider actual
  const currentData = sliderData[currentSlider];

  // Estilos para los botones
  const activeButtonStyle = {
    backgroundColor: '#FF5733', // Color cuando el botón está activo
    color: 'white',
  };

  const inactiveButtonStyle = {
    backgroundColor: '#333', // Color cuando el botón no está activo
    color: 'white',
  };

  // Estilos para la rotación de la imagen
  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '20px',
    borderRadius: '8px',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotación de 180 grados
    transition: 'transform 1s', // Añadimos transición suave
  };

  // Estilos dinámicos para los colores de fondo
  const leftDivStyle = {
    ...styles.sideDiv,
    backgroundColor: leftColor === "lightpurple" ? "#D8A7D3" : "green", // Cambia el color cuando el slider cambia
  };

  const rightDivStyle = {
    ...styles.sideDiv,
    backgroundColor: rightColor === "blue" ? "#2A72D6" : "#9B4F96", // Cambia el color cuando el slider cambia
  };

  return (
    <div style={styles.container}>
      {/* Lado izquierdo con fondo dinámico */}
      <div style={leftDivStyle}>
        <h2>{currentData.titleone}</h2>
        <h3>{currentData.title1}</h3>
        <h4>{currentData.title2}</h4>
        <p>{currentData.text1} <strong>{currentData.textbold}</strong></p>
        <p>{currentData.text2}</p>
        <p>{currentData.text3}</p>
        {/* Logos */}
        <div>
          {currentData.logo.map((logo, index) => (
            <img key={index} src={logo.image} alt={`Logo ${logo.id}`} style={styles.logoImage} />
          ))}
        </div>
      </div>

      {/* Lado central con imagen y botones */}
      <div style={styles.middleDiv}>
        <img
          src={currentData.imageslider}
          alt="Imagen Slider"
          style={imageStyle}
        />
        <div style={styles.buttons}>
          <button
            onClick={() => {
              changeSlider("left");
              setIsFlipped(!isFlipped);
            }}
            style={activeButton === "left" ? activeButtonStyle : inactiveButtonStyle}
          >
            Botón Izquierdo
          </button>
          <button
            onClick={() => {
              changeSlider("right");
              setIsFlipped(!isFlipped);
            }}
            style={activeButton === "right" ? activeButtonStyle : inactiveButtonStyle}
          >
            Botón Derecho
          </button>
        </div>
      </div>

      {/* Lado derecho con fondo dinámico */}
      <div style={rightDivStyle}>
        <h2>Proyectos</h2>
        <div>
          {currentData.projects.map((project, index) => (
            <div key={index} style={styles.project}>
              <img src={project.image} alt={`Proyecto ${project.id}`} style={styles.projectImage} />
              <h4>{project.title}</h4>
              <p>{project.text1} <strong>{project.text2}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
  },
  sideDiv: {
    width: '20%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
  },
  middleDiv: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  project: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  projectImage: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    borderRadius: '8px',
  },
  logoImage: {
    width: '50px',
    height: '50px',
    margin: '10px',
  },
};

export default SliderNewSection;
