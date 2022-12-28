import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hour",
      description: "Open 9:00 am 5:00 pm everyday ",
      icon: clock,
      bgClass: "bg-gradient-to-r from-sky-500 to-indigo-500",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Open 9:00 am 5:00 pm everyday ",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us Now",
      description: "Open 9:00 am 5:00 pm everyday ",
      icon: phone,
      bgClass: "bg-gradient-to-r from-sky-500 to-indigo-500",
    },
  ];

  return (
    <div className="mt-10 lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4 p-4">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
