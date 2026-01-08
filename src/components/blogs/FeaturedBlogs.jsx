import React from "react";
import architectureImage from "../../assets/architecture.jpg";
import BlogCard from "../common/BlogCard";
export default function FeaturedBlogs() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 ">
        <div className="h-[100dvh] bg-transparent relative pt-5 ">
          <div className="hover:scale-105 ease-in-out duration-300 cursor-pointer"><img
            src={architectureImage}
            alt="Featured Blog"
            className="h-4/5 w-full rounded-lg shadow-md"
          /></div>
          <div className="absolute bottom-10 right-0 bg-white border-radius border-gray-300 p-10 rounded-xl shadow-xl w-[70%]">
            <div className="">
              <div className="ml-10">
                {/*date*/}
                <p className="text-gray-500 mb-6 text-sm font-bold">
                  June 15, 2024
                </p>

                {/*text content*/}
                {/*heading*/}
                <h1 className="font-bold text-4xl">
                  Lorem ipsum dolor sit amet.
                </h1>

                {/*text*/}
                <p className="mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ipsa quasi assumenda nemo adipisci sequi officia
                  labore dolores, expedita eius tempore unde odio delectus optio
                  minima pariatur ad culpa quia quibusdam. Aut fugiat alias,
                  cupiditate porro deleniti harum placeat atque.
                </p>
                {/*button*/}
                <div>
                  <button className="mt-6 border border-red-400 text-[#CF462A] px-6 py-3 rounded-lg font-bold text-sm  hover:bg-[#CF462A]/10 cursor-pointer">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
