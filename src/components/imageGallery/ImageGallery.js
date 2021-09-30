import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGalleryStyled';


const ImageGallery = ({images}) => {
  return (
    <ImageGalleryStyled>
      {images.map((image) => <ImageGalleryItem image = {image} key = {image.id}/>)}
    </ImageGalleryStyled>
  );
}

export default ImageGallery;

