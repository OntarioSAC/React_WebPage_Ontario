import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import headerContentEN from "../../../data/news-content-en.json";
import headerContentES from "../../../data/news-content-es.json";
import styles from "./HeaderNews.module.css";

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
    <section className={styles.headerStyle}>
      <video
        className={styles.VideoNews}
       
        src={headerData.image}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.contentWrapperStyle}>
        <h1 className={styles.titleStyle}>
          
          {headerData.title} {headerData.highlight}
        </h1>
        <p className={styles.descriptionStyle}>{headerData.description}</p>
      </div>
      <div>
             <img
                src={headerData.lefthoja}
               
                className={styles.lefthoja}
              />
      </div>
      <div>
           <img
                src={headerData.rigthhoja}
               
                className={styles.rigthhoja}
              />
      </div>

    </section>
  );
};

export default HeaderNews;
