import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importaciones de archivos de traducción
import enFooterTranslation from './data/footer-content-en.json';
import esFooterTranslation from './data/footer-content-es.json';

import enHomeTranslation from './data/home-content-en.json';
import esHomeTranslation from './data/home-content-es.json';

import enAboutTranslation from './data/about-content-en.json';
import esAboutTranslation from './data/about-content-es.json';

import enSocialTranslation from './data/social-content-en.json';
import esSocialTranslation from './data/social-content-es.json';

import enProjectsTranslation from './data/projects-content-en.json';
import esProjectsTranslation from './data/projects-content-es.json';

import enApartmentTranslation from './data/apartments-content-en.json';
import esApartmentTranslation from './data/apartments-content-es.json';

import enReferralTranslation from './data/referrals-content-en.json';
import esReferralTranslation from './data/referrals-content-es.json';

import enTermsTranslation from './data/terms-content-en.json';
import esTermsTranslation from './data/terms-content-es.json';

import enHeaderTranslation from './data/header-content-en.json';
import esHeaderTranslation from './data/header-content-es.json';

// Configuración de i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Combinación de todas las traducciones en inglés
        ...enFooterTranslation,
        ...enHomeTranslation,
        ...enAboutTranslation,
        ...enSocialTranslation,
        ...enProjectsTranslation,
        ...enApartmentTranslation,
        ...enReferralTranslation,
        ...enTermsTranslation,
        ...enHeaderTranslation
      }
    },
    es: {
      translation: {
        // Combinación de todas las traducciones en español
        ...esFooterTranslation,
        ...esHomeTranslation,
        ...esAboutTranslation,
        ...esSocialTranslation,
        ...esProjectsTranslation,
        ...esApartmentTranslation,
        ...esReferralTranslation,
        ...esTermsTranslation,
        ...esHeaderTranslation
      }
    }
  },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo
  interpolation: {
    escapeValue: false // Permite el uso de HTML en las traducciones
  }
});

export default i18n;
