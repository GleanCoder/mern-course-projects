import React from "react";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

function Card(props) {
  let review = props.reviews;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-100px] mx-auto z-[10]">
        <img
          src={review.image}
          alt="img"
          className=" aspect-square rounded-full w-[140px] h-[140px] z-25"
        ></img>
        <div className=" w-[140px] h-[140px] rounded-full  bg-violet-500 absolute top-[-6px] left-[10px] z-[-2]"></div>
      </div>

      <div className=" text-center mt-7">
        <h2 className=" text-2xl font-bold capitalize tracking-wider">
          {review.name}
        </h2>
        <p className=" text-sm text-violet-300 uppercase">{review.job}</p>
      </div>

      <div className=" text-violet-400 mx-auto mt-5">
        <FaQuoteLeft></FaQuoteLeft>
      </div>
      <div>
        <p className=" text-center mt-4 text-slate-500">{review.text}</p>
      </div>
      <div className=" text-violet-400 mx-auto mt-5">
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  );
}
export default Card;
