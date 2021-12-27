import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          //   key={image.id}
          key={shortid.generate()}
          imageId={image.id}
          imageSmall={image.webformatURL}
          imageLadge={image.largeImageURL}
          alt={image.tags}
          clicked={onImageClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
    }),
  ).isRequired,
};

export default ImageGallery;
