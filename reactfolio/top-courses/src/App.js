import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";

const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCourses(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Filter filterData={filterData}></Filter>
      <Cards courses={courses}></Cards>
    </div>
  );
};

export default App;
