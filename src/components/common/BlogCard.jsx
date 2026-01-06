import React from "react";
import bcard1 from '../../assets/bcard1.png';
import bcard2 from '../../assets/bcard2.png';
import bcard3 from '../../assets/bcard3.png';
export default function BlogCard() {
return (
<div className="grid grid-cols-3 gap-4 px-10 py-10 max-w-7xl mx-auto">
  <div className="">
    <div>
        <img src={bcard1} alt="" className="rounded-xl"/>
        <p className='text-gray-500 mb-6 text-sm font-bold mt-5'>June 15, 2024</p></div>
    <div className="font-bold text-md mb-3"><h3>Blog Title 1</h3></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias debitis aperiam neque, dolore necessitatibus!</p>
   <a href="/blog1" className="text-[#CF462A] font-bold text-sm ">Read more...</a>
  </div>
  <div className="">
    <div><img src={bcard2} alt="" className="rounded-xl"/>
    <p className='text-gray-500 mb-6 text-sm font-bold mt-5'>June 15, 2024</p></div>
    <div className="font-bold text-md mb-3"><h3>Blog Title 2</h3></div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quaerat et molestiae ducimus pariatur alias.</p>
    <a href="/blog1" className="text-[#CF462A] font-bold text-sm ">Read more...</a>
  </div>
  <div className="">
    <div><img src={bcard3} alt="" className="rounded-xl"/>
    <p className='text-gray-500 mb-6 text-sm font-bold mt-5'>June 15, 2024</p></div>
    <div className="font-bold text-md mb-3"><h3>Blog Title 3</h3></div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque adipisci, laudantium quia odit optio animi maxime omnis nemo?</p>
    <a href="/blog1" className="text-[#CF462A] font-bold text-sm ">Read more...</a>
  </div>
</div>

)

}