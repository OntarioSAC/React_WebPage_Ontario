import React from 'react';
import PropTypes from 'prop-types';
import styles from './InfoBoxContent.module.css';

// Componente principal para mostrar el contenido de la caja de información
const InfoBoxContent = ({ data }) => {
  const { logo, price, infoBoxes, colors } = data;

  // Estilos dinámicos basados en los colores proporcionados
  const topSectionStyle = {
    backgroundColor: colors.secondaryColor,
    color: colors.textColor,
  };

  const altAmountStyle = {
    color: colors.secondaryColor,
  };

  const bottonSectionStyle = {
    backgroundColor: colors.primaryColor,
    color: colors.textColor,
  };

  return (
    <div className={styles['container']}>
      {/* Sección superior con logo y información de precio */}
      <div className={styles['top-section']} style={topSectionStyle}>
        <div className={styles['top-left']} >
          <img src={logo} alt="Logo Santorini" loading="lazy" className={styles['logo']} />
          <div className={styles['price-info']} style={bottonSectionStyle}>
            <h3 className={styles['title']}>{price.title}</h3>
            <p className={styles['price']}> {price.amount} </p>
            <span className={styles['span']} style={altAmountStyle} >{price.altO}</span>
            <span className={styles['price-alt']} style={altAmountStyle}>{price.altAmount} </span>
            <p className={styles['conditions']}>{price.conditions}</p>
          </div>
        </div>
      </div>

      {/* Sección inferior con cajas de información */}
      <div className={styles['bottom-section']} style={bottonSectionStyle}>
        {infoBoxes.map((box, index) => (
          <div key={index} className={`${styles['info-box']} ${index === 1 ? styles['info-box-middle'] : ''}`}>
            <div className={styles['icon']}><img src={box.icon} alt={box.text} /></div>
            <p className={styles['info-text']}>{box.text}</p>
            {box.bold ? (
              <><h4 className={styles['bold-text']}>{box.bold}</h4><span className={styles['info-tex']}>{box.value}</span></>
            ) : box.highlighted ? (
              <h4 className={styles['semi-bold-text']}>{box.value}<span className={styles['extra-bold-text']}>{box.highlighted}</span></h4>
            ) : (
              <h4 className={styles['bold-text']}>{box.value}</h4>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Validación de props utilizando PropTypes
InfoBoxContent.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    price: PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      altO: PropTypes.string.isRequired,
      altAmount: PropTypes.string.isRequired,
      conditions: PropTypes.string.isRequired,
    }).isRequired,
    infoBoxes: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string,
      bold: PropTypes.string,
      value: PropTypes.string.isRequired,
      highlighted: PropTypes.string,
    })).isRequired,
    colors: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default InfoBoxContent;
