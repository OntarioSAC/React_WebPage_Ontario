import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
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
import Loader from './pages/Loader/Loader';
import Complaints from './pages/Complaints/complaints';
import News from './pages/News/News';
import CardDetail from './pages/News/Content/developednews/developednews';

/**
 * Componente principal de la aplicación.
 * @component
 */

const App = () => {
  const { i18n } = useTranslation();
  const loc = useLocation();
  const navigate = useNavigate();
  const [autoFocus, setAutoFocus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false); // Este es el estado para manejar la carga de la página
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
    setAutoFocus(true);
    if (loc.pathname !== "/") {
      navigate("/", { state: { scrollToForm: true } });
    } else if (formRef) {
      formRef.scrollIntoView({ behavior: 'smooth' });
      formRef.focusFirstInput();
    }
  };

  useEffect(() => {
    // Simulamos la carga con setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // Cambiamos a false después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Si está cargando, mostramos el Loader encima del contenido */}
      {loading && (
        <div
          style={{
            position: 'fixed', // Fijamos el Loader en la pantalla
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 1.0)', // Fondo semi-transparente para cubrir el contenido
            zIndex: 9999, // Aseguramos que el Loader esté encima de todos los elementos
          }}
        >
          <Loader />
        </div>
      )}

      <Header key={loc.pathname} changeLanguage={changeLanguage} />
      
      {/* El contenido principal se renderiza aquí */}
      <main style={{ opacity: loading ? 0.5 : 1, transition: 'opacity 0.5s' }}>
        <Routes>
          <Route path="/" element={
            <Home 
              setFormRef={setFormRef} 
              autoFocus={autoFocus} 
              setAutoFocus={setAutoFocus} 
              setPageLoaded={setPageLoaded} 
            />
          } />
          <Route path="/about" element={<About setPageLoaded={setPageLoaded} />} />
          <Route path="/projects/:projectId" element={<Projects setPageLoaded={setPageLoaded}/>} />
          <Route path="/apartments/:apartmentId" element={<Apartments setPageLoaded={setPageLoaded} />} />
          <Route path="/social-responsibility" element={<SocialResponsibility setPageLoaded={setPageLoaded} />} />
          <Route path="/referrals" element={<Referrals setPageLoaded={setPageLoaded} />} />
          <Route path="/terms" element={<TermsConditions setPageLoaded={setPageLoaded} />} />
          <Route path="/complaints" element={<Complaints setPageLoaded={setPageLoaded} />} />
          <Route path="/news" element={<News setPageLoaded={setPageLoaded}/>} />
          <Route path="/card/:id" element={<CardDetail setPageLoaded={setPageLoaded} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer onContactClick={scrollToForm} />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

export default AppWrapper;
