import React from 'react';
import type { ImageGalleryData, ImageGalleryProps } from "./Image.types";


export const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt || 'Gallery image'} />
      ))}
    </div>
  );
};

export default ImageGallery;
