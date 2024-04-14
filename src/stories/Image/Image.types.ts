// Define the type for individual image data specific to ImageGallery component
export type ImageGalleryData = {
  src: string; // Source URL of the image
  alt?: string; // Optional alt text for the image
};

// Define the props for the ImageGallery component
export type ImageGalleryProps = {
  images: ImageGalleryData[]; // Array of images
};
