import React from 'react';

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
            marginBottom: '15px',
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
        </div>
    );
};

export default Complaints;
