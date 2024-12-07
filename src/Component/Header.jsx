import React from "react";
import Logo from "../assets/Logo Vriddhi.avif";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between px-4">
        <div>
          <a href="#home">
            <img src={Logo} alt="" />
          </a>
        </div>

        <div className="flex gap-16 mr-60">
          <div>
          <ul className="flex gap-8 py-9 text-primary-default text-lg ">
            <li className="hover:text-indigo-950 hover:font-normal duration-300 cursor-pointer">
              <a href="#home">NewsLetter</a>
            </li>
            <li className="hover:text-indigo-950 hover:font-normal duration-300 cursor-pointer">
              <a href="#about">Services</a>
            </li>
            <li className="hover:text-indigo-950 hover:font-normal duration-300 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          </div>
          <div className="py-7">
            <button className=" rounded-md py-2 border  border-primary-default px-4 text-primary-default text-lg  hover:text-white hover:bg-primary-dark cursor-pointer duration-300">
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
