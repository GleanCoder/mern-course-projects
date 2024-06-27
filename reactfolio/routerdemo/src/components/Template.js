import React from "react";
import frameImg from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
const Template = ({ title, desc1, desc2, image, formtype, setLoggedIn }) => {
  return (
    <div className=" flex justify-evenly mx-auto w-11/12 max-w-[1160px] py-12 gap-y-0 gap-x-40">
      <div className="w-11/12 max-w-[450px]">
        <h1 className=" text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className=" text-[1.125rem] leading-[1.625rem] mt-4 flex flex-col">
          <span className=" text-richblack-100">{desc1}</span>
          <span className=" italic text-blue-100">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn}></SignupForm>
        ) : (
          <LoginForm setLoggedIn={setLoggedIn}></LoginForm>
        )}
        <div className="flex items-center my-4 gap-x-2 w-full">
          <div className="h-[1px] bg-richblack-700 w-full"></div>
          <p className=" leading-[1.375rem] font-medium text-richblack-700">
            Ok
          </p>
          <div className="h-[1px] bg-richblack-700 w-full"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] mt-6 gap-x-2">
          <FcGoogle></FcGoogle>
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px] mx-auto ">
        <img
          src={frameImg}
          alt="Frame pattern"
          width={558}
          height={504}
          loading="lazy"
        ></img>
        <img
          src={image}
          alt="students"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        ></img>
      </div>
    </div>
  );
};
export default Template;
