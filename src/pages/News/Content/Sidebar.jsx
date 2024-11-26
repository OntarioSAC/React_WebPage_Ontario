import { useNavigate } from "react-router-dom";
import data from "../../../data/new-content-cards.json"; // Asegúrate de que este archivo contiene las tarjetas
import React , {useState} from 'react';
import styles from './SidebarStyle.module.css';

const derecha_ = {
   backgroundColor: 'transparent',
   display:'flex',
   flexDirection:'column',
   gap:32 
};
const derecha_int = {
   cursor:'pointer',
   width: '374px',
   height: '190px',
   borderTopRightRadius: '30px',
   borderTopLeftRadius: '30px',
   borderBottomLeftRadius: '30px',
   border: '2px solid #1C284C',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   gap: 35,
   position: 'relative',
   overflow: 'hidden',
   
   transition: 'background-color 0.3s ease, color 0.3s ease'
};

const derecha_int_text = {
   backgroundColor: 'transparent',
   width: '90%',
};
const text_texto_dere={
   color:'#1C284C',
   fontFamily: "Inter",
   fontSize: "20px",
   fontStyle: "normal",
   fontWeight: 800,
   lineHeight: "normal",
}
const derecha_int_fecha={
   color:'#1C284C',
   fontFamily: "Inter",
   fontSize: "16px",
   fontStyle: "normal",
   fontWeight: 600,
   lineHeight: "normal",
  
}
const derecha_int_fecha_cuerpo={
   backgroundColor: 'transparent',
   width: '90%',
  
}
const titulo_derecha={
   paddingTop:15,
   paddingBottom: 15,
   color:'#1C284C',
   fontFamily: "Inter",
   fontSize: "24px",
   fontStyle: "normal",
   fontWeight: 600,
   lineHeight: "normal",

}
const titulo_derecha_in={
   paddingTop:15,
   paddingBottom: 15,
   color:'#1C284C',
   fontFamily: "Inter",
   fontSize: "24px",
   fontStyle: "normal",
   fontWeight: 900,
   lineHeight: "normal",

}
const Titulo_general={
   display:'flex',
   flexDirection:'row',
   gap:7

}

const Sidebar = () => {
   const [hover, setHover] = React.useState(false);
   const [hoveredCard, setHoveredCard] = useState(null);
   const [hovered, setHovered] = useState(false);
   const [hoveredtext, setHoveredtext] = useState(false);
   const navigate = useNavigate();

  return (
   


   <div className={styles.derecha_} style={derecha_}>
      <div style={Titulo_general}>
         <h5 style={titulo_derecha}>Publicaciones </h5>
         <p style={titulo_derecha_in}>Recientes</p>
      </div>
      {data.cards.map((card) => (
   <div
      key={card.id}
      className={styles.derecha_int}
      style={{
         ...derecha_int,
         position: 'relative', // Necesario para que los elementos se apilen
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => navigate(`/card/${card.id}`)}
   >
      {/* Contenedor de la imagen con el filtro */}
      <div
         style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: hoveredCard === card.id ? `url(${card.image})` : 'none',
            backgroundColor: hoveredCard === card.id ? 'rgba(218, 218, 218, 0.3)' : 'transparent',
            backgroundBlendMode: hoveredCard === card.id ? 'darken' : 'normal',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: hoveredCard === card.id ? 'brightness(60%)' : 'brightness(100%)',
            transition: 'filter 0.5s ease, background-image 0.5s ease, background-color 0.5s ease',
            
            
         }}
         onClick={() => navigate(`/card/${card.id}`)}
      ></div>

      {/* Contenedor de texto */}
      <div
         style={{
            ...derecha_int_text,
            position: 'relative',
            zIndex: 2, // Hace que el texto esté por encima de la imagen
         }}
         onClick={() => navigate(`/card/${card.id}`)}
      >
         <h2
            style={{
               ...text_texto_dere,
               color: hoveredCard === card.id ? 'white' : '#1C284C',
               transition: 'color 0.5s ease',
            }}
         >
            {card.title}
         </h2>
      </div>

      <div
         style={{
            ...derecha_int_fecha_cuerpo,
            position: 'relative',
            zIndex: 2, // Hace que el texto esté por encima de la imagen
         }}
      >
         <p
            style={{
               ...derecha_int_fecha,
               color: hoveredCard === card.id ? 'white' : '#1C284C',
               transition: 'color 0.5s ease',
            }}
         >
            {card.fecha}
         </p>
      </div>
   </div>
))}


   </div>





  );
};

export default Sidebar;
