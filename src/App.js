import "./App.css";
import { useState, useEffect } from "react";
import Searchbar from "./Components/ImageFinder/Searchbar";
import ImageGallery from "./Components/ImageFinder/ImageGallery";
import Button from "./Components/ImageFinder/Button";
import Modal from "./Components/ImageFinder/Modal";
import Loader from "./Components/ImageFinder/Loader";
import getPictures from "./helpers/fetch";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState("");
  const [loader, setLoader] = useState(false);

  const closeModalByEsc = (e) => {
    if (e.key === "Escape") {
      setModal("");
    }
  };

  useEffect(() => {
    if (modal) {
      window.addEventListener("keyup", closeModalByEsc);
    } else {
      window.removeEventListener("keyup", closeModalByEsc);
    }
  }, [modal]);

  const handleSetQuery = (e) => {
    setQuery(e.target.value);
  };

  const hendleGetImages = async (e) => {
    e.preventDefault();
    setPage(1);
    setLoader(true);
    const {
      data: { hits },
    } = await getPictures(query, 1);
    setLoader(false);
    setImages(hits);
    setPage((prev) => prev + 1);
  };

  const hendleLoadMore = async () => {
    setLoader(true);
    const {
      data: { hits },
    } = await getPictures(query, page);
    setImages((prev) => [...prev, ...hits]);
    setPage((prev) => prev + 1);
    setLoader(false);
    window.scrollTo({
      top: document.querySelector(".ImageGallery").scrollHeight,
      behavior: "smooth",
    });
  };

  const hendleShowModal = (url) => {
    setModal(url);
  };

  const hendleCloseModal = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    setModal("");
  };

  return (
    <div className="App">
      <Searchbar
        query={query}
        onSetQuery={handleSetQuery}
        onSubmit={hendleGetImages}
      />
      {loader && <Loader />}
      <ImageGallery showModal={hendleShowModal} images={images} />
      {loader && <Loader />}
      {!!images.length && <Button onLoadMore={hendleLoadMore} />}
      {modal && <Modal closeModal={hendleCloseModal} modalImg={modal} />}
    </div>
  );
}

export default App;
