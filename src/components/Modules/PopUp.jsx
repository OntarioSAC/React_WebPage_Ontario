import React, { useEffect, useState } from 'react';
import styles from './PopUp.module.css'; // Asegúrate de crear este archivo CSS


const Popup = ({ onClose, deviceType, isLoading }) => {
    
    const imageUrls = {
        desktop: '/img/popups/popup_cusco.webp',
        tablet: '/img/popups/popup_cusco.webp',
        mobile: '/img/popups/popup_cusco_mobile.webp',
    };

    const imageUrl = imageUrls[deviceType] || imageUrls.desktop;
    const [isVisible, setIsVisible] = useState(false);
    

    useEffect(() => {
        setIsVisible(true); // Mostrar popup con animación de entrada
        return () => setIsVisible(false); // Limpiar visibilidad al desmontar
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Delay para permitir la transición de salida
    };

    return (
        <div className={`${styles["popup-overlay"]} ${isVisible ? styles.show : ''}`}>
            <button className={styles["close-button"]} onClick={handleClose}>✕</button>
            <div className={`${styles["popup-content"]}`}>
                {isLoading ? (
                    <div className={styles["loading-container"]}>
                        <LoadingGemma classLoading="hidden sm:block" />
                        <LoadingGemma classLoading="block sm:hidden" height={60} width={60} />
                    </div>
                ) : (
                <picture>
                    <source srcSet={imageUrls.desktop} media="(min-width: 1024px)" />
                    <source srcSet={imageUrls.tablet} media="(min-width: 531px) and (max-width: 1024px)" />
                    <source srcSet={imageUrls.mobile} media="(max-width: 530px)" />
                    <img src={imageUrl} alt={`Promotion Image - ${deviceType}`} className={styles.image} />
                </picture>
                )}
                
            </div>
        </div>
    );
};

export default Popup;