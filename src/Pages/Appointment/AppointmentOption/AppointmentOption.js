import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-primary text-2xl  font-bold text-center">
            {name}
          </h2>
          <p className="text-center">
            {slots.length > 0 ? slots[0] : "Try Another Day"}
          </p>
          <p className="text-center">
            {slots.length} {slots.length > 1 ? "Space" : "Spaces"}Available
          </p>
          <div className="card-actions justify-center ">
            <label
              disabled={slots.length === 0}
              htmlFor="bookingModal"
              className="btn btn-primary "
              onClick={() => setTreatment(option)}
            >
              Book Appointment{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
