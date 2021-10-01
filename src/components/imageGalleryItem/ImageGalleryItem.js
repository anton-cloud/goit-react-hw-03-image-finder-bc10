import React from 'react'
import { ImageGalleryItemStyled } from './ImageGalleryItemStyled';

const ImageGalleryItem = ({image, onOpenModal}) => {
  return (
    <ImageGalleryItemStyled>
      <img src={image.webformatURL} alt={image.tags}  className="ImageGalleryItem-image" onClick = {() => onOpenModal(image.largeImageURL)}/>
    </ImageGalleryItemStyled>
  );
}

export default ImageGalleryItem;