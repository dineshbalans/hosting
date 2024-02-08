import React from "react";
import MainContext from "../General/MainContext";
import { reviewData } from "./data/reviewData";
import ReviewStars from "./ReviewStars";

const Review = ({ haveSix = false }) => {
  return (
    <section className="bg-white">
      <div className={`pdng space-y-12 centerContainer`}>
        <MainContext
          title="What Our Customers Say About Us?"
          subTitle="Authoritatively reinvent client-centric e-markets via fully tested process. Objectively restore strategic initiatives through fully researched."
        />
        <div className="flex flex-wrap justify-center gap-6">
          {reviewData
            .slice(0, haveSix ? 6 : 3)
            .map(({ id, day, name, subject, reviewDesc }) => (
              <div
                key={id}
                className="w-full md:w-[47%] lg:w-[31%] bg-cement/40 border p-10 space-y-3 rounded mb-6"
              >
                <ReviewStars />
                <h5 className="text-ternary font-semibold text-lg">
                  {subject}
                </h5>
                <p className="text-quadra leading-7">{reviewDesc}</p>
                <div className="flex justify-between items-center">
                  <h1 className="text-ternary font-medium">{name}</h1>
                  <p className="text-quadra text-sm">{day} days ago</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
