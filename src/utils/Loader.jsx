import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader({ width = "60", height = "40" ,mt = "52px" }) {
  return (
    <ThreeDots
      width={width}
      height={height}
      radius={9}
      color="rgb(128, 153, 255)"
      wrapperStyle={{
        display:"flex",
        justifyContent:"center",
        marginTop:mt
    }}
    />
  );
}

export default Loader;
