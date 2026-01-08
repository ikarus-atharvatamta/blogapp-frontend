export default function BlogDetailCard({title,content,image,author,date,}) {
  return (
    <>
    <div className="max-w-4xl mx-auto -mt-32 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 hover:scale-105 ease-in-out duration-300 cursor-pointer">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-6" />
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span>{date}</span>
          <span></span>
          <span>{author}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>

        {/* Content */}
        <div
          className=" max-w-none text-gray-700"
         dangerouslySetInnerHTML={{ __html: content }}
        />

      </div>

      </div>
   
     </>
  );
}
