// import { bottom, right } from '@popperjs/core';
// import { Button } from 'bootstrap';

// import { useNavigate } from "react-router-dom";
import data from "../../../data/new-content-cards.json"; // Asegúrate de que este archivo contiene las tarjetas


import React , {useState} from 'react';

const generalcardbody = {
   backgroundColor: 'white',
   display:'flex',
   flexDirection:'row',
   justifyContent:'center',
   
};
const bodycard ={
   backgroundColor:'white',
   width: '55%',
   position:'relative',
   display:'flex',
   flexDirection:'row',
   rowGap: '72px', 
   columnGap: '36px', 
   flexWrap: 'wrap',
   justifyContent: 'center'
};

const cards ={
    backgroundColor: 'transparent',
    height:'501px',
    width: '374px',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"

 };

 const insidecards ={
   height:'432px',
    width: '374px',
 }

 const fatherimage={
    backgroundColor: 'transparent',
    borderTopRightRadius: '30px',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    height: '216px',
    width: '100%',
    overflow:'hidden'
 };
 const image ={
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    
 };

 const fathertitle ={
   paddingTop:20,
   backgroundColor: 'transparent',
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   fontSize:'20px'
   
   
   

};
 const h1text ={
    backgroundColor: 'transparent',
    width: '85%',
    fontFamily: "Inter",
    lineHeight: "normal",
    fontStyle: "normal",
    

 };
 const h1texttitle = {
   backgroundColor: 'white',
   fontWeight: 800,
   fontSize:"20px",
   color:'#1C284C'

   
};
 const content_text ={
    backgroundColor: 'transparent',
    width: '85%',
    color: "#1C284C",
   fontFamily: "Inter",
   fontSize: "15px",
   fontStyle: "normal",
   fontWeight: 400,
   lineHeight: "normal",

 };

 const texto ={ 
    fontSize:'15px' 
 };

 const boton = {
   backgroundColor: '#CBF000',
   borderRadius: '37.867px',
   color: "#1C284C",
   fontFamily: "Inter",
   fontSize: "13px", 
   fontWeight: 900,
   lineHeight: "normal",
   width: '135px',
   height: '35.218px',
   display:'flex',
   flexDirection:'row',
   gap:5,
   justifyContent:'center',
   alignItems:'center'
   
};

const content_button = {
   backgroundColor: 'transparent',
   width: '50%',
   alignItems: 'center',
   display: 'flex',
   position: 'relative',
   justifyContent:'center',
   cursor: 'pointer', 
};
const general_button = {
   display: 'flex',
   justifyContent: 'flex-end',
   padding: '10px', 
   backgroundColor: 'transparent',
};


const derecha_ = {
   backgroundColor: 'white',
   display:'flex',
   flexDirection:'column',
   gap:32 
};
const derecha_int = {
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
const imager={
   width: '100%',
   height:'100%',

}

const hoverimage = {
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   backgroundImage: 'none', // Imagen inicial
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   zIndex: -1 // Para enviarla detrás del contenido
};

const Cards = () => {
   const [hover, setHover] = React.useState(false);
   const [hoveredCard, setHoveredCard] = useState(null);
   const [hovered, setHovered] = useState(false);
   const [hoveredtext, setHoveredtext] = useState(false);
  return (
   
<div style={generalcardbody}>

<div style={bodycard} >
{data.cards.map((card) => (
  <div
    key={card.id}
    style={cards}
    onMouseEnter={() => setHovered(card.id)} // Al pasar el mouse, establece el id de la tarjeta
    onMouseLeave={() => setHovered(null)} // Al quitar el mouse, borra el id
  >
    <div style={insidecards}>
      {/* Imagen */}
      <div style={fatherimage}>
        <img
          src={card.image}
          alt={card.title}
          style={{
            ...image,
            transform: hovered === card.id ? 'scale(1.2)' : 'scale(1)',  // Solo hace zoom si el id coincide
            transition: 'transform 0.3s ease',  // Suaviza la animación
            objectFit: 'cover',  // Asegura que la imagen se ajuste bien
            transformOrigin: 'center',  // Centra el zoom
          }}
        />
      </div>

      {/* Título */}
      <div style={fathertitle}>
        <div style={h1text}>
          <p style={h1texttitle}>{card.title}</p>
        </div>

        {/* Descripción */}
        <div style={content_text}>
          <p style={texto}>{card.description}</p>
        </div>
      </div>
    </div>
    
    {/* Botón */}
    <div
      style={{
        ...general_button,
        
      }}

    >
      <div style={content_button}>
        <div style={{...boton,
        backgroundColor: hoveredtext === card.id ? '#1C284C' : '#CBF000', // Cambia el fondo a azul cuando el mouse pasa
        color: hoveredtext === card.id ? '#CBF000' : '#273243', // Cambia el color del texto a blanco
        transition: 'background-color 0.3s ease, color 0.3s ease', // Suaviza la transición de color
        
        }}
        onMouseEnter={() => setHoveredtext(card.id)} // Al pasar el mouse, establece el id de la tarjeta
        onMouseLeave={() => setHoveredtext(null)} // Al quitar el mouse, borra el id
        >

          <div>{card.buttonText}</div>
          <div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              style={{
                fill: hoveredtext === card.id ? '#CBF000' : '#273243', // Cambia el color del SVG a blanco cuando pasa el mouse
                transition: 'fill 0.3s ease', // Suaviza el cambio de color del SVG
              }}
            >
              <path d="M0.774162 12.6663L5.59297 7.84749L0.774161 3.02868C0.289797 2.54432 0.289797 1.76188 0.774161 1.27752C1.25853 0.793155 2.04096 0.793155 2.52533 1.27752L8.22592 6.97812C8.71029 7.46248 8.71029 8.24492 8.22592 8.72928L2.52533 14.4299C2.04096 14.9142 1.25853 14.9142 0.774162 14.4299C0.302217 13.9455 0.289797 13.1507 0.774162 12.6663Z"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  </div>
))}

</div>




   <div style={derecha_}>
      <div style={Titulo_general}>
         <h5 style={titulo_derecha}>Publicaciones </h5>
         <p style={titulo_derecha_in}>Recientes</p>
      </div>
      {data.cards.map((card) => (
   <div
      key={card.id}
      style={{
         ...derecha_int,
         position: 'relative', // Necesario para que los elementos se apilen
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
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
            zIndex: 1, // Asegura que la imagen esté debajo del texto
         }}
      ></div>

      {/* Contenedor de texto */}
      <div
         style={{
            ...derecha_int_text,
            position: 'relative',
            zIndex: 2, // Hace que el texto esté por encima de la imagen
         }}
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

 </div>



  );
};

export default Cards;


