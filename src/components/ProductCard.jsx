import React from 'react';
import { Link } from 'react-router-dom'; 

const ProductCard = ({ _id, title, price, image }) => {
  return (
    // My main product card container with hover effects
    <div className="border rounded-lg p-3 bg-white hover:shadow-lg transition flex flex-col">
      
      {/* MY PRODUCT IMAGE: Using a gray background placeholder if image is loading */}
      <div className="w-full h-40 overflow-hidden rounded-md bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* MY PRODUCT INFO: Displaying the name and the starting price */}
      <h3 className="text-sm font-semibold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm">From ${price}</p>

      {/* MY ACTION BUTTON: Navigates to the specific product detail page using ID */}
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