import React from "react";
import img from "../../../assets/images/chair.png";
const Banner = () => {
  return (
    <div className="">
      <div className="hero   flex justify-between">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img alt="" src={img} className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="border-none btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
