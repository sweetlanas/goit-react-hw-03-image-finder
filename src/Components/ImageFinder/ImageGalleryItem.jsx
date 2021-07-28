import { useState } from "react";
import Loader from "./Loader";

function ImageGalleryItem({ url, alt, modalUrl, showModal }) {
  const [load, setLoad] = useState(true);

  return (
    <li
      style={{ position: "relative", zIndex: -1 }}
      className="ImageGalleryItem"
    >
      <img
        onLoad={() => setLoad(false)}
        style={{ position: "relative", zIndex: -1 }}
        onClick={() => showModal(modalUrl)}
        src={url}
        alt={alt}
        className="ImageGalleryItem-image"
      />
      {load && (
        <div style={{ position: "absolute", zIndex: 9999 }}>
          <Loader />
        </div>
      )}
    </li>
  );
}

export default ImageGalleryItem;
