import React from "react";
import appointment from "../../../assets/images/appointment.png";
const StayConnect = () => {
  return (
    <section className="mt-16" style={{ background: `url(${appointment})` }}>
      <h2 className='text-primary'>Contact Us</h2>
      <h2 className="text-3xl font-bold mt-10 text-center p-8 text-white">
        Stay Connect With Us
      </h2>
      <div className="flex flex-col items-center mt-4 p-8">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-xs w-full max-w-xs mt-10 "
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs mt-10 "
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs mt-10 "
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs mt-10 "
        />
      </div>
    </section>
  );
};

export default StayConnect;
