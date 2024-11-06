import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import VideoSlider from "../../components/Slide/VideoSlider";
import ProjectsProgress from "./Content/ProjectsProgress";
import ProjectsGallery from "./Content/ProjectsGallery";
import ProjectsLocationMap from "./Content/ProjectsLocationMap";
import ProjectsLeisureArea from "./Content/ProjectsLeisureArea";
import ProjectsSlider from "./Content/ProjectsSlider";
import InfoBoxContent from "../../components/Modules/InfoBoxContent";
import WhatsappButton from "../../components/Modules/WhatsappButton";

/**
 * Componente principal para mostrar detalles de proyectos.
 * 
 * @component
 * @returns {JSX.Element} El componente de proyectos.
 */
const Projects = () => {
  const { projectId } = useParams(); 
  const { t, i18n } = useTranslation(); 
  const [selectedProject, setSelectedProject] = useState(null);
  const formRef = useRef(null); // Crear referencia para el formulario

  /**
   * Función para obtener los datos del proyecto seleccionado.
   * 
   * @function
   */
  const fetchProjectData = () => {
    const allProjectsData = t('projectsData', { returnObjects: true });
    const project = allProjectsData.find((p) => p.id === projectId);

    if (project && project !== selectedProject) { 
      setSelectedProject(project); 
    } else {
      console.error(`Proyecto con ID ${projectId} no encontrado o ya está asignado`);
    }
  };

  // Efecto para cargar los datos del proyecto cuando cambia el ID o el idioma
  useEffect(() => {
    fetchProjectData();
  }, [projectId, i18n.language, t]);

  if (!selectedProject) {
    return <div>{t('loading') || 'Cargando...'}</div>; 
  }

  // Desestructuración de los datos del proyecto seleccionado
  const {
    slider: projectSliderData, 
    infoBox: projectInfoBoxData, 
    area: projectLeisureAreaData, 
    gallery: projectGalleryData, 
    progress: projectProgressData, 
    location: projectLocationMapData, 
    sliderProjects: relatedProjectsData, 
  } = selectedProject;

  /**
   * Función para desplazarse suavemente al formulario.
   * 
   * @function
   */
  const scrollToForm = () => {
    if (formRef.current && typeof formRef.current.scrollIntoView === 'function') {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      if (typeof formRef.current.focusFirstInput === 'function') {
        formRef.current.focusFirstInput();
      }
    }
  };

  return (
    <>
      <VideoSlider key={projectId} data={projectSliderData} />
      <div className="container g-0">
        <div className={styles["custom-conten"]}>
          <div className={styles["over-lap"]}>
            <InfoBoxContent data={projectInfoBoxData} />
          </div>
        </div>
        <ProjectsLeisureArea data={projectLeisureAreaData} formRef={formRef} projectId={projectId} />
        <ProjectsGallery data={projectGalleryData} onButtonClick={scrollToForm} />
        <ProjectsProgress data={projectProgressData} />
        <ProjectsLocationMap data={projectLocationMapData} />
        <ProjectsSlider data={relatedProjectsData} />
        <div className="whatsapp">
          <WhatsappButton />
        </div>
      </div>
    </>
  );
};

export default Projects;