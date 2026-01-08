import React from "react";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/common/NewLetter";
import Footer from "../components/common/Footer";
import Maskgroup from "../assets/Maskgroup-1.png";
export default function Errorpage() {
  return (
    <>
      <Navbar />
      <div className=" "></div>
      {/* <div className="relative h-screen">
        <div className="rounded-[16px] w-[816px] h-[472px] bg-gradient-to-b from-[#EC917C] to-[#DA634B] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-4 text-white">
        <div>
          <div class Name=" absolute max-h-10 flex justify-center items-center">
            <img src={Maskgroup} alt="mask group"  className=" relative" />
          </div>
          
          <div className="mt-15 flex justify-center items-center h-full text-white font-bold text-9xl">404</div>
           <div className="mt-15 flex justify-center items-center h-full text-white  text-xl">Sorry!</div>
           <div className="mt-3 flex justify-center items-center h-full text-white text-xl mb-4">The link is broken, try to refresh or go to home</div>
           <div className="flex justify-center items-center h-full text-white text-xl"><button className=" rounded-[8px] text-sm text-black py-4 px-8 bg-white mt-5">Go To Home</button></div>
           
        </div>
        </div>
       
       
      </div> */}
      <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <div className="relative w-[816px] h-[472px] rounded-2xl bg-gradient-to-b from-[#EC917C] to-[#DA634B] flex flex-col items-center justify-center text-white overflow-hidden"  >
          <img
            src={Maskgroup}
            alt="wave background"
            className="absolute top-0 left-0 bottom-50 w-600"
          />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-xl font-semibold">Sorry!</p>
            <p className="text-center text-lg max-w-md">
              The link is broken, try to refresh or go to home
            </p>
            <button className="mt-4 rounded-lg bg-white text-black px-8 py-3 text-sm font-medium">
              Go To Home
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
