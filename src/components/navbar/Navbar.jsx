import React from 'react'
import ikarusLogo from '../../assets/ikarus-delta.png';
export default function Blogs() {
  return (
    <div className= "p-4 bg-gray-100 flex justify-between items-center">

      <div className="ml-4">
        <img src={ikarusLogo} alt="Ikarus logo" width="150" />
      </div>
      
      <div className="ml-4">
        <button className="mr-5  text-blue px-4 py-2 rounded">Blog</button>
        <button className="mr-10  text-[#CF462A] px-4 py-2 rounded">About</button>
        <button className="mr-5 bg-[#CF462A] text-white px-8 py-2 rounded">Signup</button>
     <button className="border border-red-400 bg-white text-red px-8 py-2 rounded ">Login</button></div>
      
    </div>
  );
}