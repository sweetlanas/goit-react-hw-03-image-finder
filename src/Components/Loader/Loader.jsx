import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

const Spinner = () => {
  return (
    <div className={s.loaderWrapper}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Spinner;
