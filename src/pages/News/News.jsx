
import React from 'react';
import { useTranslation } from "react-i18next"; // Importa el hook de traducción
import NewsBanner from './Content/NewsBanner';
import NewsTabs from './Content/NewsTabs';
import Cards from './Content/Cards';
import FormSection from '../Home/Content/FormSection';
import WhatsappButton from "../../components/Modules/WhatsappButton";
const News = () => {
  // Hook para obtener las traducciones
  const { t } = useTranslation(); // Hook para obtener las traducciones

 
  const formSection = t('formSection', { returnObjects: true });

  const customContent={
    position: 'relative',
    
    padding: 0,
    margin: 0,
  }

  return (
    <div>
      <NewsBanner />
      <NewsTabs />
      <Cards>
      </Cards>
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
