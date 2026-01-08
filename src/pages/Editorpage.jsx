// import { useState } from "react";
// import QuillEditor from "../QuillEditor";

// export default function Editorpage() {
//   const [content, setContent] = useState("");

//   const handlePublish = () => {
//     console.log("HTML content:", content);
//     // Here you can add logic to send the content to your backend or perform other actions
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <h2 className="text-2xl font-bold mb-6">Blog Editor</h2>

//       <QuillEditor value={content} onChange={setContent} />

//       <button
//         onClick={handlePublish}
//         className="mt-6 bg-[#CF462A] text-white px-6 py-3 rounded"
//       >
//         Publish
//       </button>
//     </div>
//   );
// }
import { useState } from "react";
import QuillEditor from "../components/editor/Quilleditor.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

export default function Editorpage() {
  const [content, setContent] = useState("");

  const handlePublish = () => {
    console.log("HTML content:", content);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-5xl px-6 py-12">
        
        
        <h2 className="text-xl font-bold mb-8 text-center">
          Create Your Blog Post
        </h2>

        
        <div className="bg-white rounded-xl shadow-md p-6">
          <QuillEditor value={content} onChange={setContent} />
        </div>

       
        <div className="flex justify-end mt-6">
          <button
            onClick={handlePublish}
             className="bg-[#DA634B] text-white px-6 py-3 rounded-lg cursor-pointer transition duration-300 hover:bg-[#CF462A]"
          >
            Publish
          </button>
        </div>

      </div>
    </div>
    </>
  );
}
