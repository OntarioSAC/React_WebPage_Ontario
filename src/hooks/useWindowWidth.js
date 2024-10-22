// src/hooks/useWindowWidth.js
import { useState, useEffect } from "react";

/**
 * Hook personalizado para obtener el ancho de la ventana.
 * @returns {number} El ancho actual de la ventana.
 */
function useWindowWidth() {
  // Estado para almacenar el ancho de la ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    // Agregar el event listener para el evento de redimensionamiento
    window.addEventListener("resize", handleResize);
    
    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

export default useWindowWidth;
