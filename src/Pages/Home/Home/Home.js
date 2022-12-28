import React from "react";
import Banner from "../../Shared/Banner/Banner";
import DentalCare from "../DentalCare/DentalCare";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeApointment/MakeAppointment";
import Services from "../Services/Services";
import StayConnect from "../StayConnect/StayConnect";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <StayConnect></StayConnect>
    </div>
  );
};

export default Home;
