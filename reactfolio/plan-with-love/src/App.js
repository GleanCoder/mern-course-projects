import { React, useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTour] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTour(newTours);
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
