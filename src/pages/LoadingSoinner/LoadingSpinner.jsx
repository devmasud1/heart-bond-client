import { BallTriangle } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};
export default LoadingSpinner;
