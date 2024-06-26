import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Support from "./Components/Support";
import NotFoundPage from "./Components/NotFoundPage";
import MainHeaderNav from "./Components/MainHeaderNav";

function App() {
  return (
    <div className=" bg-violet-200 App ">
      <header className="flex justify-between items-center align-middle py-4 bg-violet-700  text-white px-8">
        <div>
          <p className=" text-3xl font-bold">Demo Router</p>
        </div>
        <nav className="text-xl flex gap-6 font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<MainHeaderNav></MainHeaderNav>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
