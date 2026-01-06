import React from 'react';
import imageplaceholder from '../../assets/Image-placeholder.png';
export default function FeaturedBlogs() {   
    return (  
        <>
     <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 justify-between flex items-center">
        <h1 className='text-5xl font-bold'>Our recent Post</h1>
        <button className="mt-10 text-white bg-[#DA634B]  px-10 py-4 rounded-lg font-medium">View All</button>
     </div>
     <div>
        <div className='flex justify-center items-center  sm:px-6 lg: py-10'>
           <div> <img src={imageplaceholder} alt="" /></div>
        
        <div className='ml-10 max-w-lg'>

            {/*date*/}
           <p className='text-gray-500 mb-6 text-sm font-bold'>June 15, 2024</p>

           {/*text content*/}
             {/*heading*/}
           <h1 className='font-bold text-4xl'>Exterior Rendering 101: Expert Guide from Fundamentals to Insights</h1>

           
         
           {/*text*/}
           <p className='mt-6'>Exterior rendering is a vital aspect of architectural visualization, transforming design concepts into realistic images. This process combines technical skills with artistic vision, allowing architects and designers to showcase their ideas effectively. By mastering the fundamentals and exploring advanced techniques, professionals can create compelling visuals that captivate clients and stakeholders.
</p>
           {/*button*/}
           <div><button className="mt-6 border border-red-400 text-[#CF462A] px-6 py-3 rounded-lg font-bold text-sm ">Read more</button></div>
        </div>
     </div>
     </div>
        </>
      )


}