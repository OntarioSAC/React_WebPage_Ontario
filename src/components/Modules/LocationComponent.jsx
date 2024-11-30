import React, { useState, useEffect } from "react";
import styles from "./LocationComponent.module.css";

const LocationComponent = ({ contentData, colors }) => {
  const [content, setContent] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState("");

  const defaultColors = {
    backgroundColor: "#1C284C",
    textColor: "#FFFFFF",
    activeBackgroundColor: "#CBF000",
    activeTextColor: "#1C284C",
  };

  const buttonColors = {
    backgroundColor: colors?.backgroundColor || defaultColors.backgroundColor,
    textColor: colors?.textColor || defaultColors.textColor,
    activeBackgroundColor:
      colors?.activeBackgroundColor || defaultColors.activeBackgroundColor,
    activeTextColor: colors?.activeTextColor || defaultColors.activeTextColor,
  };

  useEffect(() => {
    if (contentData && contentData.buttons.length > 0) {
      handleButtonClick(contentData.buttons[0]);
    }
  }, [contentData]);

  const handleButtonClick = (button) => {
    setActiveButton(button.id);
    setContent(getButtonContent(button));
  };

  const getButtonContent = (button) => {
    if (button.type === "image") {
      return (
        <div className={styles.imageContainer}>
          <img
            id="dynamic-map"
            loading="lazy"
            className={styles.backgroundImage}
            src={button.src}
            alt={button.alt}
          />
          <button
            className={styles.openPopupButton}
            onClick={() => openPopup(button.src)}
          >
            <img
              src="/img/icons/open.svg"
              alt="open"
              loading="lazy"
              className={styles.iconPopup}
            />
          </button>
        </div>
      );
    } else if (button.type === "link") {
      return (
        <a href={button.href} target="_blank" rel="noopener noreferrer">
          <div>
            <iframe
              src={button.src}
              width="600"
              height="560"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </a>
      );
    } else if (button.type === "iframe") {
      return (
        <div style={{ position: "relative", width: "650px", height: "650px" }}>
          <iframe
            src={button.src}
            width="623"
            height="623"
            frameBorder="0"
            title="Mapa"
            style={{ pointerEvents: "none" }}
          ></iframe>
          <a
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
          ></a>
        </div>
      );
    }
  };

  const openPopup = (src) => {
    setPopupImageSrc(src);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImageSrc("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>{content}</div>
      <div className={styles.buttonGroup}>
        {contentData &&
          contentData.buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button)}
              className={`${styles[`${button.id}-button`]} ${
                activeButton === button.id ? styles.active : ""
              }`}
              style={{
                backgroundColor:
                  activeButton === button.id
                    ? buttonColors.activeBackgroundColor
                    : buttonColors.backgroundColor,
                color:
                  activeButton === button.id
                    ? buttonColors.activeTextColor
                    : buttonColors.textColor,
                boxShadow:
                  activeButton === button.id
                    ? `0px 10px 26px -4px ${buttonColors.activeShadowColor}`
                    : `0px 10px 26px -4px ${buttonColors.shadowColor}`,
              }}
            >
              <span className={`icon ${button.icon}`}> </span>
              {button.label}
            </button>
          ))}
      </div>
      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupOverlay} onClick={closePopup}></div>
          <div className={styles.popupContent}>
            <button className={styles.closePopupButton} onClick={closePopup}>
              <img src="/img/icons/close2.png" loading="lazy" alt="close" />
            </button>
            <img src={popupImageSrc} loading="lazy" alt="Popup" className={styles.popupImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;
