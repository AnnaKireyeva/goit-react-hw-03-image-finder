import React from 'react';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageId, imageSmall, imageLarge, alt }) => {
  return (
    <li className={styles.ImageGalleryItem} key={imageId}>
      <img
        className={styles.ImageGalleryItemImage}
        src={imageSmall}
        alt={alt}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageId: PropTypes.number.isRequired,
  imageSmall: PropTypes.string,
  imageLarge: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
