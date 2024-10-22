import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoContent.module.css';

/**
 * Componente VideoContent
 * Renderiza un elemento de video con controles
 * @param {string} src - URL de la fuente del video
 */
const VideoContent = ({ src }) => (
  <video className={styles.cover} controls>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

VideoContent.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoContent;
