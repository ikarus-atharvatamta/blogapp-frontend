// import React from 'react'
// import { Link } from 'react-router-dom';
// import ikarusLogo from '../../assets/ikarus-delta.png';
// export default function Blogs() {
//   return (
//     <div className= "p-4 bg-gray-100 flex justify-between items-center">

//       <div className="ml-4">
//         <img src={ikarusLogo} alt="Ikarus logo" width="150" />
//       </div>
      
//       <div className="ml-4">
//         <button className="mr-5  text-blue px-4 py-2 rounded">Blog</button>
//         <button className="mr-10  text-[#CF462A] px-4 py-2 rounded">About</button>
//         <button className="mr-5 bg-[#CF462A] text-white px-8 py-2 rounded">Signup</button>
//      <button className="border border-red-400 bg-white text-red px-8 py-2 rounded ">Login</button></div>
      
//     </div>
//   );
// }


// import React from 'react'
// import { Link } from 'react-router-dom';
// import ikarusLogo from '../../assets/ikarus-delta.png';
// export default function Navbar() {
//   return (
//     <div className= "p-4 bg-gray-100 flex justify-between items-center">

//       <div className="ml-4">
//         <img src={ikarusLogo} alt="Ikarus logo" width="150" />
//       </div>
      
//       <div className="ml-4">
//         <Link to="/blog" className="mr-5  text-blue px-4 py-2 rounded">Blog</Link>
//         <Link to="/about" className="mr-10  text-[#CF462A] px-4 py-2 rounded">About</Link>
//         <Link to="/signup"><button className="mr-5 bg-[#CF462A] text-white px-8 py-2 rounded hover:bg-[#CF462A]/80 cursor-pointer">Signup</button></Link>
//      <Link to="/login" ><button className="border border-red-400 bg-white text-red px-8 py-2 rounded hover:bg-red-50 cursor-pointer">Login</button></Link></div>
      
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ikarusLogo from "../../assets/ikarus-delta.png";
import ProfileDropdown from "./Profilemenu";

export default function Navbar() {
  // 🔑 user as STATE
  const [user, setUser] = useState({
    name: "Atharva",
    email: "atharva@ikarusdelta.com",
    avatar: "https://i.pravatar.cc/150?img=68",
  });

  const handleLogout = () => {
    setUser(null); // 
  };

  return (
    <div className="p-4 bg-gray-100 flex justify-between items-center">
     
     <Link to="/">
     <div className="ml-4">
        <img src={ikarusLogo} alt="Ikarus logo" width="150" className="ml-4 cursor-pointer" />
      </div></Link>
      

      <div className="ml-4 flex items-center gap-4">
        <Link to="/blog" className="px-4 py-2">
          Blog
        </Link>

        <Link to="/about" className="px-4 py-2 text-[#CF462A]">
          About
        </Link>

        {user ? (
          <>
            <Link to="/editor">
              <button className="bg-[#CF462A] text-white px-6 py-2 rounded hover:bg-[#CF462A]/80">
                + Add Blog
              </button>
            </Link>

            <ProfileDropdown user={user} onLogout={handleLogout} />
          </>
        ) : (
          <>
            <Link to="/signup">
              <button className="bg-[#CF462A] text-white px-8 py-2 rounded">
                Signup
              </button>
            </Link>

            <Link to="/login">
              <button className="border border-red-400 bg-white px-8 py-2 rounded">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
