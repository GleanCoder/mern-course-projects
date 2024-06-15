import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <div className=" w-[100vw] h-[100vh] bg-gray-200 flex flex-col justify-center items-center">
      <div className=" text-center">
        <h1 className=" text-4xl font-bold">Our Testimonials</h1>
        <div className="w-1/5 h-[4px] bg-violet-400 mt-1 mx-auto"></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
};

export default App;
