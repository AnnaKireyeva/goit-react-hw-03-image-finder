import React from 'react';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  clicked,
  imageId,
  imageSmall,
  imageLarge,
  alt,
}) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={clicked}>
      <img
        id={imageId}
        src={imageSmall}
        alt={alt}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageId: PropTypes.number.isRequired,
  imageSmall: PropTypes.string,
  imageLarge: PropTypes.string,
  alt: PropTypes.string,
  clicked: PropTypes.func,
};

export default ImageGalleryItem;
