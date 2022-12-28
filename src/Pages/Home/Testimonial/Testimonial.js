import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Reviews from "../Reviews/Reviews";
const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Jansone Paone",
      review:
        "They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.      ",
      location: "California",
      pic: people1,
    },
    {
      _id: 2,
      name: "Jansone Paone",
      review:
        "Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. ",

      location: "California",
      pic: people2,
    },
    {
      _id: 3,
      name: "Pandoka Deep",
      review:
        "They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.      ",

      location: "California",
      pic: people3,
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center mt-10">
        <div className=" ">
          <h2 className="text-2xl font-bold text-primary">Testimonial</h2>
          <h1 className="text-4xl ">What Our Patients Says</h1>
        </div>
        <figure>
          <img src={quote} alt="" className="w-24 lg:w-48" />
        </figure>
      </div>
      <div></div>
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 gap-10">
        {reviews.map((rev) => (
          <Reviews key={rev._id} rev={rev}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
