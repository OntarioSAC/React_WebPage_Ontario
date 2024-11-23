// src/components/NewsTabs.jsx

import React from 'react';

const tabsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem 0',
};

const tabStyle = {
  backgroundColor: 'var(--primary-color)',
  color: 'var(--secondary-color)',
  padding: '0.5rem 1rem',
  margin: '0 0.5rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: 'var(--secondary-color)',
  color: 'var(--primary-color)',
};

const NewsTabs = () => {
  return (
    <div style={tabsContainerStyle}>
      <button style={activeTabStyle}>Todo</button>
      <button style={tabStyle}>Lanzamientos</button>
      <button style={tabStyle}>Avances de Obra</button>
      <button style={tabStyle}>Celebridades y Embajadores</button>
      <button style={tabStyle}>Eventos y Ferias</button>
      <button style={tabStyle}>Prensa</button>
      
    </div>
  );
};

export default NewsTabs;
