import React from "react";
import frameImg from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, desc1, desc2, image, formtype, setLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn}></SignupForm>
        ) : (
          <LoginForm setLoggedIn={setLoggedIn}></LoginForm>
        )}
        <div>
          <div></div>
          <p>Ok</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div>
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
        ></img>
      </div>
    </div>
  );
};
export default Template;
