import React from 'react'
import sofaimage from '../../assets/sofaimg.png';
export default function Blogs() {
  return (
    <div className="h-72 bg-gradient-to-b from-[#EC917C] to-[#DA634B] h-165">
      <div  className="flex items-center justify-center h-full"> 

        <div className='p-10 pb-50 max-w-lg mt-40'>
          <h1 className="text-white text-5xl font-bold pb-5 ">Why Use a 3D Sofa Configurator?</h1>
        
        <div>
          <h3 className="text-white max-w-lg text-md ">
A 3D sofa configurator enhances the customer shopping experience by allowing them to create personalized furniture designs tailored to their specific needs, preferences, and space.  </h3>
       </div>   <button className="mt-10 bg-white text-[#CF462A] px-10 py-4 rounded font-medium">Read more</button>
        </div>
        <div className='p-10 pl-30'>
          <img src={sofaimage} alt="Sofa" className="min-w-md" />
        </div>
      </div>
    </div>
  );
}