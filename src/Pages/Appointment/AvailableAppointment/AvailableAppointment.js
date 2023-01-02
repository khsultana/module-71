import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({ seleteDate }) => {

    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAppointment(data))

    }, [])
    return (
        <section>
            <p className='text-secondary font-bold text-center'>Available Appointment on : {format(seleteDate, 'PP')}  </p>
            <div className='lg:grid lg:grid-cols-3 grid grid-cols-1 gap-7 mt-20'>
                {appointment.map(option => <AppointmentOption
                    key={option.id}
                    option={option}
                ></AppointmentOption>)}
            </div>
        </section>

    );
};

export default AvailableAppointment;