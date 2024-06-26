import React from "react";
import { Outlet } from "react-router-dom";
function MainHeaderNav() {
  return (
    <div>
      <Outlet></Outlet>;
    </div>
  );
}
export default MainHeaderNav;
