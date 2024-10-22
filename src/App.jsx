import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importar hook de traducción
import './i18n'; // Importar configuración de i18n
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SocialResponsibility from './pages/SocialResponsibility/SocialResponsibility';
import Referrals from './pages/Referrals/Referrals';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';
import Apartments from './pages/Apartments/Apartments';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import Loader from './pages/Loader/Loader'; // Importar el loader


/**
 * Componente principal de la aplicación.
 * @component
 */
const App = () => {
  // Hooks y estados necesarios
  const { i18n } = useTranslation();
  const loc = useLocation();
  const navigate = useNavigate();
  const [autoFocus, setAutoFocus] = useState(false); // Estado para controlar el autoFocus
  const [loading, setLoading] = useState(true); // Estado para controlar el loading
  const [formRef, setFormRef] = useState(null);


  
  /**
   * Función para cambiar el idioma de la aplicación.
   * @param {string} lng - Código del idioma a cambiar.
   */
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  /**
   * Función para desplazarse y enfocar el formulario de contacto.
   */
  const scrollToForm = () => {
    setAutoFocus(true); // Activar autoFocus
    if (loc.pathname !== "/") {
      navigate("/", { state: { scrollToForm: true } });
    } else if (formRef) {
      formRef.scrollIntoView({ behavior: 'smooth' });
      formRef.focusFirstInput();
    }
  };

  // Efecto para simular la carga inicial de la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Después de 2 segundos, cambiamos el estado de loading
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Renderizar el componente Loader mientras la página está cargando
  if (loading) {
    return <Loader />;
  }



  
  // Estructura principal de la aplicación
  return (
    <>
      <Header key={loc.pathname} changeLanguage={changeLanguage} />
      <main>
        <Routes>
          {/* Definición de rutas y sus componentes correspondientes */}
          <Route path="/" element={<Home setFormRef={setFormRef} autoFocus={autoFocus} setAutoFocus={setAutoFocus} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:projectId" element={<Projects />} />
          <Route path="/apartments/:apartmentId" element={<Apartments />} /> 
          <Route path="/social-responsibility" element={<SocialResponsibility />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer onContactClick={scrollToForm} />
    </>
  );
};

/**
 * Componente envoltorio para proporcionar el Router y ScrollToTop.
 * @component
 */
const AppWrapper = () => (
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

export default AppWrapper;
