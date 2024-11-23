
import { right } from '@popperjs/core';
import { Button } from 'bootstrap';

import { useNavigate } from "react-router-dom";
import data from "../../../data/new-content-cards.json"; // Asegúrate de que este archivo contiene las tarjetas


import React from 'react';

  const titleStyle = {
    fontSize: 15,
    
    

  };
  
 const cuerpo ={
    backgroundColor:'white',
    height: '600px',
    position:'relative',
    display:'flex',
    flexDirection:'row',
    gap:10
 }
;
const tarjeta ={
    backgroundColor: 'white',
    height:'501px',
    width: '374px',
    borderRadius: '15px'

 };
 const imagen_padre={
    backgroundColor: 'transparent',
    borderTopRightRadius: '15px',
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '19px',
    height: '216px',
    width: '100%',
    overflow:'hidden'
 };
 const imagen_ ={
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    
    
    
    

 };
 const h1_text ={
    backgroundColor: 'purple',
    width: '85%',
    
    
    
    

 };
 const contenidotext ={
    backgroundColor: 'green',
    width: '85%',
    
    
    
    

 };
 const h1_text_padre ={
    paddingTop:20,
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize:'20px'
    
    
    

 };
 const texto ={
   
    fontSize:'15px'
    
    
    

 };
 const boton ={
   
    backgroundColor: 'orange',
    fontSize:'13px',
    fontWeigh:400,
    display:'flex',
    padding:5,
    justifyContent: 'flex-end',
    
    
    

 };
 const contenedor_boton = {
    backgroundColor: 'red',
    width: '50%',
    position:'relative',
    
};
const h1_text_titulo = {
   backgroundColor: 'blue',
   fontWeigh:800,
   fontSize:"20px"

   
};
const Cards = () => {
  return (
   <div style={cuerpo}>
   {data.cards.map((card) => (
     <div key={card.id} style={tarjeta}>
       {/* Imagen */}
       <div style={imagen_padre}>
         <img
           src={card.image}
           alt={card.title}
           style={imagen_}
         />
       </div>
       {/* Título */}
       <div style={h1_text_padre}>
         <div style={h1_text}>
           <p style={h1_text_titulo}>{card.title}</p>
         </div>
         {/* Descripción */}
         <div style={contenidotext}>
           <p style={texto}>{card.description}</p>
         </div>
         {/* Botón */}
         <div style={contenedor_boton}>
           <p
             style={boton}
             onClick={() => handleRedirect(card.redirectTo)}
           >
             {card.buttonText || "Leer Más"}
           </p>
         </div>
       </div>
     </div>
   ))}
 </div>
  );
};

export default Cards;


