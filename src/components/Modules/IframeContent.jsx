import React from 'react';
import PropTypes from 'prop-types';

const IframeContent = ({ src }) => (
  <iframe
    src={src}
    width="100%"
    height="100%"
    frameBorder="0"
    allowFullScreen
  ></iframe>
);

IframeContent.propTypes = {
  src: PropTypes.string.isRequired,
};

export default IframeContent;
