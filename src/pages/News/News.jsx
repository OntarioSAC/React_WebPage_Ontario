import React from 'react';
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


  return (
    <div>
      <HeaderNews />
      <NewsTabs />
      <div className={styles.ContentNotice}>
        <div className={styles.padrecards}>
          <Cards className={styles.generalcards}>
          </Cards>
        </div>
        <div>
          <Sidebar>
          </Sidebar>
        </div>

      </div>



      {/* Sección de Banner */}
      <Banner></Banner>

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
