import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [seleteDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner
                seleteDate={seleteDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
                seleteDate={seleteDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;