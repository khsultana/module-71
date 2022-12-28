import React from "react";

const Reviews = ({ rev }) => {
  const { name, pic, review, location } = rev;
  return (
    <div className="card w-96 bg-slate-50 shadow-lg">
      <div className="card-body ">
        <p>{review}</p>
        <div className="flex items-center justify-center gap-10 mt-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={pic} alt="" className="" />
            </div>
          </div>
          <div>
            <p className="">{name}</p>
            <h2 className="">{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
