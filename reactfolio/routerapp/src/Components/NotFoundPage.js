import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  function backHandler() {
    navigate(-1);
  }
  return (
    <div className=" flex flex-col items-center gap-16">
      <div className="flex justify-center items-center text-red-500 mt-[15%] text-[52px] uppercase ">
        page Not Found
      </div>
      <button
        onClick={backHandler}
        className=" px-12 py-4 rounded-md bg-violet-700 text-white text-xl font-semibold capitalize"
      >
        Move Back
      </button>
    </div>
  );
}
export default NotFoundPage;
