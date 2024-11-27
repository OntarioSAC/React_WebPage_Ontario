import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import headerContentEN from "../../../data/news-content-en.json";
import headerContentES from "../../../data/news-content-es.json";
import styles from "./HeaderNews.module.css";

<<<<<<< HEAD
=======

>>>>>>> 7a877c67a6809b59487e7f860c97d93f922ea0f2
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

      <div className={styles.lefthoja}>
             <img
                src={headerData.lefthoja}
               
                
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
