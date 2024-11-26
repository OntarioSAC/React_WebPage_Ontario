import React from 'react'
import { useParams ,useNavigate  } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importa el hook de traducción
import data from "../../../../data/new-content-cards.json"
import styles from "./developed.module.css";
import Sidebar from '../Sidebar';
import FormSection from '../../../Home/Content/FormSection';
import Banner from '../../../../components/Banner/Banner';
function developednews() {
   // Hook para obtener las traducciones
   const { t } = useTranslation(); // Hook para obtener las traducciones


   const formSection = t('formSection', { returnObjects: true });
 
    const { id } = useParams();
    const navigate = useNavigate(); // Hook para navegar entre rutas
    const card = data.cards.find((card) => card.id === parseInt(id)); // Busca la tarjeta por ID

    if (!card) {
        // Si no se encuentra una tarjeta con el ID, muestra un mensaje de error
        return <div>Card not found</div>;
    }
    
  return (
    <div>
    <div className={styles.generalbody}>

       

      <div className={styles.information}>
           {/* Botón para regresar */}
           <div onClick={() => navigate(-1)} className={styles.buttomback}>

            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none">
                <path d="M9.5993 3.15099L3.9893 8.76098L9.5993 14.371C10.1632 14.9349 10.1632 15.8458 9.5993 16.4097C9.03541 16.9736 8.12451 16.9736 7.56061 16.4097L0.924049 9.77309C0.360158 9.2092 0.360158 8.2983 0.924049 7.73441L7.56062 1.09785C8.12451 0.533954 9.03541 0.533954 9.5993 1.09785C10.1487 1.66174 10.1632 2.5871 9.5993 3.15099Z" fill="#1C284C"/>
            </svg>

              <div className={styles.textback}
              >
              
                Regresar
            </div>

           </div>
          
           {/* Etiqueta*/}
        <div>
          <span className={styles.etiquetas}>
            {card.etiqueta}
          </span>
          
        </div>
          

        {/* Título */}
      <h1 className={styles.titleinf}>
        {card.title}
        
      </h1>

      <div className={styles.descripstart}>
        {card.subdescripcion}
      </div>

      <span className={styles.fechact}>{card.fecha}</span>

        {/* Imagen */}
        <div className={styles.imageinf} >
        
        <img
          src={card.image}
          alt={card.title}
          className={styles.imageinf}
        />
      </div>


      <div className={styles.fechaimgedescrip}>
       
        <div >
          
          {card.fecha}-{card.imagedescrip}
        </div>
        
      </div>


       {/* Descripción */}
       <p className={styles.descrips}>{card.description}</p>
       <p className={styles.descrips}>{card.parrafo1}</p>
       <h2 className={styles.titledown}>{card.title1}</h2>

       <div>
      {/* Aquí se renderiza el contenido de "lista1" */}
      {card.lista1.map((item, index) => (
        <ul className={styles.listp}>
            <li  key={index}>
              {item}
            </li>
        </ul>
             
      ))}
      
      <div>
        <img
            src={card.image2}
            alt={card.title}
            className={styles.imageinf2}
          />
      </div>

      <h2 className={styles.titledown}>
        {card.title2}
      </h2>

      <div className={styles.descrips}>
        {card.parrafo2}
      </div>

      <h2 className={styles.titledown}>
        {card.title3}
      </h2>
      <div>
      {/* Aquí se renderiza el contenido de "lista2" */}
      {card.lista2.map((item, index) => (
        <ul key={index} className={styles.listp}>
          <li>
            {item}
          </li>
        </ul>
      ))}
    </div>

      <div className={styles.end}>
        {card.end}
      </div>
    </div>






    </div>
        <Sidebar>

        </Sidebar>



        </div>
      <di>
        <Banner></Banner>
      </di>

      <di>
           {/* Sección de formulario */}
      <FormSection data={formSection} /> 
      </di>  

        
      </div> 
  )
}

export default developednews