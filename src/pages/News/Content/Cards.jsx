
import { bottom, right } from '@popperjs/core';
import { Button } from 'bootstrap';

import { useNavigate } from "react-router-dom";
import data from "../../../data/new-content-cards.json"; // Asegúrate de que este archivo contiene las tarjetas


import React from 'react';

const generalcardbody = {
   backgroundColor: 'white',
   display:'flex',
   flexDirection:'row',
   justifyContent:'center',
   height:'1600px'
};
const bodycard ={
   backgroundColor:'white',
   width: '45%',
   position:'relative',
   display:'flex',
   flexDirection:'row',
   rowGap: '72px', 
   columnGap: '36px', 
   flexWrap: 'wrap',
   justifyContent: 'center'
};
  const titleStyle = {
    fontSize: 15,
    
  };
  

const cards ={
    backgroundColor: 'orange',
    height:'501px',
    width: '374px',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"

 };
 const imagen_padre={
    backgroundColor: 'transparent',
    borderTopRightRadius: '30px',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
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
    backgroundColor: 'transparent',
    width: '85%',
    fontFamily: "Inter",
    lineHeight: "normal",
    fontStyle: "normal",
    

 };
 const contenidotext ={
    backgroundColor: 'white',
    width: '85%',
    color: "#1C284C",
   fontFamily: "Inter",
   fontSize: "15px",
   fontStyle: "normal",
   fontWeight: 400,
   lineHeight: "normal",

 

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
    backgroundColor: 'transparent',
    color: "#1C284C",
    fontFamily: "Inter",
    fontSize: "13px", 
    fontWeight: 900,
    lineHeight: "normal",
 };
 const contenedor_boton = {
    backgroundColor: '#CBF000',
    width: '135px',
    height:'35.218px',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    borderRadius:'37.867px',
    flexDirection:'row',
    position:'absolute',
    
};
const contenedor_boton_general={
   width: '90%',
   display:'flex',
   backgroundColor: 'blue',
   justifyContent: 'flex-end',
   
}
const h1_text_titulo = {
   backgroundColor: 'white',
   fontWeight: 800,
   fontSize:"20px",
   color:'#1C284C'

   
};

const derecha_ = {
   backgroundColor: 'white',
   display:'flex',
   flexDirection:'column',
   gap:32 
};
const derecha_int = {
   backgroundColor: 'white',
   width: '374px',
   height:'190px',
   borderTopRightRadius: '30px',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    border: '2px solid #1C284C',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:35
};
const derecha_int_text = {
   backgroundColor: 'white',
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
   backgroundColor: 'white',
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
const Cards = () => {
  return (
   
<div style={generalcardbody}>

<div style={bodycard}>
   {data.cards.map((card) => (
     <div key={card.id} style={cards}>

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
         <div style={contenedor_boton_general}>
            <div style={contenedor_boton}>

               <p style={boton}>
                  {card.buttonText}
               </p>

               <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                     <path d="M0.774162 12.6663L5.59297 7.84749L0.774161 3.02868C0.289797 2.54432 0.289797 1.76188 0.774161 1.27752C1.25853 0.793155 2.04096 0.793155 2.52533 1.27752L8.22592 6.97812C8.71029 7.46248 8.71029 8.24492 8.22592 8.72928L2.52533 14.4299C2.04096 14.9142 1.25853 14.9142 0.774162 14.4299C0.302217 13.9455 0.289797 13.1507 0.774162 12.6663Z" fill="#1C284C"/>
                  </svg>
               </p>
               
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
   {data.notiMini.map((noti) => (
   <div key={noti.id}  style={derecha_int}>
      <div style={derecha_int_text}>
         <h2 style={text_texto_dere}>{noti.title}</h2>
      </div>
      <div style={derecha_int_fecha_cuerpo} >
         <p style={derecha_int_fecha}>{noti.fecha}</p>
      </div>
      
   </div>
   ))}
 </div>

 </div>



  );
};

export default Cards;


