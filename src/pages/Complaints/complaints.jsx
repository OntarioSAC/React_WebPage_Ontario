import React from 'react';
import PhoneInput from 'react-phone-input-2'; // Importa el componente de teléfono
import 'react-phone-input-2/lib/bootstrap.css'; // Importa el estilo de Bootstrap

const Complaints = () => {
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
            paddingLeft: '10%'
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
            padding: 'clamp(0.4rem, 0.3rem + 0.5vw, 0.6rem) clamp(0.5rem, 0.3rem + 0.5vw, 0.75rem) clamp(0.5rem, 0.3rem + 0.5vw, 0.75rem) 60px !important',
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
                        <span style={styles.dateSpan}>18/10/2024</span>
                    </div>
                    <div>
                        <p>N° 000 000006-2024</p>
                    </div>
                </div>
            </div>

            <div style={styles.formSection}>
                <p style={styles.legalText}>Antes de empezar, indícanos el lugar en el que se dieron los sucesos del reclamo:</p>
                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <div style={styles.selectWrapper}>
                            <select id="establecimiento" name="establecimiento" style={styles.customSelect}>
                                <option value="">Establecimiento</option>
                                {/* Añade más opciones aquí */}
                            </select>
                        </div>
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="ruc" name="ruc" placeholder="RUC" style={styles.input} />
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
                        <input type="text" id="nombres" name="nombres" placeholder="Nombres" style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" style={styles.input} />
                    </div>
                </div>

                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <input type="email" id="correo" name="correo" placeholder="Correo Electrónico" style={styles.input} />
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
                        />
                    </div>
                    
                </div>

                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <select id="tipoDocumento" name="tipoDocumento" style={styles.customSelect}>
                            <option value="">Tipo de Documento</option>
                            {/* Añade más opciones aquí */}
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="numDocumento" name="numDocumento" placeholder="No. de Documento" style={styles.input} />
                    </div>
                </div>

                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <input type="text" id="departamento" name="departamento" placeholder="Departamento" style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="provincia" name="provincia" placeholder="Provincia" style={styles.input} />
                    </div>
                </div>

                <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                        <input type="text" id="distrito" name="distrito" placeholder="Distrito" style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" id="direccion" name="direccion" placeholder="Dirección" style={styles.input} />
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
                        <input type="radio" id="proyecto" name="tipoBien" value="proyecto" />
                        <label htmlFor="proyecto" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Proyecto</label>
                    </div>
                    <div>
                        <input type="radio" id="servicio" name="tipoBien" value="servicio" />
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
                        <input type="radio" id="reclamo" name="tipoReclamo" value="reclamo" />
                        <label htmlFor="reclamo" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Reclamo</label>
                    </div>
                    <div>
                        <input type="radio" id="queja" name="tipoReclamo" value="queja" />
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
                                backgroundColor: '#c7ef00',
                                color: '#1a1a1a',
                                padding: '10px',
                                borderRadius: '5px',
                                marginRight: '15px'
                            }}>
                                📎
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
                        <input type="radio" id="autorizo-si" name="autorizacion" value="si" />
                        <label htmlFor="autorizo-si" style={{ marginLeft: '8px', fontWeight: 'bold' }}>Si</label>
                    </div>
                    <div>
                        <input type="radio" id="autorizo-no" name="autorizacion" value="no" />
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
                    <input type="radio" id="acepto-terminos" name="terminos" required />
                    <label htmlFor="acepto-terminos" style={{ marginLeft: '8px', fontSize: '12px' }}>
                        He leído y acepto los <a href="/terms" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>términos y condiciones</a> y la <a href="/privacy-policy" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>Política de Privacidad</a> de Ontario Inmobiliaria
                    </label>
                </div>

                {/* Botón de envío */}
                <div style={{ textAlign: 'center' }}>
                    <button 
                        type="submit"
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

        </div>
        
    
    );
};

export default Complaints;
