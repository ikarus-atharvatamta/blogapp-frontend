import React from 'react';
import architectureImage from '../../assets/architecture.jpg';
export default function FeaturedBlogs() {   
    return (  
        <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         
          
          <div className=' py-10'>
            <img src={architectureImage} alt="Featured Blog" className="max-h-1/5 rounded-lg shadow-md" />
          </div>
         
        </div>
        </>
      )


}