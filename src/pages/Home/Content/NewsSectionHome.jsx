import React, { useState, useEffect } from 'react';
import dataES from "../../../data/home-content-es.json";  // Importamos los datos JSON
import dataEN from "../../../data/home-content-es.json";
import Cards from '../../../components/Modules/CardSlider';
import { useTranslation } from "react-i18next";
import styless from "./NewSectionHome.module.css";  // Importamos el archivo CSS

const NewsSectionHome = () => {
    const [selectedTab, setSelectedTab] = useState("Todo");  
    const { i18n } = useTranslation();

 const data = i18n.language === "es" ? dataES : dataEN;
  return (
   
    <div className={styless.FatherNews}>
        <div className={styless.SoonFatherNews}>

          

          <div className={styless.Yanneport}>
              
              <div className={styless.Yanneportint}>
                <img src={data.NewsHome.image} alt="Noticias" className={styless.image} />
              </div>

          </div>

          <div className={styless.contentaboutg}>

            <div className={styless.Frame2}>
              <div className={styless.Frame2int}>
                <img className={styless.Frame2intmobil} src={data.NewsHome.Frame2} alt="" />
              </div>
            </div>

              <div className={styless.contentaboutgint}>
                <h1 className={styless.h1newsabout}>{data.NewsHome.titleuno}<strong className={styless.h1newsabout2}> {data.NewsHome.titletwo}</strong></h1>
                <p className={styless.parrafonews}>{data.NewsHome.Parrafoone}<strong> {data.NewsHome.parrafotwo}</strong></p>

                <div className={styless.CardsHome} >
                <Cards selectedTab={selectedTab} useAlternateStyles={true} />

                </div>

              </div>
            



              
            
          </div>

         <div className={styless.ccontainerbuttonnewbu}>
            <div >
              <button className={styless.buttonnewbu}>
                <span className={styless.buttontext}>Conoce más</span>  
              </button>  
            </div>  

            <div className={styless.Frame1}>

            <div className={styless.Frame1int}>
              <img className={styless.Frame1intsvg} src={data.NewsHome.Frame1} alt="" /> 
            </div>
            
          </div>

        </div>     


        </div>
    </div> 
    
  );
};

export default NewsSectionHome;