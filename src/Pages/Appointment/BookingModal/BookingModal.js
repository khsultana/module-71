import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const handleBooked = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      treatmentName: name,
      patientName: name,
      email,
      phone,
      slot,
    };

    console.log(booking);
    setTreatment(null);
  };

  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold"> {name}</h3>
          <form
            onSubmit={handleBooked}
            className="grid grid-cols-1 gap-4 mt-10"
          >
            <input
              name="date"
              type="text"
              value={date}
              disabled
              className="input input-bordered input-error w-full "
            />
            <select name="slot" className="select select-secondary w-full  ">
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              placeholder="Your Name"
              type="text"
              className="input input-bordered input-error w-full "
            />
            <input
              name="email"
              placeholder="Your Email Here"
              type="email"
              className="input input-bordered input-error w-full "
            />
            <input
              name="phone"
              placeholder="Your Phone Number Here"
              type="number"
              className="input input-bordered input-error w-full "
            />
            <br />
            <input
              className="w-full  btn btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
