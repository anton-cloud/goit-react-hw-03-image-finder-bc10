import React from 'react'
import { ImageGalleryItemStyled } from './ImageGalleryItemStyled';

const ImageGalleryItem = ({image}) => {
  console.log(image);
  return (
    <ImageGalleryItemStyled>
      <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
    </ImageGalleryItemStyled>
  );
}

export default ImageGalleryItem;