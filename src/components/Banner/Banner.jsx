import React from 'react'
import SectionBanner from '../../data/new-content-banner.json'
import styles from "./Banner.module.css";
function Banner() {

    
  

  return (
    <div className={styles.bodybanner}>
        {SectionBanner.Banner.map((banner) => (

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
                                <img className={styles.iconredes} src="/img/icons/facebook.svg" alt="Facebook Icon" />
                            </div>
                            <div>
                            <img className={styles.iconredes} src="/img/icons/instagram.svg" alt="Facebook Icon" />
                            </div>
                            <div>
                            <img className={styles.iconredes} src="/img/icons/tiktok.svg" alt="Facebook Icon" />
                            </div>
                            <div>
                            <img className={styles.iconredes} src="/img/icons/youtube.svg" alt="Facebook Icon" />
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