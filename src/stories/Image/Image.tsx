import React from 'react';

type ImageGalleryData = {
  src: string;
  alt?: string;
};

type ImageGalleryProps = {
  images: ImageGalleryData[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt || 'Gallery image'} />
      ))}
    </div>
  );
};

export default ImageGallery;
