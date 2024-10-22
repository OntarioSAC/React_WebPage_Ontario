import React from "react";
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

  return (
    <button className="whatsapp-button" onClick={openWhatsapp} type="button" aria-label="Abrir chat de WhatsApp">
      <img className="whatsapp-icon" loading="lazy" alt="" src="/img/icons/whatsapp.svg" />
    </button>
  );
};

WhatsappButton.propTypes = {
  whatsappUrl: PropTypes.string,
};

export default WhatsappButton;


