import { LineWave } from "react-loader-spinner";
import css from "./LoaderComponent.module.css";
const LoaderComponent = () => {
  return (
    <LineWave
      visible={true}
      height="100"
      width="100"
     color="#0b6efd"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass={css.loaderCentered}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};

export default LoaderComponent;
