import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const serviceInfo = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it.",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Treatment",
      description:
        "I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it.",
      img: cavity,
    },
    {
      id: 1,
      name: "Whitening Treatment",
      description:
        "I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it.",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-3xl text-primary uppercase font-bold">
          Our Services
        </h3>
        <h2 className="text-5xl">Services We Provide</h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-6 pt-6">
        {serviceInfo.map((ser) => (
          <Service key={ser.id} ser={ser}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
