import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import headerContentEN from "../../../data/news-content-en.json";
import headerContentES from "../../../data/news-content-es.json";

const headerStyle = {
  position: "relative",
  textAlign: "center",
  color: "var(--secondary-color)",
  height: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const videoStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
};

const contentWrapperStyle = {
  position: "relative",
  textAlign: "center",
  top: "-15vh", // Mueve el texto más arriba
};

const titleStyle = {
  fontSize: "3rem",
  fontWeight: "bold",
  color: "var(--secondary-color)",
};

const descriptionStyle = {
  marginTop: "1rem",
  fontSize: "1.2rem",
  color: "var(--secondary-color)",
  textAlign: "center",
  maxWidth: "60%",
  lineHeight: "1.4",
  fontWeight: "400",
  margin: "0 auto",
};

const HeaderNews = () => {
  const { i18n } = useTranslation();
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const fetchHeaderData = () => {
      const data = i18n.language === "es" ? headerContentES : headerContentEN;
      setHeaderData(data.header);
    };

    fetchHeaderData();
  }, [i18n.language]);

  if (!headerData || !headerData.image) {
    console.log("Header data or image not found");
    return <div>Cargando...</div>;
  }

  return (
    <section style={headerStyle}>
      <video
        style={videoStyle}
        src={headerData.image}
        autoPlay
        loop
        muted
        playsInline
      />
      <div style={contentWrapperStyle}>
        <h1 style={titleStyle}>
          {headerData.title} {headerData.highlight}
        </h1>
        <p style={descriptionStyle}>{headerData.description}</p>
      </div>
    </section>
  );
};

export default HeaderNews;
