import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./WhatsappButton.css";

/**
 * Componente de botón de WhatsApp que abre un chat de WhatsApp al hacer clic.
 * @param {string} whatsappUrl - URL personalizada de WhatsApp (opcional).
 */
const WhatsappButton = ({ whatsappUrl }) => {
  
  const openWhatsapp = () => {
    const defaultUrl = "https://wa.me/+51972582490";
    const urlToOpen = whatsappUrl || defaultUrl;
    window.open(urlToOpen, "_blank");
  };

  useEffect(() => {
    const layer1 = document.querySelector('.layer1');
    const layer2 = document.querySelector('.layer2');
    const layer3 = document.querySelector('.layer3');

    // Función para iniciar la animación
    const startPulsing = () => {
      // Fase 1: Capa 1 crece
      layer1.style.width = '90px';
      layer1.style.height = '90px';
      layer1.style.opacity = 1;

      // Esperamos el tiempo de crecimiento de la capa 1
      setTimeout(() => {
        // Fase 2: Capa 2 crece
        layer2.style.width = '110px';
        layer2.style.height = '110px';
        layer2.style.opacity = 1;

        // Esperamos el tiempo de crecimiento de la capa 2
        setTimeout(() => {
          // Fase 3: Capa 3 crece
          layer3.style.width = '110px';
          layer3.style.height = '110px';
          layer3.style.opacity = 1;

          // Esperamos el tiempo de crecimiento de la capa 3
          setTimeout(() => {
            // Reducimos todas las capas simultáneamente
            layer1.style.width = '0';
            layer1.style.height = '0';
            layer1.style.opacity = 1;

            layer2.style.width = '0';
            layer2.style.height = '0';
            layer2.style.opacity = 1;

            layer3.style.width = '0';
            layer3.style.height = '0';
            layer3.style.opacity = 1;

            // Reiniciamos el ciclo después de un pequeño retraso
            setTimeout(startPulsing, 600); // 500ms de espera antes de reiniciar el ciclo
          }, 500); // Espera el tiempo de crecimiento de la capa 3
        }, 500); // Espera el tiempo de crecimiento de la capa 2
      }, 500); // Espera el tiempo de crecimiento de la capa 1
    };

    startPulsing(); // Inicia la animación al cargar el componente
  }, []);

  return (
    <button className="whatsapp-button" onClick={openWhatsapp} type="button" aria-label="Abrir chat de WhatsApp">
  <div className="pulsing-layer layer1">
    <img className="whatsapp-icon" loading="lazy" alt="" src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/icons/icowhatsapp.svg" />
  </div>
  <div className="pulsing-layer layer2"></div>
  <div className="pulsing-layer layer3"></div>
</button>

  );
};

WhatsappButton.propTypes = {
  whatsappUrl: PropTypes.string,
};

export default WhatsappButton;
