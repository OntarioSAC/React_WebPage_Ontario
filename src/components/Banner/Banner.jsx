import React from 'react'
import { useTranslation } from "react-i18next";
import SectionBanner from '../../data/new-content-banner.json'
import dataES from "../../data/news-content-es.json";
import dataEN from "../../data/news-content-en.json";
import styles from "./Banner.module.css";
function Banner() {
    const { i18n } = useTranslation(); // Hook para obtener el idioma actual
    // Seleccionar los datos correctos según el idioma
    const data = i18n.language === "es" ? dataES : dataEN;
    
  

  return (
    <div className={styles.bodybanner}>
        {data.Banner.map((banner) => (
            
            

            <div className={styles.fatherfather}>
                <div className={styles.imgmobile}>
                    <img
                    src={banner.image}
                    className={styles.image}
                    />
                </div>
                
                <div className={styles.bannerinterent} key={banner.id}>

                

                <div className={styles.img}>
                    <img
                    src={banner.image}
                    className={styles.image}
                    />
                </div>

                    <div  className={styles.fathertitle}>
                        <div  className={styles.title}>
                            <p>
                                {banner.title}
                            </p>
                        </div>

                        <div  className={styles.description}>
                            <p>
                                {banner.description}
                            </p>
                        </div>
                    </div>


                <div  className={styles.icons}>
                    <div className={styles.iconsint}>
                        <p className={styles.titleredesint}>{banner.redestitle}</p>
                        <div className={styles.iconr}>
                            <div>
                                <a href="https://www.facebook.com/inmobiliariaontario" target="_blank" rel="noopener noreferrer">
                                    <img className={styles.iconmobile} src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/news/icons/facebook.svg" alt="Facebook Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/ontarioinmobiliaria/" target="_blank" rel="noopener noreferrer">
                                    <img className={styles.iconmobile} src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/news/icons/instagram.svg" alt="Instagram Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.tiktok.com/@ontario_inmobiliaria" target="_blank" rel="noopener noreferrer">
                                    <img className={styles.iconmobile} src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/news/icons/tiktok.svg" alt="TikTok Icon" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/@ontarioinmobiliaria9132" target="_blank" rel="noopener noreferrer">
                                    <img className={styles.iconmobile} src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/news/icons/youtube.svg" alt="YouTube Icon" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                </div>
            </div>
        
        
        ))}

        
    </div>
  )
}

export default Banner