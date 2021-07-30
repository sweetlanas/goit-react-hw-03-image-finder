const Modal = ({ modalImg, closeModal }) => {
  return (
    <div onClick={closeModal} className="Overlay">
      <div className="Modal">
        <img src={modalImg} alt="" />
      </div>
    </div>
  );
};

export default Modal;
