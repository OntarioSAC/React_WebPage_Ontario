import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import newsContentEN from "../../../data/news-content-en.json";
import newsContentES from "../../../data/news-content-es.json";

const bannerStyle = (image) => ({
  // position: "relative",
  textAlign: "center",
  color: "var(--secondary-color)",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "75vh", // Altura ajustada del banner
  display: "flex", // Habilita el uso de flexbox
  alignItems: "center",
  justifyContent: "center",
});

const contentWrapperStyle = {
  position: "relative",
  top: "-15vh", 
  textAlign: "center", // Asegura que todo esté centrado
};

const titleStyle = {
  fontSize: "3rem",
  fontWeight: "bold",
  color: "var(--secondary-color)",
};



const descriptionStyle = {
  marginTop: "1rem", // Espacio entre el título y el texto de descripción
  fontSize: "1.2rem",
  color: "var(--secondary-color)",
  textAlign: "center",
  maxWidth: "60%",
  lineHeight: "1.4", // Ajusta el espacio entre líneas (prueba con 1.3 si es necesario)
  letterSpacing: "normal", // Elimina cualquier espaciado adicional entre letras
  fontWeight: "400", // Asegúrate de que la fuente no esté en negrita
  margin: "0 auto", // Centra el texto horizontalmente
};

const NewsBanner = () => {
  const { i18n } = useTranslation();
  const [bannerData, setBannerData] = useState(null);

  const fetchBannerData = () => {
    const data = i18n.language === "es" ? newsContentES : newsContentEN;
    setBannerData(data.banner);
  };

  useEffect(() => {
    fetchBannerData();
  }, [i18n.language]);

  if (!bannerData || !bannerData.image) {
    return <div>Cargando...</div>; // Muestra un estado de carga mientras no haya datos
  }

  return (
    <section style={bannerStyle(bannerData.image)}>
      <div style={contentWrapperStyle}>
        <h1 style={titleStyle}>
          {bannerData.title} {bannerData.highlight}
        </h1>
        <p style={descriptionStyle}>{bannerData.description}</p>
      </div>
    </section>
  );
};

export default NewsBanner;