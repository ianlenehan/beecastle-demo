import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return <Loader type="Puff" color="#bb75ff" height={100} width={100} />;
};

export default Loading;
