import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, showModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ tags, webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          showModal={showModal}
          modalUrl={largeImageURL}
          key={id}
          url={webformatURL}
          alt={tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
