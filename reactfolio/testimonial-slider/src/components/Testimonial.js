import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";
const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftSlideHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightSlideHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surpriseHandler() {
    let randomIndex = Math.trunc(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className=" w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 rounded-md hover:shadow-xl">
      <Card reviews={reviews[index]}></Card>

      <div className=" mt-10 flex justify-center gap-3 text-3xl text-violet-400 font-bold ">
        <button
          className=" cursor-pointer hover:text-violet-500"
          onClick={leftSlideHandler}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          className=" cursor-pointer hover:text-violet-500"
          onClick={rightSlideHandler}
        >
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
      <div>
        <button
          className=" px-10 py-2 cursor-pointer font-bold rounded-sm bg-violet-400 hover:bg-violet-500 text-white transition-all duration-200 text-lg mt-6"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};
export default Testimonial;
