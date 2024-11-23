
# Proyecto React con Vite

Este proyecto está construido con React utilizando Vite como herramienta de compilación. A continuación se detallan las instrucciones para configurar y ejecutar el proyecto localmente.

## Requisitos Previos

- **Node.js**: [Descargar e instalar Node.js](https://nodejs.org/)
- **Yarn**: [Descargar e instalar Yarn](https://classic.yarnpkg.com/en/docs/install/)

Para verificar que Node.js y Yarn están instalados correctamente, ejecuta los siguientes comandos en tu terminal:


```bash
node -v
yarn -v
```

## 1. Descripción General del Proyecto

**Nombre del proyecto:** Web Ontario  
**Propósito:** Web Ontario es una página web desarrollada para la empresa inmobiliaria "Ontario". El objetivo principal de esta web es la promoción de los proyectos inmobiliarios de la empresa, proporcionando a los usuarios galerías de imágenes y videos, ubicación geográfica de los proyectos, formularios de contacto para consultas, y secciones con los términos y condiciones del uso del sitio web, entre otras funcionalidades. El sitio busca ofrecer una experiencia interactiva y visualmente atractiva para atraer potenciales compradores.

## 2. Tecnologías Utilizadas

El proyecto utiliza una variedad de tecnologías modernas para lograr su funcionalidad. A continuación se detallan las tecnologías empleadas:

- **React.js**: Biblioteca de JavaScript utilizada para construir interfaces de usuario mediante componentes reutilizables.
- **Vite**: Bundler rápido y moderno utilizado tanto en el entorno de desarrollo como en el proceso de compilación, con recarga rápida.
- **Axios**: Biblioteca para realizar solicitudes HTTP desde el navegador, usada para la comunicación con servidores y APIs.
- **React Router Dom**: Maneja la navegación dentro de la aplicación sin necesidad de recargar la página.
- **Bootstrap**: Framework de CSS utilizado para crear interfaces web responsivas y atractivas.
- **Sass**: Preprocesador de CSS que permite escribir estilos más estructurados y fáciles de mantener.
- **Formik**: Biblioteca para gestionar formularios en React, facilitando la manipulación de datos y validaciones.
- **Yup**: Biblioteca para la validación de formularios, utilizada en conjunto con Formik.
- **Swiper**: Biblioteca para la creación de carruseles de imágenes, usada en las galerías de proyectos inmobiliarios.
- **i18next**: Herramienta de internacionalización que permite la traducción del contenido del sitio a diferentes idiomas.
- **Normalize.css**: Biblioteca CSS pequeña para asegurar la consistencia en el estilo de los elementos HTML entre diferentes navegadores.

## 3. Scripts Disponibles

En el proyecto, se definen los siguientes scripts que puedes ejecutar con Yarn:

- `yarn dev`: Inicia el servidor de desarrollo.
- `yarn build`: Genera una versión optimizada para producción.
- `yarn lint`: Ejecuta ESLint para verificar el código.
- `yarn preview`: Sirve la versión de producción generada por `build`.

## 4. Instalación

1. Clonar el repositorio:

```bash
git clone <URL del repositorio>
```

2. Instalar las dependencias:

```bash
yarn install
```

3. Iniciar el servidor de desarrollo:

```bash
yarn dev
```


## 5. Puesta en Producción

Para desplegar la aplicación en producción, sigue estos pasos:

1. **Construir el proyecto**:

   Utiliza el siguiente comando para generar una versión optimizada del proyecto. Este comando creará una carpeta `dist/` que contiene los archivos optimizados y listos para ser desplegados en un servidor.

   ```bash
   yarn build
   ```

2. **Verificar la compilación**:

   Una vez completada la compilación, puedes ejecutar el siguiente comando para verificar cómo se verá la aplicación en producción:

   ```bash
   yarn preview
   ```

   Este comando iniciará un servidor que te permitirá previsualizar la aplicación optimizada localmente.

3. **Subir los archivos al servidor**:

   Sube los archivos generados en la carpeta `dist/` a tu servidor o plataforma de hosting. Algunas opciones populares son:

   - **Netlify**: Compatible con proyectos basados en Vite. Simplemente arrastra y suelta la carpeta `dist/` en su panel de despliegue.
   - **Vercel**: Crea un nuevo proyecto, enlaza tu repositorio y Vercel se encargará automáticamente de la puesta en producción.
   - **GitHub Pages**: Configura la carpeta `dist/` como la fuente de tu sitio en las configuraciones de GitHub Pages.
   - **Servidor propio (Apache/Nginx)**: Si estás usando un servidor propio, copia el contenido de la carpeta `dist/` al directorio raíz donde se ejecutará la aplicación.

4. **Configurar el servidor (opcional)**:

   Si estás utilizando un servidor propio (como Nginx o Apache), asegúrate de configurar las rutas correctamente. En una aplicación SPA (Single Page Application) como esta, es necesario redirigir todas las solicitudes de rutas a `index.html`. A continuación, un ejemplo de configuración para Nginx:

   ```nginx
   server {
       listen 80;
       server_name mydomain.com;

       location / {
           root /path/to/dist;
           try_files $uri /index.html;
       }
   }
   ```

5. **Ajustes en variables de entorno (opcional)**:

   Si tienes variables de entorno específicas para producción, asegúrate de configurar un archivo `.env.production` con los valores correctos. Esto puede incluir URLs de APIs, claves de servicios externos, entre otros.

6. **Implementar medidas de seguridad y rendimiento (opcional)**:

   - **HTTPS**: Asegúrate de que el sitio esté disponible a través de HTTPS utilizando un certificado SSL.
   - **Compresión de archivos**: Habilita la compresión gzip para optimizar el tiempo de carga de los archivos estáticos.
   - **Cache-Control**: Configura los encabezados de caché para mejorar el rendimiento de la aplicación.

---

## 6. Ejecución de ESLint

Para mantener el código limpio y organizado, puedes ejecutar ESLint utilizando el siguiente comando:

1. Ejecutar ESLint para revisar y corregir problemas en el código:

   ```bash
   yarn lint
   ```

2. Si deseas que ESLint intente corregir automáticamente los problemas encontrados, utiliza:

   ```bash
   yarn lint --fix
   ```

Este comando intentará corregir automáticamente los errores de estilo y advertencias que ESLint encuentre en tu código.


## 7. Estructura del Proyecto

A continuación se describe la estructura básica del proyecto:

```
ONTARIO-APP
│
├── docs/                     # Documentación generada para el proyecto.
├── node_modules/              # Dependencias del proyecto instaladas por Yarn.
├── public/                    # Archivos públicos que se servirán directamente.
│   ├── img/                   # Carpeta para almacenar imágenes públicas.
│   ├── video/                 # Carpeta para almacenar videos públicos.
│   └── vite.svg               # Archivo de logo predeterminado de Vite.
│
├── src/                       # Carpeta principal del código fuente.
│   ├── assets/                # Archivos estáticos como fuentes e imágenes.
│   ├── components/            # Componentes reutilizables de la aplicación.
│   ├── data/                  # Archivos de datos o configuraciones estáticas.
│   ├── hooks/                 # Custom Hooks de React utilizados en la app.
│   └── pages/                 # Carpetas de las páginas principales de la app.
│       ├── About/             # Página "Sobre nosotros".
│       ├── Apartments/        # Página de listado de apartamentos.
│       ├── Home/              # Página de inicio.
│       ├── Loader/            # Componente de cargador.
│       ├── Projects/          # Página para mostrar los proyectos inmobiliarios.
│       ├── Referrals/         # Página de referencias.
│       ├── SocialResponsibility/ # Página de responsabilidad social.
│       └── TermsConditions/   # Página de términos y condiciones.
│
├── App.css                    # Archivo de estilos globales de la aplicación.
├── App.jsx                    # Componente principal de React donde se renderizan las rutas.
├── i18n.js                    # Configuración de internacionalización (i18next).
├── index.scss                 # Estilos principales de la aplicación utilizando SCSS.
├── main.jsx                   # Punto de entrada principal del proyecto en React.
├── ScrollToTop.js             # Componente para volver automáticamente al inicio al cambiar de ruta.
├── .gitignore                 # Archivos y carpetas que se ignorarán en el control de versiones.
├── eslint.config.js           # Configuración de ESLint para la verificación de código.
├── index.html                 # Archivo HTML principal donde se monta la aplicación React.
├── jsdoc.json                 # Configuración de JSDoc para generar documentación del código.
├── package-lock.json          # Archivo de bloqueo de dependencias generado por Yarn.
├── package.json               # Archivo que define las dependencias y scripts del proyecto.
├── README.md                  # Documentación del proyecto.
├── vite.config.js             # Configuración de Vite para el empaquetado y desarrollo.
└── yarn.lock                  # Archivo que asegura que las dependencias se instalen de forma consistente.

```

## 8. Cambio de Contenido Multilingüe (i18n)

Este proyecto utiliza `i18next` para gestionar el contenido multilingüe de la página web. El contenido está disponible tanto en español como en inglés y se almacena en archivos JSON en la carpeta `/data`. Cada archivo JSON corresponde a una sección o página de la web, con versiones específicas para inglés (en) y español (es).

### Configuración de i18n

La configuración de `i18n` se realiza en el archivo `i18n.js`. Aquí es donde se importan los archivos JSON y se definen los recursos para cada idioma.

```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importación de archivos de traducción
import enFooterTranslation from './data/footer-content-en.json';
import esFooterTranslation from './data/footer-content-es.json';

import enHomeTranslation from './data/home-content-en.json';
import esHomeTranslation from './data/home-content-es.json';

// (otras importaciones...)

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enFooterTranslation,
        ...enHomeTranslation,
        // (otras traducciones en inglés...)
      }
    },
    es: {
      translation: {
        ...esFooterTranslation,
        ...esHomeTranslation,
        // (otras traducciones en español...)
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
```

### Estructura de los Archivos de Traducción

Los archivos JSON contienen el contenido de cada sección de la página web, organizado en un formato de clave-valor. Aquí puedes ver un ejemplo del contenido del footer (`footer-content-en.json` y `footer-content-es.json`):

#### Ejemplo de Estructura del Footer

```json
{
  "contact": {
    "title": "Contáctanos",
    "route": "/"
  },
  "about": {
    "title": "SOBRE ONTARIO",
    "items": [
      { "text": "Nosotros", "route": "/about" },
      { "text": "Política de Privacidad", "route": "/terms" },
      { "text": "Términos y Condiciones", "route": "/terms" }
    ]
  },
  "projects": {
    "title": "CONDOMINIOS",
    "categories": [
      {
        "name": "MEJÍA",
        "items": [
          { "text": "Santorini", "route": "/projects/santorini" },
          { "text": "Mykonos", "route": "/projects/mykonos" }
        ]
      },
      {
        "name": "PUNTA DE BOMBÓN",
        "items": [
          { "text": "Zafiro", "route": "/projects/zafiro" },
          { "text": "Punta Arena", "route": "/projects/punta-arena" },
          { "text": "Coral", "route": "/projects/coral" }
        ]
      },
      {
        "name": "LA JOYA",
        "items": [
          { "text": "Prado Piamonte", "route": "/projects/prado-piamonte" }
        ]
      }
    ]
  },
  "conditions": {
    "title": "UBÍCANOS",
    "items": [
      {
        "type": "address",
        "text": "Av. Víctor Andrés Belaunde N°405
Umacollo-Arequipa"
      },
      {
        "type": "phone",
        "text": "(054) 522 935",
        "href": "tel:054522935"
      },
      {
        "type": "phone",
        "text": "972 582 490",
        "href": "tel:972582490"
      },
      {
        "type": "email",
        "text": "contacto@ontario.com.pe",
        "href": "mailto:contacto@ontario.com.pe"
      }
    ]
  },
  "socialMedia": [
    {
      "src": "ico-face",
      "alt": "Facebook",
      "link": "https://www.facebook.com/inmobiliariaontario"
    },
    {
      "src": "ico-ins",
      "alt": "Instagram",
      "link": "https://www.instagram.com/ontarioinmobiliaria/"
    },
    {
      "src": "ico-tik",
      "alt": "TikTok",
      "link": "https://www.tiktok.com/@ontario_inmobiliaria"
    },
    {
      "src": "ico-you",
      "alt": "YouTube",
      "link": "https://www.youtube.com/@ontarioinmobiliaria9132"
    }
  ],
  "footerText": "2024 @ All rights reserved by ONTARIO",
  "footerComplaintBook": {
    "text": "Libro de Reclamaciones",
    "route": "/libro-de-reclamaciones"
  }
}
```

### Cómo Modificar el Contenido

Para cambiar el contenido de la página web:

1. **Ubica el archivo correspondiente**: Los archivos de contenido están organizados en la carpeta `/data`. Cada archivo tiene una versión en español (`-es.json`) y una versión en inglés (`-en.json`).
   
   Ejemplos:
   - `footer-content-en.json`: Contenido del footer en inglés.
   - `footer-content-es.json`: Contenido del footer en español.

2. **Edita las claves necesarias**: Cambia los valores de las claves en el archivo JSON. Por ejemplo, si quieres cambiar el texto de "Contáctanos" en la sección de contacto, debes editar la clave `"title"` en el archivo correspondiente.

3. **Guarda los cambios**: Una vez que hayas editado los archivos JSON, guarda los cambios y recarga la página para ver el contenido actualizado.

### Consideraciones

- **Idioma por defecto**: El idioma por defecto está configurado en español (`lng: 'es'`). Si quieres cambiar el idioma por defecto a inglés, simplemente cambia el valor de `lng` en la configuración de `i18n`.
- **Idioma de respaldo**: En caso de que falten traducciones en un idioma, `i18n` utilizará el idioma de respaldo, que está configurado como inglés (`fallbackLng: 'en'`).
