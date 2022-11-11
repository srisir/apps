import React from "react";

const Banner = ({ img }) => {
  return (
    <div className="banner">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
