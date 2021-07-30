const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} type="button">
      Load more
    </button>
  );
};

export default Button;
