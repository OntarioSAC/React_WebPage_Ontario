import React from "react";
import PropTypes from "prop-types";
import "./WhatsappButton.css";

/**
 * Componente de botón de WhatsApp que abre un chat de WhatsApp al hacer clic.
 * @param {string} whatsappUrl - URL personalizada de WhatsApp (opcional).
 */
const WhatsappButton2 = ({ whatsappUrl }) => {
  
  
  const openWhatsapp = () => {
    const defaultUrl = "https://wa.me/+51972582490";
    const urlToOpen = whatsappUrl || defaultUrl;
    window.open(urlToOpen, "_blank");
  };

  return (
    <button className="whatsapp-button2" onClick={openWhatsapp} type="button" aria-label="Abrir chat de WhatsApp">
      
      <img className="iconsocialdev" src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/news/icons/whatsapp.svg" alt="Instagram Icon" />
    </button>
  );
};

WhatsappButton2.propTypes = {
  whatsappUrl: PropTypes.string,
};

export default WhatsappButton2;


