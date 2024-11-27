import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import styles from "./ReferralsForm.module.css";
import PropTypes from 'prop-types'; // Importa PropTypes para la validación de props

/**
 * Componente de formulario para referidos
 * @param {Object} data - Datos necesarios para el formulario
 */
function ReferralsForm({ data }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [showReferidoFields, setShowReferidoFields] = useState(false);

  const { documents, backgroundColor, texts } = data;

  // Esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    nombres: Yup.string().required(texts.namePlaceholder),
    apellidos: Yup.string().required(texts.surnamePlaceholder),
    correo: Yup.string()
      .email("Correo inválido")
      .required(texts.emailPlaceholder),
    documento: Yup.string().required(texts.documentPlaceholder),
    dni: Yup.string().required(texts.dniPlaceholder),
    celular: Yup.string()
      .matches(/^\d+$/, texts.celularRequired)
      .required(texts.celularRequired),
    nombreref: Yup.string().test('conditional-required', texts.referredNameRequired, function (value) {
      const { showReferidoFields } = this.parent;
      return !showReferidoFields || (showReferidoFields && !!value);
    }),
    apellidosref: Yup.string().test('conditional-required', texts.referredSurnameRequired, function (value) {
      const { showReferidoFields } = this.parent;
      return !showReferidoFields || (showReferidoFields && !!value);
    }),
    documentoref: Yup.string().test('conditional-required', texts.referredDocumentRequired, function (value) {
      const { showReferidoFields } = this.parent;
      return !showReferidoFields || (showReferidoFields && !!value);
    }),
    dniref: Yup.string().test('conditional-required', texts.referredDniRequired, function (value) {
      const { showReferidoFields } = this.parent;
      return !showReferidoFields || (showReferidoFields && !!value);
    }),
    celularref: Yup.string().test('conditional-required', texts.referredPhoneRequired, function (value) {
      const { showReferidoFields } = this.parent;
      return !showReferidoFields || (showReferidoFields && /^\d+$/.test(value));
    }),
    termsCheck: Yup.boolean().oneOf([true], texts.termsLabel1),
  });

  // Inicializa Formik
  const formik = useFormik({
    initialValues: {
      nombres: "",
      apellidos: "",
      correo: "",
      documento: "",
      dni: "",
      celular: "",
      nombreref: "",
      apellidosref: "",
      documentoref: "",
      dniref: "",
      celularref: "",
      termsCheck: false,
      showReferidoFields: false,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {

      // Encontrar el nombre del documento seleccionado
      const selectedDocument = documents.find(doc => doc.id === values.documento)?.label || '';

      // Encontrar el nombre del proyecto seleccionado, si aplica
      const selectedProject = projects.find(proj => proj.id === values.proyecto)?.label || '';

      try {
        // URL del Google Apps Script
        const response = await fetch("https://script.google.com/macros/s/AKfycbzCFshU04SJXOahUE9uo5sh4Bi0AECLv7s_Kx1dJdP_IUClLOmXeyjwAyUvwcOPEq2Cww/exec", {
          method: "POST",
          mode: "no-cors",  // Modo necesario para esta solicitud
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            ...values, 
            formType: "Referidos",
            documentName: selectedDocument, // Agregar el nombre del documento seleccionado
            projectName: selectedProject // Agregar el nombre del proyecto seleccionado, si corresponde }),
          }),
        });
    
        // Como estamos usando mode: "no-cors", no podemos confiar en el estado de la respuesta
        // Asumimos que si no hay error en fetch, el envío fue exitoso
        resetForm();
        setSuccessMessage("Datos enviados correctamente.");
        setTimeout(() => setSuccessMessage(""), 3000);
    
      } catch (error) {
        // Manejo de errores en caso de problemas con la solicitud
        console.error("Error en la solicitud:", error.message);
        setSuccessMessage("Error al enviar los datos. Intenta nuevamente.");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    }
  });

  // Función para alternar la visibilidad de los campos de referido
  const toggleReferidoFields = () => {
    const newValue = !formik.values.showReferidoFields;
    setShowReferidoFields(newValue);
    formik.setFieldValue('showReferidoFields', newValue); // Actualiza el valor en Formik
  };

  return (
    <div className={styles.cardCustomForm} style={{ backgroundColor }}>
      <div className={styles.formCustom}>
        <h4 className={styles.customTitle}>
          {texts.formTitle}
        </h4>

        <div className={styles.circleContainer}>
          <div
            className={`${styles.circle} ${
              showReferidoFields ? styles.outline : styles.filled
            }`}
          >
            1
          </div>
          <div
            className={`${styles.circle} ${
              showReferidoFields ? styles.filled : styles.outline
            }`}
          >
            2
          </div>
        </div>

        {successMessage && (
          <div className={styles["success-message"]}>{successMessage}</div>
        )}
        <form
          className={`${styles.gridForm} needs-validation`}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          {/* Input de nombres */}
          <div className={styles.formGroup}>
            <input
              type="text"
              className={`${styles.inputSmall} form-control form-control-sm`}
              id="nombres"
              name="nombres" // Atributo 'name' para Formik
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
              className={`${styles.inputSmall} form-control form-control-sm`}
              id="apellidos"
              name="apellidos" // Atributo 'name' para Formik
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
              className={`${styles.inputSmall} form-control form-control-sm`}
              id="correo"
              name="correo" // Atributo 'name' para Formik
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
              className={`form-select form-select-sm ${styles.inputGroupSmall}`}
              id="documento"
              name="documento" // Atributo 'name' para Formik
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
              className={`${styles.inputSmall} form-control form-control-sm`}
              id="dni"
              name="dni" // Atributo 'name' para Formik
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

          {/* Input de teléfono principal */}
          <div className={styles.formGroupFull}>
            <PhoneInput
              country={"pe"}
              enableAreaCodes={true} // Booleano, no string
              value={formik.values.celular}
              onChange={(phone) => formik.setFieldValue("celular", phone)}
              placeholder={texts.phonePlaceholder || "Introduce tu número de teléfono"}
              inputClass={`form-control ${styles.inputSmall2} ${styles.phoneInput}`}
              containerClass={styles.phoneInputContainer}
              buttonClass={styles.phoneInputButton}
              dropdownClass={styles.phoneInputDropdown}
              enableSearch={true}
              countryCodeEditable={false}
              name="celular" // Atributo 'name' para Formik
            />
            {formik.touched.celular && formik.errors.celular ? (
              <div className={styles["error-message"]}>
                {formik.errors.celular}
              </div>
            ) : (
              <div className={styles["error-message"]}></div>
            )}
          </div>

          <p className={styles.conditions}>{texts.conditionsLabel}</p>

          {/* Botón para agregar referidos */}
          <div className={styles.formGroupFull}>
            <div className={styles.refered}>
              <p className={styles.register}>
              {texts.registerReferrals} <span>{texts.referrals}</span>
              </p>
              <button
                type="button"
                className={`rounded-pill ${styles.button}`}
                onClick={toggleReferidoFields} // Cambia los estilos al hacer clic
              >
                {texts.addReferralButton}
                <span className={`icon ico-plus ${styles.iconForm}`}></span>
              </button>
            </div>
          </div>

          {/* Campos de referido */}
          {showReferidoFields && (
            <>
              {/* Input de nombre del referido */}
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={`${styles.inputSmall} form-control form-control-sm`}
                  id="nombreref"
                  name="nombreref" // Atributo 'name' para Formik
                  placeholder={texts.referredNamePlaceholder}
                  value={formik.values.nombreref}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.nombreref && formik.errors.nombreref ? (
                  <div className={styles["error-message"]}>
                    {formik.errors.nombreref}
                  </div>
                ) : (
                  <div className={styles["error-message"]}></div>
                )}
              </div>

              {/* Input de apellidos del referido */}
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={`${styles.inputSmall} form-control form-control-sm`}
                  id="apellidosref"
                  name="apellidosref" // Atributo 'name' para Formik
                  placeholder={texts.referredSurnamePlaceholder}
                  value={formik.values.apellidosref}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.apellidosref && formik.errors.apellidosref ? (
                  <div className={styles["error-message"]}>
                    {formik.errors.apellidosref}
                  </div>
                ) : (
                  <div className={styles["error-message"]}></div>
                )}
              </div>

              {/* Select de documento del referido */}
              <div className={styles.formGroup}>
                <select
                  className={`form-select form-select-sm ${styles.inputGroupSmall}`}
                  id="documentoref"
                  name="documentoref" // Atributo 'name' para Formik
                  value={formik.values.documentoref}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option disabled value="">
                    {texts.referredDocumentPlaceholder}
                  </option>
                  {documents.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.label}
                    </option>
                  ))}
                </select>
                {formik.touched.documentoref && formik.errors.documentoref ? (
                  <div className={styles["error-message"]}>
                    {formik.errors.documentoref}
                  </div>
                ) : (
                  <div className={styles["error-message"]}></div>
                )}
              </div>

              {/* Input de DNI del referido */}
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={`${styles.inputSmall} form-control form-control-sm`}
                  id="dniref"
                  name="dniref" // Atributo 'name' para Formik
                  placeholder={texts.referredDniPlaceholder}
                  value={formik.values.dniref}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dniref && formik.errors.dniref ? (
                  <div className={styles["error-message"]}>
                    {formik.errors.dniref}
                  </div>
                ) : (
                  <div className={styles["error-message"]}></div>
                )}
              </div>

              {/* Input de teléfono del referido */}
              <div className={styles.formGroupFull}>
                <PhoneInput
                  country={"pe"}
                  enableAreaCodes={true} // Booleano, no string
                  value={formik.values.celularref}
                  onChange={(phone) => formik.setFieldValue("celularref", phone)}
                  placeholder={
                    texts.referredPhonePlaceholder ||
                    "Introduce el número de teléfono del referido"
                  }
                  inputClass={`form-control ${styles.inputSmall2} ${styles.phoneInput}`}
                  containerClass={styles.phoneInputContainer}
                  buttonClass={styles.phoneInputButton}
                  dropdownClass={styles.phoneInputDropdown}
                  enableSearch={true}
                  countryCodeEditable={false}
                  name="celularref" // Atributo 'name' para Formik
                />
                {formik.touched.celularref && formik.errors.celularref ? (
                  <div className={styles["error-message"]}>
                    {formik.errors.celularref}
                  </div>
                ) : (
                  <div className={styles["error-message"]}></div>
                )}
              </div>
            </>
          )}

          {/* Checkbox de términos y condiciones */}
          <div className={styles.formGroupFull}>
            <div className={`${styles.customTerms} form-check`}>
              <input
                className={`${styles.formCheckInput} form-check-input`}
                type="checkbox"
                id="termsCheck"
                {...formik.getFieldProps('termsCheck')}
              />
              <label className={styles.formCheckLabel} htmlFor="termsCheck">
                {texts.termsLabel1}
              </label>
              {formik.touched.termsCheck && formik.errors.termsCheck && (
                <div className={styles["error-message"]}>{formik.errors.termsCheck}</div>
              )}
            </div>
          </div>

          {/* Botón de enviar */}
          <div className={`${styles.formGroupFull} text-center`}>
            <button
              className={`rounded-pill ${styles.formButton}`}
              type="submit"
            >
              {texts.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Validación de props
ReferralsForm.propTypes = {
  data: PropTypes.shape({
    documents: PropTypes.array.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    texts: PropTypes.object.isRequired,
  }).isRequired,
};

export default ReferralsForm;