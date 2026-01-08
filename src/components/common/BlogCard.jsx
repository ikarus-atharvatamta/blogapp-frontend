import imageplaceholder from '../../assets/Image-Placeholder.png';

export default function BlogCard({ title, body }) {
  return (
    <div>
      
      <img src={imageplaceholder} alt={title} />
      <p className="text-gray-500 mb-4 text-sm font-semibold mt-5">
        June 15, 2024
      </p>
      
      <h3 className="font-bold text-md mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-3">
        {body}
      </p>
      <span className="text-[#CF462A] font-bold text-sm cursor-pointer">
        Read more...
      </span>
    </div>
  );
}