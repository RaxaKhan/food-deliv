import React, { useState } from "react";
import logo from "./images/logo.png";
import foodImage from "./images/bgimage.png";
import group from "./images/group.png";
import loginImage from "./images/login.png";
import exploreImage from "./images/explore.png";
import paymentImage from "./images/payment.png";
import downloadImage from "./images/download.png";

function Foodapp() {
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="flex justify-between">
        <img src={logo} alt="logo" className="h-20 w-40 animate-pulse" />
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

        <div className="hidden sm:flex space-x-20 m-6 pr-10">
          <a
            href="#home"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:px-2 focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            Home
          </a>
          <a
            href="#product"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            Product
          </a>
          <a
            href="#contact"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            Contact
          </a>
          <a
            href="#about"
            className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-slate-300 rounded-md p-1"
          >
            About
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
          href="#product"
          className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out inline-flex my-1 hover:bg-slate-300 rounded-md p-1"
        >
          Product
        </a>
        <br />
        <a
          href="#contact"
          className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out inline-flex my-1 hover:bg-slate-300 rounded-md p-1"
        >
          Contact
        </a>
        <br />
        <a
          href="#about"
          className="text-black bg-transparent border-none cursor-pointer focus:bg-black focus:text-white focus:rounded-sm focus:ring-2 focus:ring-black transition duration-300 ease-in-out inline-flex my-1 hover:bg-slate-300 rounded-md p-1"
        >
          About
        </a>
      </div>
      <div className="relative">
        <img
          src={foodImage}
          alt="Food"
          className="w-full bg-cover hidden sm:block"
        />
        <div className="absolute mt-10 text-center text-black w-full sm:top-40 sm:text-white">
          <div>
            <p className="text-xl">Food App</p>
            <h1 className="text-2xl my-2 font-bold sm:text-4xl">
              Why stay hungry when you can order form Bella Onojie
            </h1>
            <p>Download the Bella Onojes food app now on</p>
            <br />
            <button className="bg-orange-600 p-3 px-8 mx-20 text-xl rounded-3xl text-white hover:bg-transparent hover:border transition duration-500 ease-in-out">
              <b>Playstore</b>
            </button>
            <button className="bg-transparent border mx-20 border-orange-600 mt-3 p-3 px-8 text-xl rounded-3xl text-orange-600 sm:text-white sm:border-white hover:bg-orange-600 hover:border-0 transition duration-500 ease-in-out">
              <b>Appstore</b>
            </button>
          </div>
          <img src={group} alt="" className=" mx-auto" /> <br />
          <hr className="border-2 border-#E4E4E4 sm:mx-52" />
          <br />
          <br />
          <h3 className="text-2xl text-black sm:text-3xl">
            <b>How the app works</b>
          </h3>
          <br />
          <div className=" mx-auto sm:flex sm:flex-row sm:mt-10 ">
            <div className="sm:ml-10 ml-16 animate-[wiggle_1s_ease-in-out_infinite]">
              <img src={loginImage} alt="login" />
            </div>
            <div className=" px-3 sm:text-black sm:my-auto sm:text-left ">
              <h3 className="text-orange-600 my-5 text-xl sm:text-2xl animate-bounce cursor-pointer">
                <b>Create an account</b>
              </h3>
              <h1 className="text-4xl my-5">
                <b>Create/login to an existing account to get started</b>
              </h1>
              <p className="text-2xl my-5  px-8 mt-3 sm:px-0">
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
          <div className=" mx-auto sm:flex sm:flex-row-reverse sm:mt20">
            <div className="sm:mr-10 ml-16 animate-[wiggle_1s_ease-in-out_infinite]">
              <img src={exploreImage} alt="explore" />
            </div>
            <div className=" px-3 sm:text-black sm:my-auto sm:text-left ">
              <h3 className="text-orange-600 my-5 text-xl sm:text-2xl">
                <b>Explore varieties</b>
              </h3>
              <h1 className="text-4xl my-5">
                <b>Shop for your favorites meal as e dey hot.</b>
              </h1>
              <p className="text-2xl my-5  px-8 mt-3 sm:px-0">
                Shop for your favorite meals or drinks and enjoy while doing it.
              </p>
            </div>
          </div>
          <div className=" mx-auto sm:flex sm:flex-row sm:mt-20">
            <div className="sm:ml-10 ml-16 animate-[wiggle_1s_ease-in-out_infinite]">
              <img src={paymentImage} alt="Payment" />
            </div>
            <div className=" px-3 sm:text-black sm:my-auto sm:text-left ">
              <h3 className="text-orange-600 my-5 text-xl sm:text-2xl">
                <b>Checkout</b>
              </h3>
              <h1 className="text-4xl my-5">
                <b>When you done check out and get it delivered.</b>
              </h1>
              <p className="text-2xl my-5  px-8 mt-3 sm:px-0">
                When you done check out and get it delivered with ease.
              </p>
            </div>
          </div>
          <div className="relative border mt-20 sm:mt-0">
            <img
              src={downloadImage}
              alt="Download"
              className="w-full bg-cover hidden sm:block"
            />
            <div className="absolute mt-5 text-center w-full sm:top-40 py-20 sm:-mt-28 lg:mt-0 sm:py-0 tracking-widest">
              <div className="mb-32">
                <h1 className="text-4xl my-2 px-10 font-bold sm:text-4xl font-sans">
                  Download the app now.
                </h1>
                <p className="text-2xl p-10 font-mono">
                  Available on your favorite store. Start your premium
                  experience now
                </p>
                <br />
                <button className="bg-orange-600 p-3 px-8 mx-5 text-xl rounded-3xl text-white hover:bg-transparent hover:border transition duration-500 ease-in-out">
                  <b>Playstore</b>
                </button>
                <button className="bg-transparent border mx-5 border-orange-600 mt-3 p-3 px-8 text-xl rounded-3xl text-orange-600 sm:text-white sm:border-white hover:bg-orange-600 hover:border-0 transition duration-500 ease-in-out">
                  <b>Appstore</b>
                </button>
              </div>
            </div>
            <div className="sm:flex  sm:justify-evenly p-10 mt-96 sm:mt-0">
              <img
                src={logo}
                alt="logo"
                className="h-36 w-68  my-auto hidden sm:block"
              />
              <div className="flex  my-auto justify-evenly mt-52 sm:mt-16">
                <svg
                  className=" mx-3 cursor-pointer hover:fill-blue-700 transition duration-500 ease-in-out "
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="#FA4A0C"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>
                <svg
                  className=" mx-3 cursor-pointer hover:fill-pink-500 transition duration-500 ease-in-out "
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                  fill="#FA4A0C"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
                <svg
                  className=" mx-3 cursor-pointer hover:fill-blue-400  transition duration-500 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                  fill="#FA4A0C"
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                </svg>
              </div>
              <h1 className="text-black my-10 sm:mt-16">
                All rights reserved Copyright 2023. <br /> Designed By{" "}
                <strong>Huzaifa Qaiser.</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foodapp;
