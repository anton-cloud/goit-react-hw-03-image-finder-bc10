import React from 'react'
import { ImageGalleryItemStyled } from './ImageGalleryItemStyled';

const ImageGalleryItem = ({image}) => {
  return (
    <ImageGalleryItemStyled>
      <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
    </ImageGalleryItemStyled>
  );
}

export default ImageGalleryItem;