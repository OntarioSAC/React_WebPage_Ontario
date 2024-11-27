import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2'; // Importa el componente de teléfono
import 'react-phone-input-2/lib/bootstrap.css'; // Importa el estilo de Bootstrap
import { useNavigate } from 'react-router-dom'; // Para la redirección


const Complaints = () => {

    const [complaintNumber, setComplaintNumber] = useState(null); // Número de reclamo inicializado como null
    const [formData, setFormData] = useState({
        establecimiento: 'Arequipa',
        ruc: '',
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
        tipoDocumento: 'DNI',
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
    });

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            width: '50%',
            margin: '20px auto',
            padding: '70px',
            marginTop: '100px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fff',
        },
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
        
        // Media queries para responsive
        "@media (max-width: 768px)": {
            container: {
                width: "90%",
                padding: "15px",
            },
            header: {
                fontSize: "1.5rem",
                marginBottom: "20px",
            },
            formRow: {
                flexDirection: "column",
                gap: "15px",
            },
            formGroup: {
                width: "100%",
            },
            input: {
                fontSize: "14px",
            },
            customSelect: {
                fontSize: "14px",
            },
        },
        
    };

    

    // Obtener la fecha actual formateada
    const today = new Date().toLocaleDateString('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    useEffect(() => {
        
            const fetchLastComplaintNumber = async () => {
                try {
                    const response = await fetch(
                        "https://script.google.com/macros/s/AKfycbzMszCBuC78SkWDB8xwRTOHpRGa3UI8ZuTvckdsonOooeAHiUKhNTGufszR64_bhcE7uA/exec"
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
                ],
            ],
        };

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzMszCBuC78SkWDB8xwRTOHpRGa3UI8ZuTvckdsonOooeAHiUKhNTGufszR64_bhcE7uA/exec", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
      
            // Asumimos éxito ya que no hubo excepción
            alert('Datos guardados en Google Sheets');
            const nextNumber = complaintNumber + 1;
            setComplaintNumber(nextNumber);
            localStorage.setItem('complaintNumber', nextNumber); // Guarda el número actualizado
            setFormData({
                establecimiento: '',
                ruc: '',
                nombres: '',
                apellidos: '',
                correo: '',
                telefono: '',
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
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Error al guardar en Google Sheets');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Libro de Reclamaciones</h1>
            <p style={styles.legalText}>
                Conforme a lo establecido en el Código de Protección y Defensa del Consumidor,
                esta institución cuenta con un libro de reclamaciones a su disposición.
            </p>

            <div style={styles.formSection}>
                <div style={styles.formRow}>
                    <div style={styles.displayBox}>
                        <span style={styles.dateSpan}>Fecha</span>
                        <span style={styles.dateSpan}>{today}</span>
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
                            {complaintNumber
                                ? `N° 000 00000${complaintNumber}-2024`
                                : 'Cargando número de reclamo...'}
                        </p>
                    </div>
                </div>
            </div>

            <div style={styles.formSection}>
                <p style={styles.legalText}>Antes de empezar, indícanos el lugar en el que se dieron los sucesos del reclamo:</p>
                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <div style={styles.selectWrapper}>
                            <select id="establecimiento" name="establecimiento" style={styles.customSelect} onChange={handleInputChange}> 
                                <option value="" hidden>Seleccione establecimiento</option>
                                <option value="Arequipa">Arequipa</option>
                                <option value="Lima">Lima</option>
                                {/* Añade más opciones aquí */}
                            </select>
                        </div>
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="ruc" name="ruc" placeholder="RUC" style={styles.input} onInput={handleNumericInput} onChange={handleInputChange} />
                    </div>
                </div>

                <p style={styles.note}>
                    Nota: Si la queja o reclamo se relaciona con un proyecto entregado, consignar a la oficina principal.
                </p>
            </div>

            {/* Separador */}
            <div style={styles.separator}></div>

            {/* Formulario de Identificación del consumidor */}
            <h2 style={styles.formTitle}>1. Identificación del consumidor reclamante</h2>
            <div style={styles.formSection}>
                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <input type="text" id="nombres" name="nombres" placeholder="Nombres" style={styles.input} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" style={styles.input} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                </div>

                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <input type="email" id="correo" name="correo" placeholder="Correo Electrónico" style={styles.input} onChange={handleInputChange}/>
                    </div>
                    <div style={styles.formGroup}>
                        <PhoneInput
                            country={"pe"}
                            // inputStyle={styles.phoneInput} // Estilos personalizados
                            inputStyle={styles.phoneInput}
                            // Style={styles.inputSmall2}
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

                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <select id="tipoDocumento" name="tipoDocumento" style={styles.customSelect} onChange={handleInputChange}>
                            <option value="" hidden>Seleccione documento</option>
                            <option value="DNI">DNI</option>
                            <option value="Pasaporte">Pasaporte de extranjería</option>
                            {/* Añade más opciones aquí */}
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="numDocumento" name="numDocumento" placeholder="No. de Documento" style={styles.input} onChange={handleInputChange}/>
                    </div>
                </div>

                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <input type="text" id="departamento" name="departamento" placeholder="Departamento" style={styles.input} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="provincia" name="provincia" placeholder="Provincia" style={styles.input} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                </div>

                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <input type="text" id="distrito" name="distrito" placeholder="Distrito" style={styles.input} onInput={handleAlphabeticInput} onChange={handleInputChange}/>
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="direccion" name="direccion" placeholder="Dirección" style={styles.input} onChange={handleInputChange}/>
                    </div>
                </div>
            </div>


            {/* Separador */}
            <div style={styles.separator}></div>

            {/* Sección 2: Identificación del bien contratado */}
            <h2 style={styles.formTitle}>2. Identificación del bien contratado</h2>
            <div style={styles.formSection}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <input type="radio" id="proyecto" name="tipoBien" value="Proyecto" onChange={handleInputChange}/>
                        <label htmlFor="proyecto" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Proyecto</label>
                    </div>
                    <div>
                        <input type="radio" id="servicio" name="tipoBien" value="Servicio" onChange={handleInputChange}/>
                        <label htmlFor="servicio" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Servicio</label>
                    </div>
                </div>

                <div style={styles.formRow}>
                    <div style={{ width: '100%' }}>
                        <textarea 
                            id="descripcionBien" 
                            name="descripcionBien" 
                            placeholder="*Descripción" 
                            style={{ ...styles.input, height: '100px', resize: 'none' }} 
                        />
                    </div>
                </div>

                <div style={{ marginTop: '15px' }}>
                    <input 
                        type="text" 
                        id="valorProductoServicio" 
                        name="valorProductoServicio" 
                        placeholder="*Valor del Producto/ Servicio" 
                        style={{ ...styles.input, width: '100%' }} 
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* Separador */}
            <div style={styles.separator}></div>

            {/* Sección 3: Detalle de la Reclamación y Pedido del Consumidor */}
            <h2 style={styles.formTitle}>3. Detalle de la Reclamación y Pedido del Consumidor</h2>
            <div style={styles.formSection}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <input type="radio" id="reclamo" name="tipoReclamo" value="Reclamo" onChange={handleInputChange}/>
                        <label htmlFor="reclamo" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Reclamo</label>
                    </div>
                    <div>
                        <input type="radio" id="queja" name="tipoReclamo" value="Queja" onChange={handleInputChange}/>
                        <label htmlFor="queja" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Queja</label>
                    </div>
                </div>
                
                {/* Descripción de Reclamo y Queja */}
                <p style={styles.note}>
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
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1 1 35%' }}>
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
                                    src="/img/icons/clip.svg" // Ruta relativa a la carpeta `public`
                                    alt="Clip Icon" 
                                    style={{
                                        width: '30px', // Ajusta el tamaño según sea necesario
                                        height: '30px',
                                    }}
                                />
                            </span>
                            <span style={{ fontSize: '14px', textAlign: 'center' }}>Adjuntar Archivo</span>
                        </div>

                        {/* Línea divisoria blanca */}
                        <div style={{
                            height: '40px',
                            width: '1px',
                            backgroundColor: 'white',
                            margin: '0 15px'
                        }}></div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1 1 65%' }}>
                            <span style={{ fontSize: '12px', textAlign: 'center' }}>Adjuntar archivo (PDF, PPTX, WORD o imágenes JPG, PNG)</span>
                        </div>
                    </label>
                    <input 
                        id="file-upload" 
                        type="file" 
                        style={{ display: 'none' }} 
                        accept=".pdf,.pptx,.docx,.jpg,.jpeg,.png"
                        onChange={handleInputChange}
                    />
                </div>              
            </div>

            {/* Separador */}
            <div style={styles.separator}></div>
            
            {/* Sección 4: Observaciones y acciones adoptadas por el proveedor */}
            <h2 style={styles.formTitle}>4. Observaciones y acciones adoptadas por el proveedor</h2>
            <div style={styles.formSection}>
                <p style={styles.legalText}>
                    Fecha de comunicación de la respuesta: <strong>Domingo, 17 de Noviembre del 2024</strong>
                </p>
                <p style={styles.legalText}>
                    Descripción: “Al ser un reclamo virtual, su caso será derivado al área de atención al cliente, a fin de dar respuesta dentro del plazo legalmente establecido.”
                </p>
            </div>


            {/* Separador */}
            <div style={styles.separator}></div>

            {/* Sección 5: Autorización y términos */}
            <h2 style={styles.formTitle}>5. Autorizo notificación del resultado del reclamo al correo consignado</h2>
            <div style={styles.formSection}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ marginRight: '30px' }}>
                        <input type="radio" id="autorizo-si" name="autorizacion" value="Si" onChange={handleInputChange}/>
                        <label htmlFor="autorizo-si" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Si</label>
                    </div>
                    <div>
                        <input type="radio" id="autorizo-no" name="autorizacion" value="No" onChange={handleInputChange}/>
                        <label htmlFor="autorizo-no" style={{ marginLeft: '8px', fontWeight: 'bold' }}>No</label>
                    </div>
                </div>

                <p style={{ fontSize: '12px', color: '#666' }}>
                    (*) Campos obligatorios
                </p>
                <p style={{ fontSize: '12px', color: '#666' }}>
                    * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
                    <br />
                    * El proveedor deberá dar respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, pudiendo ampliar el plazo hasta por treinta (30) días más, previa comunicación al consumidor.
                </p>

                <div style={{ marginTop: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <input type="radio" id="acepto-terminos" name="terminos" required onChange={handleInputChange}/>
                    <label htmlFor="acepto-terminos" style={{ marginLeft: '8px', fontSize: '12px' }}>
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
