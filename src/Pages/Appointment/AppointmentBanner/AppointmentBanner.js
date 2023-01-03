import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

import footer from "../../../assets/images/footer.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <section
      className="mt-16 mb-9 "
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div className="hero flex justify-between">
        <div></div>
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <img alt="" src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div className="flex flex-col">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>Selected Date : {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
