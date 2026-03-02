import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-6 md:my-10 px-4">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Recommended items</h3>
      
      {/* 📱 Mobile par ek ke niche ek (grid-cols-1), Laptop par char (md:grid-cols-4) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col h-full hover:shadow-lg transition-all group">
              
              {/* Image Section - Mobile par bari dikhegi */}
              <div className="w-full aspect-square flex items-center justify-center bg-[#f8f9fa] rounded-xl overflow-hidden p-6 mb-4">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              {/* Info Section */}
              <div className="flex flex-col flex-grow">
                <p className="font-black text-gray-900 text-2xl">${item.price}</p>
                <p className="text-base text-gray-600 mt-2 leading-tight font-bold">
                  {item.name}
                </p>

                {/* Specs - Aapka Original Logic */}
                <div className="mt-4 flex-grow">
                  {item.specs ? (
                    <div className="space-y-1">
                      {Object.entries(item.specs).slice(0, 3).map(([key, value]) => (
                        <p key={key} className="text-sm text-gray-400 capitalize">
                          <span className="font-semibold">{key}:</span> {value}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 italic">
                      {item.description ? item.description.substring(0, 50) + "..." : "No specs available"}
                    </p>
                  )}
                </div>

                {/* View Details Button */}
                <Link 
                  to={`/product/${item._id}`} 
                  className="mt-6 bg-[#2563eb] text-white text-center py-3 rounded-xl hover:bg-blue-700 transition text-sm font-black uppercase tracking-widest shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-400 italic font-bold bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            No items found in database...
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedItems;