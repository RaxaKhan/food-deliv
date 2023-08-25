import React, { useState } from "react";
import logo from "./images/logo.png";
import bgHome from "./images/home.jpg";
import cap from "./images/cap.png";

function Foodapp() {
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-20 w-20" />
          <h1 className="text-xl sm:text-3xl sm:hidden lg:block">
            <b className="text-red-600">Scarlet</b>
            <b>-</b>
            <b className="text-blue-800">Associates</b>
          </h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          class={`w-6 h-6  m-8 sm:hidden hover:border ${
            navOpen ? "hidden" : "block"
          }`}
          onClick={toggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class={`w-6 h-6  m-8 sm:hidden hover:border ${
            navOpen ? "block" : "hidden"
          }`}
          onClick={toggle}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div className="hidden text-xl sm:flex space-x-10 m-6 pr-10">
          <a
            href="#home"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:px-2 focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            Services
          </a>
          <a
            href="#Projects"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            Contact
          </a>
        </div>
      </div>
      <div className={`text-center  ${navOpen ? "block" : "hidden"} sm:hidden`}>
        <a
          href="#home"
          className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:px-2 focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out inline-flex my-1 hover:bg-slate-300 rounded-md p-1"
        >
          Home
        </a>
        <br />
        <a
          href="#Services"
          className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out inline-flex my-1 hover:bg-slate-300 rounded-md p-1"
        >
          Services
        </a>
        <br />
        <a
          href="#Projects"
          className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out inline-flex my-1 hover:bg-slate-300 rounded-md p-1"
        >
          Projects
        </a>
        <br />
        <a
          href="#about"
          className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out inline-flex my-1 hover:bg-slate-300 rounded-md p-1"
        >
          About
        </a>
        <br />
        <a
          href="#Contact"
          className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out inline-flex my-1 hover:bg-slate-300 rounded-md p-1"
        >
          Contact
        </a>
      </div>
      {/* Cover section  */}
      <div className="relative">
        <img
          src={bgHome}
          alt="Home"
          className="w-full bg-cover hidden sm:block"
        />
        <div className="absolute top-0  text-white text-center p-8 bg-blue-950 sm:bg-transparent sm:p-28 md:p-32 lg:p-44 xl:p-52 2xl:p-52 sm:text-white sm:text-left space-y-5">
          <h3 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Crafting Excellence in Construction
          </h3>
          <p className=" font-mono text-md   sm:text-lg   2xl:text-2xl">
            Welcome to <strong>"Scarlet Associates"</strong>, your trusted
            partner in construction. We turn your vision into reality.Our
            comprehensive services cover every aspect of construction, ensuring
            a seamless journey from start to finish.
          </p>
          <button className="bg-red-600 p-2 rounded-md ">Learn More</button>
        </div>
        <div className="border-4 hover:drop-shadow-2xl p-5 rounded-md m-8 flex-column items-center absolute top-96 bg-white">
          <h1 className="text-2xl px-3">
            <b>We Construct and Manage Places and Infrastructures.</b>
          </h1>
          <div className="flex-column items-center">
            <div className="flex justify-center">
              <img src={cap} alt="cap" className="h-10 w-10 m-1" />
              <div>
                <h3>
                  <b>General Contract</b>
                </h3>
                <p className="">
                  {" "}
                  Our general contracting services ensure a seamless journey
                  from vision to finished masterpiece
                </p>
              </div>
            </div>
            <h3>
              <b>Project Planning</b>
            </h3>
            <p className="">
              {" "}
              Our meticulous project planning paves the way for flawless
              execution and stunning results.
            </p>
            <h3>
              <b>Refurbishment</b>
            </h3>
            <p className="">
              Our refurbishment expertise transforms outdated areas into modern
              havens of style and functionality.
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Foodapp;
