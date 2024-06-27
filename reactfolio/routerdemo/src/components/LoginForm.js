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
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          placeholder="Enter Email Address"
          onChange={changeHandler}
          name="email"
        ></input>
      </label>

      <label>
        <p>
          password <sup>*</sup>
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          placeholder="Enter Password"
          onChange={changeHandler}
          name="password"
        ></input>
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? (
            <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
          ) : (
            <AiOutlineEye></AiOutlineEye>
          )}
        </span>
        <Link to="#">
          <p>Forgot Password?</p>
        </Link>
      </label>
      <button>Sign In</button>
    </form>
  );
}
export default LoginForm;
