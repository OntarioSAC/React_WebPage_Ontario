import React from "react";

const tabsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "2rem auto", // Centra el contenedor en la página
  marginTop: '-55px',
  backgroundColor: "var(--primary-color)",
  borderTopLeftRadius: "40px", // Esquina superior izquierda
  borderBottomRightRadius: "40px", // Esquina inferior derecha
  padding: "1.3rem", // Espaciado superior
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra para un mejor diseño
  width: "60%", // Ajusta el ancho
  zIndex: 10, // Asegura que esté por encima de la imagen
};

const tabStyle = {
  backgroundColor: "var(--primary-color)",
  color: "var(--secondary-color)",
  padding: "0.5rem 1.5rem",
  margin: "0 0.5rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold", // Texto en negrita
  fontSize: "1rem", // Ajusta el tamaño del texto
  borderRadius: "15px", // Bordes redondeados para cada botón
  transition: "all 0.3s ease", // Animación en hover
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: "var(--secondary-color)",
  color: "var(--primary-color)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Resalta la pestaña activa
  padding: "1.4rem", // Espaciado interno

};

const NewsTabs = () => {
  return (
    <div style={tabsContainerStyle}>
      <button style={activeTabStyle}>Todo</button>
      <button style={tabStyle}>Lanzamientos</button>
      <button style={tabStyle}>Avances de Obra</button>
      <button style={tabStyle}>Celebridades y Embajadores</button>
      <button style={tabStyle}>Eventos y Ferias</button>
      <button style={tabStyle}>Prensa</button>
    </div>
  );
};

export default NewsTabs;
