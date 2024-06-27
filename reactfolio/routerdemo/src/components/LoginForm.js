import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm(props) {
  let setLoggedIn = props.setLoggedIn;
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler} className="flex flex-col mt-6 gap-y-4">
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className=" text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          placeholder="Enter Email Address"
          onChange={changeHandler}
          name="email"
          className="w-full p-[12px] text-richblack-5 rounded-[0.5rem] bg-richblack-800"
        ></input>
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          password <sup className=" text-pink-200">*</sup>
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          placeholder="Enter Password"
          onChange={changeHandler}
          name="password"
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
        <Link to="#">
          <p className="text-sm text-blue-100 mt-1 ml-auto max-w-max">
            Forgot Password?
          </p>
        </Link>
      </label>
      <button className="w-full rounded-[8px] font-medium bg-yellow-500 text-richblack-900 border border-richblack-700 px-[12px] py-[8px] mt-6 ">
        Sign In
      </button>
    </form>
  );
}
export default LoginForm;
