import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGalleryStyled';


const ImageGallery = ({images, onOpenModal}) => {
  return (
    <ImageGalleryStyled>
      {images.map((image) => <ImageGalleryItem image = {image} onOpenModal = {onOpenModal} key = {image.id}/>)}
    </ImageGalleryStyled>
  );
}

export default ImageGallery;

