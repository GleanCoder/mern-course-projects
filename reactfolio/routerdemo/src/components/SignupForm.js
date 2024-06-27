import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({ setLoggedIn }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accountType, setAcountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let navigate = useNavigate();
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password Doesn't Matched!");
      return;
    }
    setLoggedIn(true);
    toast.success("Account Created!");
    navigate("/dashboard");
    const formInfo = {
      ...formData,
      accountType,
    };
    console.log("Form Data printed...");
    console.log(formInfo);
  }
  return (
    <div>
      <div className="max-w-max flex p-1 my-6 gap-x-1 rounded-full bg-richblack-800">
        <button
          onClick={() => setAcountType("student")}
          className={`${
            accountType === "student"
              ? " bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          onClick={() => setAcountType("instructor")}
          className={`${
            accountType === "instructor"
              ? " bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        {/* first & Last Name div */}
        <div className="flex justify-center items-center gap-x-4 mt-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              className="w-full p-[12px] text-richblack-5 rounded-[0.5rem] bg-richblack-800"
            ></input>
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last Name"
              className="w-full p-[12px] text-richblack-5 rounded-[0.5rem] bg-richblack-800"
            ></input>
          </label>
        </div>
        {/* Email  */}
        <div className="mt-4">
          <label className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address <sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter Email Address"
              className="w-full p-[12px] text-richblack-5 rounded-[0.5rem] bg-richblack-800"
            ></input>
          </label>
        </div>
        {/* password & confirmPassword */}
        <div className="flex justify-center items-center gap-x-4 mt-4">
          <label htmlFor="password" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Password <sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              id="password"
              className="w-full p-[12px] text-richblack-5 rounded-[0.5rem] bg-richblack-800"
            ></input>
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible
                  fontSize={24}
                  fill="#AFB2BF"
                ></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="w-full p-[12px] text-richblack-5 rounded-[0.5rem] bg-richblack-800"
            ></input>
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible
                  fontSize={24}
                  fill="#AFB2BF"
                ></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
              )}
            </span>
          </label>
        </div>
        <button className="w-full rounded-[8px] font-medium bg-yellow-500 text-richblack-900 border border-richblack-700 px-[12px] py-[8px] mt-6 ">
          Create Account
        </button>
      </form>
    </div>
  );
}
export default SignupForm;
