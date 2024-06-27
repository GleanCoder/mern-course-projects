import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className=" w-screen h-screen  bg-richblack-900 flex flex-col overflow-x-hidden">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn}></Login>}
        ></Route>
        <Route
          path="/signup"
          element={<Signup setLoggedIn={setLoggedIn}></Signup>}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
