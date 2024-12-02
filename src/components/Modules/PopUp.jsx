import React, { useEffect, useState } from 'react';
import styles from './PopUp.module.css';
import { useNavigate } from 'react-router-dom';

const Popup = ({ onClose, deviceType, isLoading }) => {
    const imageUrls = {
        desktop: 'https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/popups/popup_cusco.webp',
        tablet: 'https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/popups/popup_cusco.webp',
        mobile: 'https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/popups/popup_cusco_mobile.webp',
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the popup with a fade-in animation
        setIsVisible(true);

        // Preload the image to improve LCP
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrls[deviceType];
        document.head.appendChild(link);

        return () => {
            setIsVisible(false);
            document.head.removeChild(link);
        };
    }, [deviceType]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Delay for exit animation
    };

    const navigate = useNavigate();

    const handlePromotionClick = () => {
        navigate('/terms', {
            state: {
                activeSection: 'promociones',
                activeSubsection: 'promociones1',
                activepromociones_noviembre: 'promociones_noviembre',
            },
        });
    };

    return (
        <div className={`${styles["popup-overlay"]} ${isVisible ? styles.show : ''}`}>
            <button className={styles["close-button"]} onClick={handleClose}>✕</button>
            <div className={styles["popup-content"]}>
                {isLoading ? (
                    <div className={styles["loading-container"]}>
                        <LoadingGemma classLoading="hidden sm:block" />
                        <LoadingGemma classLoading="block sm:hidden" height={60} width={60} />
                    </div>
                ) : (
                    <picture onClick={handlePromotionClick}>
                        <source srcSet={imageUrls.desktop} media="(min-width: 1024px)" />
                        <source srcSet={imageUrls.tablet} media="(min-width: 531px) and (max-width: 1023px)" />
                        <source srcSet={imageUrls.mobile} media="(max-width: 530px)" />
                        <img 
                            src={imageUrls[deviceType]} 
                            alt={`Promotion Image - ${deviceType}`} 
                            className={styles.image} 
                            decoding="async" 
                            loading="eager" // Prioritize this image for LCP
                        />
                    </picture>
                )}
            </div>
        </div>
    );
};

export default Popup;
