// Define the type for individual image data specific to ImageGallery component
type ImageGalleryData = {
  src: string; // Source URL of the image
  alt?: string; // Optional alt text for the image
};

// Define the props for the ImageGallery component
type ImageGalleryProps = {
  images: ImageGalleryData[]; // Array of images
};
