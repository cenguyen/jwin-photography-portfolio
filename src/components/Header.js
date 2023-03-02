import React from "react";
// import components
import Socials from "./Socials";
import jwin from "../img/header/jwin.png";
import MobileNav from "./MobileNav";

//import Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link to={"/"} className="max-w-[200px]">
          {/* <img src={jwin} className="scale-50" alt="" /> */}
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className='text-[#686c8d] hover:text-primary transition'
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className='text-[#686c8d] hover:text-primary transition'
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className='text-[#686c8d] hover:text-primary transition'
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className='text-[#686c8d] hover:text-primary transition'
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socicals */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
