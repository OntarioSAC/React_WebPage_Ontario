import React from 'react';
import NewsBanner from './Content/NewsBanner';
import NewsTabs from './Content/NewsTabs';
import Cards from './Content/Cards';

const containerStyle = {
  position: 'relative', // Para posicionar las pestañas relativas al banner
};

const News = () => {
  return (
    <div style={containerStyle}>
      <NewsBanner />
      <NewsTabs />
      <Cards />
    </div>
  );
};

export default News;
