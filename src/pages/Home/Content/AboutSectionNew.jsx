import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import dataES from "../../../data/home-content-es.json";  // Importamos los datos JSON
import styless from "./AboutSectionNew.module.css";  // Importamos el archivo CSS

const AboutSectionNew = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const handleNavigation = () => {
    navigate('/about'); // Redirige a la ruta /about
  };
  return (
   
    <div className={styless.secondslider}>
        <div className={styless.nosotrosmessage}>
          <div className={styless.contentaboutg}>
            <h1 className={styless.tituone}>CONFÍA EN<strong> NOSOTROS</strong></h1>
              <p className={styless.textone}>Para <strong>encontrar tu hogar ideal</strong>, donde cada detalle ha sido diseñado pensando en<strong> tu bienestar y satisfacción.</strong> </p>
              <button className={styless.buttomabout} onClick={handleNavigation}>
                  <span className={styless.textbuttom}>Conoce más</span>
              </button> 
          </div>
                  
        </div>
    </div> 
    
  );
};

export default AboutSectionNew;
