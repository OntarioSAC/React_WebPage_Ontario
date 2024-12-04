import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import styles from "./ContactForm.module.css";
import PropTypes from 'prop-types'; // Importar PropTypes para validación de props

/**
 * Componente de formulario de contacto con reenvío de ref
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.data - Datos necesarios para el formulario
 * @param {Array} props.data.documents - Lista de documentos
 * @param {Array} props.data.projects - Lista de proyectos
 * @param {boolean} props.data.showProjectSelect - Indica si se debe mostrar el selector de proyectos
 * @param {string} [props.data.projectId] - ID del proyecto seleccionado
 * @param {string} [props.data.backgroundColor] - Color de fondo del formulario
 * @param {Object} props.data.texts - Textos para los placeholders y etiquetas
 * @param {boolean} [props.autoFocus] - Indica si el primer campo debe recibir el foco automáticamente
 * @param {React.Ref} ref - Referencia para el formulario
 */
const ContactForm = React.forwardRef(({ data, autoFocus }, ref) => {
  const [successMessage, setSuccessMessage] = useState("");

  const formRef = useRef(null);
  const firstInputRef = useRef(null);

  // Efecto para manejar el reenvío de ref
  useEffect(() => {
    if (ref && typeof ref === 'object' && 'current' in ref) {
      ref.current = {
        scrollIntoView: () => formRef.current?.scrollIntoView({ behavior: "smooth" }),
        focusFirstInput: () => firstInputRef.current?.focus(),
      };
    }
  }, [ref]);

  // Efecto para manejar el enfoque automático
  useEffect(() => {
    if (autoFocus && formRef.current && firstInputRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      firstInputRef.current.focus();
    }
  }, [autoFocus]);

  const {
    documents,
    projects,
    showProjectSelect,
    projectId,
    backgroundColor,
    texts,
  } = data;

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    nombres: Yup.string().required(texts.namePlaceholder),
    apellidos: Yup.string().required(texts.surnamePlaceholder),
    correo: Yup.string()
      .email("Correo inválido")
      .required(texts.emailPlaceholder),
    documento: Yup.string().required(texts.documentPlaceholder),
    dni: Yup.string().required(texts.dniPlaceholder),
    celular: Yup.string().required(
      "Por favor, ingresa un número de teléfono válido."
    ),
    proyecto: showProjectSelect
      ? Yup.string().required(texts.projectPlaceholder)
      : Yup.string(),
    termsCheck: Yup.boolean().oneOf([true], texts.termsLabel1),
    termsCheck2: Yup.boolean(),
  });

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      nombres: "",
      apellidos: "",
      correo: "",
      documento: "",
      dni: "",
      celular: "",
      proyecto: showProjectSelect ? "" : projectId,
      termsCheck: false,
      termsCheck2: false,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Datos del formulario:", values); // Agrega este console.log para depurar
      
      const payload = {
        fname: values.nombres,
        lname: values.apellidos,
        email: values.correo,
        phone: `+${values.celular}`,
        document: values.dni,
        project_id: values.proyecto || null, // Opcional
        document_type_id: values.documento,
        input_channel_id: 19,
        source_id: 4,
        interest_type_id: 15, // Siempre será 15
        address: values.address || null, // Opcional
        observation: values.observation || null, // Opcional
        extra_fields: {
          actividad_economica_de_la_empresa: values.actividadEconomica || null, // Opcional,
          ingresos_mensuales: values.ingresosMensuales || null, // Opcional,
        },
      };
      
      try {
        const response = await fetch("https://api.eterniasoft.com/v3/clients", {
          method: "POST",
          // mode: 'no-cors',
          header: {
            "Content-Type": "application/json",
            Authorization: "------",
          },
          body: JSON.stringify(payload),
        });
      
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error en la API:", errorData);
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      
        const result = await response.json();
        console.log("Respuesta exitosa:", result);
        resetForm();
        setSuccessMessage("Datos enviados correctamente.");
        setTimeout(() => setSuccessMessage(""), 3000);
      } catch (error) {
        console.error("Error en la solicitud:", error.message);
        setSuccessMessage("Error al enviar los datos. Intenta nuevamente.");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    },
  });

  return (
    <div className={styles.cardCustomForm} style={{ backgroundColor }}>
      <div className={styles.formCustom}>
        <h4 className={styles.customTitle}>
          {texts.formTitle} <span className={styles.customTitleBold}>{texts.formTitleBold}</span>
        </h4>
        {successMessage && (
          <div className={styles["success-message"]}>{successMessage}</div>
        )}
        <form
          ref={formRef}
          className={`${styles.gridForm} needs-validation`}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          {/* Input de nombres */}
          <div className={styles.formGroup}>
            <input
              ref={firstInputRef}
              type="text"
              className={`form-control ${styles.inputSmall}`}
              id="nombres"
              placeholder={texts.namePlaceholder}
              value={formik.values.nombres}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nombres && formik.errors.nombres ? (
              <div className={styles["error-message"]}>
                {formik.errors.nombres}
              </div>
            ) : (
              <div className={styles["error-message"]}></div>
            )}
          </div>

          {/* Input de apellidos */}
          <div className={styles.formGroup}>
            <input
              type="text"
              className={`form-control ${styles.inputSmall} `}
              id="apellidos"
              placeholder={texts.surnamePlaceholder}
              value={formik.values.apellidos}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.apellidos && formik.errors.apellidos ? (
              <div className={styles["error-message"]}>
                {formik.errors.apellidos}
              </div>
            ) : (
              <div className={styles["error-message"]}></div>
            )}
          </div>

          {/* Input de correo */}
          <div className={styles.formGroupFull}>
            <input
              type="email"
              className={`form-control ${styles.inputSmall}`}
              id="correo"
              placeholder={texts.emailPlaceholder}
              value={formik.values.correo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.correo && formik.errors.correo ? (
              <div className={styles["error-message"]}>
                {formik.errors.correo}
              </div>
            ) : (
              <div className={styles["error-message"]}></div>
            )}
          </div>

          {/* Select de documentos */}
          <div className={styles.formGroup}>
            <select
              className={`form-select  ${styles.inputGroupSmall}`}
              id="documento"
              value={formik.values.documento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option disabled value="">
                {texts.documentPlaceholder}
              </option>
              {documents.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.label}
                </option>
              ))}
            </select>
            {formik.touched.documento && formik.errors.documento ? (
              <div className={styles["error-message"]}>
                {formik.errors.documento}
              </div>
            ) : (
              <div className={styles["error-message"]}></div>
            )}
          </div>

          {/* Input de DNI */}
          <div className={styles.formGroup}>
            <input
              type="text"
              className={`form-control ${styles.inputSmall} `}
              id="dni"
              placeholder={texts.dniPlaceholder}
              value={formik.values.dni}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dni && formik.errors.dni ? (
              <div className={styles["error-message"]}>{formik.errors.dni}</div>
            ) : (
              <div className={styles["error-message"]}></div>
            )}
          </div>

          {/* Input de teléfono con selección de país */}
          <div className={styles.formGroupFull}>
            <PhoneInput
              country={"pe"}
              enableAreaCodes={"true"}
              value={formik.values.celular}
              onChange={(phone) => formik.setFieldValue("celular", phone)}
              placeholder={texts.phonePlaceholder}
              inputClass={`form-control ${styles.inputSmall2} ${styles.phoneInput}`}
              containerClass={styles.phoneInputContainer}
              buttonClass={styles.phoneInputButton}
              dropdownClass={styles.phoneInputDropdown}
              enableSearch={true}
              countryCodeEditable={false}
            />
            {formik.touched.celular && formik.errors.celular ? (
              <div className={styles["error-message"]}>
                {formik.errors.celular}
              </div>
            ) : (
              <div className={styles["error-message"]}></div>
            )}
          </div>

          {/* Select de proyectos (opcional) */}
          {showProjectSelect && (
            <div className={styles.formGroupFull}>
              <select
                className={`form-select ${styles.inputGroupSmall}`}
                id="proyecto"
                value={formik.values.proyecto}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled value="">
                  {texts.projectPlaceholder}
                </option>
                {projects.map((proj) => (
                  <option key={proj.id} value={proj.id}>
                    {proj.label}
                  </option>
                ))}
              </select>
              {formik.touched.proyecto && formik.errors.proyecto ? (
                <div className={styles["error-message"]}>
                  {formik.errors.proyecto}
                </div>
              ) : (
                <div className={styles["error-message"]}></div>
              )}
            </div>
          )}
          <p className={styles.conditions}>(*) {texts.conditionsLabel}</p>
          {/* Checkbox de términos y condiciones */}
          <div className={styles.formGroupFull}>
            <div className={`${styles.customTerms} form-check`}>
              <input
                className={`form-check-input ${styles.formCheckInput}`}
                type="checkbox"
                id="termsCheck"
                checked={formik.values.termsCheck}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className={styles.formCheckLabel} htmlFor="termsCheck">
                {texts.termsLabel1}
              </label>
              {formik.touched.termsCheck && formik.errors.termsCheck ? (
                <div className={styles["error-message"]}>
                  {formik.errors.termsCheck}
                </div>
              ) : (
                <div className={styles["error-message"]}></div>
              )}
            </div>
          </div>

          {/* Checkbox de publicidad */}
          <div className={styles.formGroupFull}>
            <div className={`${styles.customTerms} form-check`}>
              <input
                className={`form-check-input ${styles.formCheckInput}`}
                type="checkbox"
                id="termsCheck2"
                checked={formik.values.termsCheck2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className={styles.formCheckLabel} htmlFor="termsCheck2">
                {texts.termsLabel2}
              </label>
              {formik.touched.termsCheck2 && formik.errors.termsCheck2 ? (
                <div className={styles["error-message"]}>
                  {formik.errors.termsCheck2}
                </div>
              ) : (
                <div className={styles["error-message"]}></div>
              )}
            </div>
          </div>



          {/* Botón de enviar */}
          <div className={`${styles.formGroupFull} text-center`}>
            <button className={styles.formButton} type="submit">
              {texts.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

// Agregar el nombre de visualización
ContactForm.displayName = 'ContactForm';

// Validación de props
ContactForm.propTypes = {
  data: PropTypes.shape({
    documents: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    showProjectSelect: PropTypes.bool.isRequired,
    projectId: PropTypes.string,
    backgroundColor: PropTypes.string,
    texts: PropTypes.object.isRequired,
  }).isRequired,
  autoFocus: PropTypes.bool,
};

export default ContactForm;