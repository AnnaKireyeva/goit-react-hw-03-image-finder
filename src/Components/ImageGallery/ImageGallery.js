import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={shortid.generate()}
          imageId={image.id}
          imageSmall={image.webformatURL}
          imageLadge={image.largeImageURL}
          alt={image.tags}
          clicked={onClick}
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
  onClick: PropTypes.func,
};

export default ImageGallery;
