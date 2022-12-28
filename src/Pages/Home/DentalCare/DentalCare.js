import React from "react";
import treatment from "../../../assets/images/treatment.png";
const DentalCare = () => {
  return (
    <div>
      <div className="hero p-20 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt=""
            src={treatment}
            className="lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="mx-10">
            <h1 className="text-4xl font-bold">
              Exceptional Dental Care, On Your Terms
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.I’ve written a few thousand words on why traditional
              “semantic class names” are the reason CSS is hard to maintain, but
              the truth is you’re never going to believe me until you actually
              try it. If you can suppress the urge to retch long enough to give
              it a chance, I really think you’ll wonder how you ever worked with
              CSS any other way.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
