import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      const result = await response.json();
      setCourse(result.data);
    } catch (error) {
      toast.error("Fetching Failed");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          ></Filter>
        </div>
        <div className=" w-11/12 max-w-[1200px] flex justify-center items-center flex-wrap mx-auto min-h-[50vh]">
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <Cards courses={courses} category={category}></Cards>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
