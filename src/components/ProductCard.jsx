import React from "react";
import { Link } from "react-router-dom"; // ✅ Link import karna zaroori hai

// ✅ Yahan humne _id ko bhi props mein shamil kiya hai
const ProductCard = ({ _id, title, price, image }) => {
  return (
    <div className="border rounded-lg p-3 bg-white hover:shadow-lg transition flex flex-col">
      
      {/* Image */}
      <div className="w-full h-40 overflow-hidden rounded-md bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <h3 className="text-sm font-semibold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm">From ${price}</p>

      {/* ✅ Naya Button: Jo user ko Detail Page par le jayega */}
      <Link 
        to={`/product/${_id}`} 
        className="mt-3 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;