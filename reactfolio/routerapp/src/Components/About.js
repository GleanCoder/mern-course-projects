import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("index");
  }

  return (
    <div className=" flex flex-col items-center gap-16">
      <div className="flex justify-center items-center text-violet-700 mt-[15%] text-[52px] uppercase ">
        About Page
      </div>
      <button
        onClick={clickHandler}
        className=" px-12 py-4 rounded-md bg-violet-700 text-white text-xl font-semibold capitalize"
      >
        Move to Home Page
      </button>
    </div>
  );
}
export default About;
