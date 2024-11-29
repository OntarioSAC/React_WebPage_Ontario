import React from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next"; // Importa el hook de traducción
import HeaderNews from './Content/HeaderNews';
import NewsTabs from './Content/NewsTabs';
import Cards from './Content/Cards';
import FormSection from '../Home/Content/FormSection';
import Sidebar from './Content/Sidebar';
import Banner from '../../components/Banner/Banner';
import WhatsappButton from "../../components/Modules/WhatsappButton";
import styles from './News.module.css';

const News = () => {
  // Hook para obtener las traducciones
  const { t } = useTranslation(); // Hook para obtener las traducciones


  const formSection = t('formSection', { returnObjects: true });

  const customContent = {
    position: 'relative',
    padding: 0,
    margin: 0,
  }



  const [selectedTab, setSelectedTab] = useState("Todo");
  return (
    <div className={styles.padre}>
      <div>
        <HeaderNews />
        {/* Pasa el filtro y la función para actualizarlo */}
        <NewsTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />

        <div className={styles.eventos}>
          <div className={styles.ContentNotice}>
            <div className={styles.padrecards}>
              {/* Pasa el filtro al componente Cards */}
              <Cards selectedTab={selectedTab} className={styles.generalcards} />
            </div>
            <div className={styles.padrecards}>
              <Sidebar className={styles.generalcards} />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Banner */}
      <Banner />
      <div className={styles.hglitl}></div>
      {/* Sección de formulario */}
      <FormSection data={formSection} />

      {/* Contenedor para el botón de WhatsApp */}
      <div className="container g-0">
        <div style={customContent}>
          <div className="whatsapp">
            <WhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
};


export default News;
