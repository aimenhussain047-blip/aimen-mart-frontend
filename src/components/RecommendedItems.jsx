import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-10 px-4">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Recommended items</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-all group">
              
              {/* Image Section */}
              <div className="w-full aspect-square flex items-center justify-center bg-[#f8f9fa] rounded-md overflow-hidden p-4 mb-3">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              {/* Info Section */}
              <div className="flex flex-col flex-grow">
                <p className="font-bold text-gray-900 text-lg">${item.price}</p>
                <p className="text-sm text-gray-500 mt-1 leading-tight font-medium">
                  {item.name}
                </p>

                {/* ✅ YE HAI WOH CHANGE: Specifications dikhane ke liye */}
                <div className="mt-2 flex-grow">
                  {item.specs ? (
                    Object.entries(item.specs).slice(0, 2).map(([key, value]) => (
                      <p key={key} className="text-[11px] text-gray-400 capitalize">
                        <span className="font-semibold">{key}:</span> {value}
                      </p>
                    ))
                  ) : (
                    <p className="text-[11px] text-gray-400 italic">
                      {item.description ? item.description.substring(0, 30) + "..." : "No specs available"}
                    </p>
                  )}
                </div>

                {/* View Details Button */}
                <Link 
                  to={`/product/${item._id}`} 
                  className="mt-4 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition text-sm font-bold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center py-10 text-gray-400 italic">
            No items found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecommendedItems;