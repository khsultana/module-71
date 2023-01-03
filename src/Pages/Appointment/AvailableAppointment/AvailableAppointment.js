import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "../AppointmentOption/AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointment, setAppointment] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);
  return (
    <section>
      <p className="text-secondary font-bold text-center">
        Available Appointment on : {format(selectedDate, "PP")}{" "}
      </p>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-7mt-20">
        {appointment.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
