import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2'; // Importa el componente de teléfono
import 'react-phone-input-2/lib/bootstrap.css'; // Importa el estilo de Bootstrap
import { useNavigate } from 'react-router-dom'; // Para la redirección

import styless from "./complaint.module.css";

const Complaints = () => {

    const [complaintNumber, setComplaintNumber] = useState(null); // Número de reclamo inicializado como null
    const [formData, setFormData] = useState({
        establecimiento: '',
        ruc: '',
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '+51',
        tipoDocumento: '',
        numDocumento: '',
        departamento: '',
        provincia: '',
        distrito: '',
        direccion: '',
        tipoBien: '',
        descripcionBien: '',
        valorProductoServicio: '',
        tipoReclamo: '',
        detalleReclamo: '',
        pedido: '',
        autorizacion: '',
        archivo: null, // Añade esta propiedad
    });

    const styles = {
        
        header: {
            textAlign: 'center',
            color: 'var(--secondary-color)',
            fontWeight: 'bold',
            marginBottom: '50px'
        },
        legalText: {
            fontSize: '14px',
            marginBottom: '20px',
            color: 'var(--secondary-color)'
        },
        formSection: {
            marginBottom: '20px',
        },
        formRow: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        formGroup: {
            marginBottom: '20px',
            width: '48%', // Ambos elementos tienen el mismo ancho
        },
        input: {
            width: '100%',
            padding: '10px',
            boxSizing: 'border-box', // Asegura que padding y border no afecten el tamaño final
            border: '1px solid var(--secondary-color)',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottomLeftRadius: '15px'
        },
        selectWrapper: {
            position: 'relative',
            display: 'inline-block',
            width: '100%',
        },
        customSelect: {
            width: '100%',
            padding: '10px',
            boxSizing: 'border-box',
            border: '1px solid var(--secondary-color)',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottomLeftRadius: '15px',
            appearance: 'none', // Remueve el estilo predeterminado del navegador
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") no-repeat right 10px center/16px, white`, // Ajuste del tamaño de la flecha
            backgroundSize: '25px',
            
        },
        displayBox: {
            backgroundColor: 'var(--secondary-color)',
            color: 'white',
            padding: '10px',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottomLeftRadius: '15px',
            minWidth: '35%',
            display: 'flex',
        },
        note: {
            fontSize: '12px',
            color: '#666',
        },
        dateSpan: {
            flex: 1,
            fontWeight: 'bold',
            paddingLeft: '10%',
        },
        separator: {
            borderTop: '1px solid #ccc',
            margin: '50px 0',
        },
        formTitle: {
            fontWeight: 'bold',
            marginBottom: '10px',
            marginTop: '45px',
        },

        phoneInputContainer: {
            // width: '48%',
            display: 'flex',
            // alignItems: 'center',
            // border: '1px solid var(--secondary-color)',
            
        },
        
        phoneInput: {
            width: '100%',
            border: "1px solid var(--secondary-color)",
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '0px',

            outline: "none",
       
            // boxSizing: 'border-box', // Asegura que padding y border no afecten el tamaño final
            // fontSize: 'inherit', // Asegura que la fuente sea igual
            flex: 1,

            padding: '10px',
            paddingLeft: '50px', /* Espacio después del separador */
            

        },

        inputSmall2: {
            fontSize: 'clamp(0.75rem, 0.5rem + 1vw, 1rem) !important',
            // padding: 'clamp(0.4rem, 0.3rem + 0.5vw, 0.6rem) clamp(0.5rem, 0.3rem + 0.5vw, 0.75rem) clamp(0.5rem, 0.3rem + 0.5vw, 0.75rem) 60px !important',
            borderRadius: '0.5em !important',
            width: '100%',
            border: "none",
            outline: "none",
       
            // boxSizing: 'border-box', // Asegura que padding y border no afecten el tamaño final
            // fontSize: 'inherit', // Asegura que la fuente sea igual
            flex: 1,
            // paddingLeft: '50px', /* Espacio después del separador */
            padding: '10px',
        },

        phoneInputButton: {
            backgroundColor: 'transparent', /* Fondo transparente */
            border: 'none',
            cursor: 'pointer', /* Cambia el cursor al seleccionar */
            display: 'flex',
            alignItems: 'center',
        },
        
       
        
    };

    

    // Obtiene la fecha actual formateada
    const today = new Date().toLocaleDateString('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // Función para calcular la fecha actual + 15 día
    const getNextDay = () => {
        const today = new Date(); // Fecha actual
        const tomorrow = new Date(today); // Copia la fecha actual
        tomorrow.setDate(today.getDate() + 15); // Añade 15 día
        return tomorrow.toLocaleDateString('es-PE', { // Formato local
            weekday: 'long', // Nombre del día (e.g., "Domingo")
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    useEffect(() => {
        
            const fetchLastComplaintNumber = async () => {
                try {
                    const response = await fetch(
                        "https://script.google.com/macros/s/AKfycbyRyUK4Nn2OV_D6_MH_qV0CzSO35QRTOVeYlSdURzUE_KQISXmjtkNo7GH8MIAn_fjF/exec"
                    );
                    const data = await response.json();

                    // Mostrar datos completos en la consola
                    console.log('Respuesta de la API:', data);
    
                    if (data.status === 'success') {
                        setComplaintNumber(data.lastComplaintNumber + 1); // Incrementar el número
                    } else {
                        throw new Error(data.message || 'Error desconocido al obtener el número de reclamo');
                    }
                } catch (error) {
                    console.error('Error al obtener el número de reclamo:', error);
                    setComplaintNumber('1'); // Valor predeterminado
                }
            };
    
            fetchLastComplaintNumber();
    
    }, []);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // console.log(`Cambiando ${name} a: ${value}`);

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Obtiene el archivo seleccionado
        setFormData((prevData) => ({
            ...prevData,
            archivo: file, // Añade el archivo al estado
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            telefono: value,
        }));
    };

    const handleNumericInput = (e) => {
        const numericValue = e.target.value.replace(/\D/g, ""); // Filtra caracteres no numéricos
        e.target.value = numericValue; // Actualiza directamente el valor del input
        handleInputChange(e); // Llama a handleInputChange para actualizar el estado
    };

    const handleAlphabeticInput = (e) => {
        const alphabeticValue = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ""); // Permite letras y espacios
        e.target.value = alphabeticValue; // Actualiza directamente el valor del input
        handleInputChange(e); // Llama a handleInputChange para actualizar el estado
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Datos que se enviarán:', formData); // Verifica los datos antes del envío

        try {
            let archivoBase64 = null;
    
            // Si hay un archivo, conviértelo a Base64
            if (formData.archivo) {
                const reader = new FileReader();
                archivoBase64 = await new Promise((resolve, reject) => {
                    reader.onload = () => resolve(reader.result.split(',')[1]); // Elimina el encabezado del Base64
                    reader.onerror = (error) => reject(error);
                    reader.readAsDataURL(formData.archivo);
                });
            }

            const data = {
                contents: [
                    [
                        `N° 000 00000${complaintNumber}-2024`, // Número de reclamo
                        formData.establecimiento,
                        formData.ruc,
                        formData.nombres,
                        formData.apellidos,
                        formData.correo,
                        formData.telefono,
                        formData.tipoDocumento,
                        formData.numDocumento,
                        formData.departamento,
                        formData.provincia,
                        formData.distrito,
                        formData.direccion,
                        formData.tipoBien,
                        formData.descripcionBien,
                        formData.valorProductoServicio,
                        formData.tipoReclamo,
                        formData.detalleReclamo,
                        formData.pedido,
                        formData.autorizacion,
                        today,
                        archivoBase64, // Agrega el archivo convertido a Base64
                    ],
                ],
            };

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyRyUK4Nn2OV_D6_MH_qV0CzSO35QRTOVeYlSdURzUE_KQISXmjtkNo7GH8MIAn_fjF/exec",
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );
      
            // Asumimos éxito ya que no hubo excepción
            alert('Datos guardados en Google Sheets');
            const nextNumber = complaintNumber + 1;
            setComplaintNumber(nextNumber);
            localStorage.setItem('complaintNumber', nextNumber); // Guarda el número actualizado
            
            // Resetea el formulario
            setFormData({
                establecimiento: '',
                ruc: '',
                nombres: '',
                apellidos: '',
                correo: '',
                telefono: '+51',
                tipoDocumento: '',
                numDocumento: '',
                departamento: '',
                provincia: '',
                distrito: '',
                direccion: '',
                tipoBien: '',
                descripcionBien: '',
                valorProductoServicio: '',
                tipoReclamo: '',
                detalleReclamo: '',
                pedido: '',
                autorizacion: '',
                archivo: null, // Resetea el archivo
            });

            // Limpia los radios y selects
            const radios = document.querySelectorAll('input[type="radio"]');
            radios.forEach((radio) => (radio.checked = false));
            const selects = document.querySelectorAll('select');
            selects.forEach((select) => (select.selectedIndex = 0));

            // Opcional: Limpia otros campos como archivos
            document.getElementById('file-upload').value = '';

        } catch (error) {
            console.error('Error:', error);
            alert('Error al guardar en Google Sheets');
        }
    };

    return (
        <div className={styless.generalcontainer}>
            <h1 style={styles.header} className={styless.header}>Libro de Reclamaciones</h1>
            <p style={styles.legalText} className={styless.legalText}>
                Conforme a lo establecido en el Código de Protección y Defensa del Consumidor,
                esta institución cuenta con un libro de reclamaciones a su disposición.
            </p>

            <div style={styles.formSection}>
                <div style={styles.formRow} className={styless.formRow}>
                    <div style={styles.displayBox} className={styless.displayBox}>
                        <span style={styles.dateSpan} className={styless.dateSpan}>Fecha</span>
                        <span style={styles.dateSpan} className={styless.dateSpan2}>{today}</span>
                    </div>
                    <div className={styless.displayBox}>
                        <p className={styless.textbox} style={{ fontWeight: 'bold'}}>
                            {complaintNumber
                                ? `N° 000 00000${complaintNumber}-2024`
                                : 'Cargando número de reclamo...'}
                        </p>
                    </div>
                </div>
            </div>

            <div style={styles.formSection} className={styless.formSection}>
                <p style={styles.legalText} className={styless.legalText}>Antes de empezar, indícanos el lugar en el que se dieron los sucesos del reclamo:</p>
                <div style={styles.formRow} className={styless.formRow}>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <div style={styles.selectWrapper}>
                            <select id="establecimiento" name="establecimiento" style={styles.customSelect} value={formData.establecimiento} onChange={handleInputChange}> 
                                <option className={styless.option} value="ss" hidden>Seleccione establecimiento</option>
                                <option value="Arequipa">Arequipa</option>
                                <option value="Lima">Lima</option>
                                {/* Añade más opciones aquí */}
                            </select>
                        </div>
                    </div>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <input type="text" id="ruc" name="ruc" placeholder="RUC" style={styles.input} className={styless.input} value={formData.ruc} onInput={handleNumericInput} onChange={handleInputChange} />
                    </div>
                </div>

                <p style={styles.note} className={styless.note}>
                    Nota: Si la queja o reclamo se relaciona con un proyecto entregado, consignar a la oficina principal.
                </p>
            </div>

            {/* Separador */}
            <div style={styles.separator}></div>

            {/* Formulario de Identificación del consumidor */}
            <h2 style={styles.formTitle}>1. Identificación del consumidor reclamante</h2>
            <div style={styles.formSection}>
                <div style={styles.formRow} className={styless.formRow}>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <input type="text" id="nombres" name="nombres" placeholder="Nombres" style={styles.input} value={formData.nombres} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" style={styles.input} value={formData.apellidos} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                </div>

                <div style={styles.formRow} className={styless.formRow}>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <input type="email" id="correo" name="correo" placeholder="Correo Electrónico" style={styles.input} value={formData.correo} onChange={handleInputChange}/>
                    </div>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <PhoneInput
                            country={"pe"}
                            // inputStyle={styles.phoneInput} // Estilos personalizados
                            inputStyle={styles.phoneInput}
                            // Style={styles.inputSmall2}
                            value={formData.telefono}
                            containerStyle={styles.phoneInputContainer}
                            buttonStyle={styles.phoneInputButton}
                            dropdownStyle={styles.phoneInputDropdown}
                            enableSearch={true}
                            countryCodeEditable={false}
                            enableAreaCodes={"true"}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    
                </div>

                <div style={styles.formRow} >
                    <div style={styles.formGroup}>
                        <select className={styless.customSelect} id="tipoDocumento" name="tipoDocumento" style={styles.customSelect} value={formData.tipoDocumento} onChange={handleInputChange}>
                            <option className={styless.docume} value="" hidden>Seleccione documento</option>
                            <option value="DNI">DNI</option>
                            <option value="Pasaporte">Pasaporte de extranjería</option>
                            {/* Añade más opciones aquí */}
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="numDocumento" name="numDocumento" placeholder="No. de Documento" style={styles.input} value={formData.numDocumento} onChange={handleInputChange}/>
                    </div>
                </div>

                <div style={styles.formRow} className={styless.formRow}>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <input type="text" id="departamento" name="departamento" placeholder="Departamento" style={styles.input} value={formData.departamento} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <input type="text" id="provincia" name="provincia" placeholder="Provincia" style={styles.input} value={formData.provincia} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                </div>

                <div style={styles.formRow} className={styless.formRow}>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <input type="text" id="distrito" name="distrito" placeholder="Distrito" style={styles.input} value={formData.distrito} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                    <div style={styles.formGroup} className={styless.formGroup}>
                        <input type="text" id="direccion" name="direccion" placeholder="Dirección" style={styles.input} value={formData.direccion} onChange={handleInputChange}/>
                    </div>
                </div>
            </div>


            {/* Separador */}
            <div style={styles.separator}></div>

            {/* Sección 2: Identificación del bien contratado */}
            <h2 style={styles.formTitle} className={styless.formTitle}>2. Identificación del bien contratado</h2>
            <div style={styles.formSection}>
                <div className={styless.formTitleint} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <input className={styless.formTitleround} type="radio" id="proyecto" name="tipoBien" value="Proyecto" onChange={handleInputChange}/>
                        <label className={styless.formTitleinp}  htmlFor="proyecto" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Proyecto</label>
                    </div>
                    <div>
                        <input type="radio" id="servicio" name="tipoBien" value="Servicio" onChange={handleInputChange}/>
                        <label className={styless.formTitleinp}  htmlFor="servicio" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Servicio</label>
                    </div>
                </div>

                <div style={styles.formRow} className={styless.formRow}>
                    <div className={styless.formRowintdes} style={{ width: '100%' }}>
                        <textarea 
                        
                            id="descripcionBien" 
                            name="descripcionBien" 
                            placeholder="*Descripción" 
                            className={styless.formRowintdes}
                            style={{ ...styles.input, height: '100px', resize: 'none' }} 
                            value={formData.descripcionBien}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div style={{ marginTop: '15px' }}>
                    <input 
                        type="text" 
                        id="valorProductoServicio" 
                        name="valorProductoServicio" 
                        placeholder="*Valor del Producto/ Servicio"
                        className={styless.formRowintdes2} 
                        style={{ ...styles.input, width: '100%' }} 
                        value={formData.valorProductoServicio}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* Separador */}
            <div style={styles.separator}></div>

            {/* Sección 3: Detalle de la Reclamación y Pedido del Consumidor */}
            <h2 style={styles.formTitle} className={styless.formTitle}>3. Detalle de la Reclamación y Pedido del Consumidor</h2>
            <div style={styles.formSection}>
                <div className={styless.formTitleint} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <input type="radio" id="reclamo" name="tipoReclamo" value="Reclamo" onChange={handleInputChange}/>
                        <label className={styless.formTitleinp} htmlFor="reclamo" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Reclamo</label>
                    </div>
                    <div>
                        <input type="radio" id="queja" name="tipoReclamo" value="Queja" onChange={handleInputChange}/>
                        <label className={styless.formTitleinp} htmlFor="queja" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Queja</label>
                    </div>
                </div>
                
                {/* Descripción de Reclamo y Queja */}
                <p style={styles.note} className={styless.note}>
                    <strong>*Reclamo:</strong> Disconformidad relacionada a los proyectos o servicios.
                    <br />
                    <strong>***Queja:</strong> Disconformidad no relacionada a los proyectos o servicios; o, malestar o descontento respecto a la atención al público.
                </p>

                {/* Detalle del reclamo o queja */}
                <div style={styles.formRow}>
                    <div style={{ width: '100%' }}>
                        <textarea 
                            id="detalleReclamo" 
                            name="detalleReclamo" 
                            placeholder="*Detalle" 
                            style={{ ...styles.input, height: '100px', resize: 'none' }}
                            value={formData.detalleReclamo}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Pedido del consumidor */}
                <div style={{ marginTop: '15px' }}>
                    <textarea 
                        id="pedido" 
                        name="pedido" 
                        placeholder="*Pedido" 
                        style={{ ...styles.input, height: '100px', resize: 'none' }} 
                        value={formData.pedido}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Botón de adjuntar archivo */}
                <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
                    <label 
                        htmlFor="file-upload" 
                        style={{
                            backgroundColor: 'var(--secondary-color)',
                            color: 'white',
                            padding: '20px',
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                            borderBottomLeftRadius: '15px',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div className={styless.botonico} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1 1 35%' }}>
                            <span style={{
                                backgroundColor: '',
                                color: '#1a1a1a',
                                padding: '10px',
                                marginRight: '5px',
                                display: 'flex', // Asegura que la imagen se alinee correctamente
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <img 
                                    src="https://pub-98ff477fff7c4221ae13325d6258be3b.r2.dev/img/icons/adjuntararchivo.svg" // Ruta relativa a la carpeta `public`
                                    alt="Clip Icon" 
                                    className={styless.iconomobil}
                                    style={{
                                        width: '30px', // Ajusta el tamaño según sea necesario
                                        height: '30px',
                                    }}
                                />
                            </span>
                            <span className={styless.botonicoiztextbot} style={{ fontSize: '14px', textAlign: 'center' }}>Adjuntar Archivo</span>
                        </div>

                        {/* Línea divisoria blanca */}
                        <div style={{
                            height: '40px',
                            width: '1px',
                            backgroundColor: 'white',
                            margin: '0 15px'
                        }}></div>

                        <div className={styless.botonicoiz} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1 1 65%' }}>
                            <span className={styless.botonicoiztext} style={{ fontSize: '12px', textAlign: 'center' }}>Adjuntar archivo (PDF, PPTX, WORD o imágenes JPG, PNG)</span>
                        </div>
                    </label>
                    <input 
                        id="file-upload" 
                        type="file" 
                        style={{ display: 'none' }} 
                        accept=".pdf,.pptx,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                    />
                </div>              
            </div>

            {/* Separador */}
            <div style={styles.separator}></div>
            
            {/* Sección 4: Observaciones y acciones adoptadas por el proveedor */}
            <h2 style={styles.formTitle} className={styless.formTitle}>4. Observaciones y acciones adoptadas por el proveedor</h2>
            <div style={styles.formSection} className={styless.formSection}>
                <p style={styles.legalText} className={styless.legalText}>
                    Fecha de comunicación de la respuesta: <strong>{getNextDay()}</strong>.
                </p>
                <p style={styles.legalText} className={styless.legalText}>
                    Descripción: “Al ser un reclamo virtual, su caso será derivado al área de atención al cliente, a fin de dar respuesta dentro del plazo legalmente establecido.”
                </p>
            </div>


            {/* Separador */}
            <div style={styles.separator}></div>

            {/* Sección 5: Autorización y términos */}
            <h2 style={styles.formTitle} className={styless.formTitle}>5. Autorizo notificación del resultado del reclamo al correo consignado</h2>
            <div style={styles.formSection}>
                <div className={styless.formTitleint} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ marginRight: '30px' }}>
                        <input type="radio" id="autorizo-si" name="autorizacion" value="Si" onChange={handleInputChange}/>
                        <label className={styless.formTitleinp} htmlFor="autorizo-si" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Si</label>
                    </div>
                    <div>
                        <input type="radio" id="autorizo-no" name="autorizacion" value="No" onChange={handleInputChange}/>
                        <label className={styless.formTitleinp} htmlFor="autorizo-no" style={{ marginLeft: '8px', fontWeight: 'bold' }}>No</label>
                    </div>
                </div>

                <p className={styless.camp} style={{ fontSize: '12px', color: '#666' }}>
                    (*) Campos obligatorios
                </p>
                <p className={styless.camp} style={{ fontSize: '12px', color: '#666' }}>
                    * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
                    <br />
                    <br />
                    * El proveedor deberá dar respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, pudiendo ampliar el plazo hasta por treinta (30) días más, previa comunicación al consumidor.
                </p>

                <div style={{ marginTop: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <input type="radio" id="acepto-terminos" name="terminos" required onChange={handleInputChange}/>
                    <label className={styless.edn} htmlFor="acepto-terminos" style={{ marginLeft: '8px', fontSize: '12px' }}>
                        He leído y acepto los <a href="/terms" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>términos y condiciones</a> y la <a href="/privacy-policy" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>Política de Privacidad</a> de Ontario Inmobiliaria
                    </label>
                </div>

                
            </div>

            {/* Botón de envío */}
            <div style={{ textAlign: 'center', paddingTop:"10%"}}>
                <button 
                    type="submit"
                    onClick={handleSubmit} 
                    style={{
                        backgroundColor: 'var(--secondary-color)',
                        color: 'white',
                        padding: '10px 30px',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        borderBottomLeftRadius: '15px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}
                >
                    Enviar
                </button>
            </div>

        </div>
        
    
    );
};

export default Complaints;
