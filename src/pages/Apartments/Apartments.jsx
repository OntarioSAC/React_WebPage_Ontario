import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Apartments.module.css";

// Componentes
import VideoSlider from "../../components/Slide/VideoSlider";
import InfoBoxContent from "../../components/Modules/InfoBoxContent";
import ApartmentsProgress from "./Content/ApartmentsProgress";
import ApartmentsGallery from "./Content/ApartmentsGallery";
import ApartmentsLocationMap from "./Content/ApartmentsLocationMap";
import ApartmentsLeisureArea from "./Content/ApartmentsLeisureArea";
import WhatsappButton from "../../components/Modules/WhatsappButton";
import PromoBanner from "./Content/PromoBanner";

/**
 * Componente Apartments
 * Muestra la información detallada de un apartamento específico
 * 
 * @component
 * @returns {JSX.Element} - Renderiza el componente de apartamentos
 */
const Apartments = () => {
  const { apartmentId } = useParams();
  const { t, i18n } = useTranslation();
  const [selectedApartment, setSelectedApartment] = useState(null);
  const formRef = useRef(null);
  
  /**
   * Obtiene los datos del apartamento seleccionado
   * 
   * @function
   * @returns {void}
   */
  const fetchApartmentData = () => {
    const allApartmentsData = t("apartmentsData", { returnObjects: true });
    const apartment = allApartmentsData.find((p) => p.id === apartmentId);

    if (apartment && apartment !== selectedApartment) { 
      setSelectedApartment(apartment); // Asignar al estado
    } else {
      console.error(`Proyecto con ID ${apartmentId} no encontrado o ya está asignado`);
    }
  };

  // Efecto para cargar los datos del apartamento cuando cambia el ID o el idioma
  useEffect(() => {
    fetchApartmentData();
  }, [apartmentId, i18n.language]);

  // Muestra un mensaje de carga si aún no se han obtenido los datos del apartamento
  if (!selectedApartment) {
    return <div>{t("loading")}</div>;
  }

  const {
    slider: apartmentSliderData,
    infoBox: apartmentInfoBoxData,
    area: apartmentLeisureAreaData,
    gallery: apartmentGalleryData,
    virtual: apartmentVirtualData,
    promoBanner: apartmentPromoData,
    location: apartmentLocationMapData,
  } = selectedApartment;

  /**
   * Desplaza la vista al formulario y enfoca el primer input
   * 
   * @function
   * @returns {void}
   */
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      formRef.current.focusFirstInput();
    }
  };

  return (
    <>
      <VideoSlider data={apartmentSliderData} />
      <div className="container g-0">
        <div className={styles["custom-conten"]}>
          <div className={styles["over-lap"]}>
            <InfoBoxContent data={apartmentInfoBoxData} />
          </div>
        </div>
        <ApartmentsLeisureArea data={apartmentLeisureAreaData} formRef={formRef} />
        <ApartmentsGallery data={apartmentGalleryData} onButtonClick={scrollToForm} />
        <ApartmentsProgress data={apartmentVirtualData} />
        <PromoBanner data={apartmentPromoData} onButtonClick={scrollToForm}/>
        <ApartmentsLocationMap data={apartmentLocationMapData} />
        <div className="whatsapp">
          <WhatsappButton whatsappUrl="https://wa.me/+51915206928" />
        </div>
      </div>
    </>
  );
};

export default Apartments;
