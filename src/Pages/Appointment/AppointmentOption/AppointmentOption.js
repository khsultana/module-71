import React from 'react';

const AppointmentOption = ({ option }) => {
    const { name, slots } = option
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Space' : 'Spaces'}Available</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Appointment</button>
                        <label htmlFor="my-modal-3" className="btn">open modal</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;