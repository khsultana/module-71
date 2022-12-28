import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
const MakeAppointment = () => {
  return (
    <section className="mt-16" style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt=""
            src={doctor}
            className="lg:w-1/2 -mt-32 md:block hidden  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold text-primary">Appointment</h1>

            <h1 className="text-3xl font-bold text-white">
              Make an Appointment today
            </h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
