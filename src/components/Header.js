import React from "react";
// import components
import Socials from "./Socials";
import jwin from "../img/header/jwin.png";
import MobileNav from "./MobileNav";

//import Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link to={"/"}>
          <img src={jwin} class="scale-50" alt="" />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav className="hidden lg:flex">
          <Link to={"/"}>Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
