import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-10 px-4">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Recommended items</h3>
      
      {/* 📱 Mobile: 2 Columns | 💻 Laptop: 4 Columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="bg-white border border-gray-100 rounded-xl p-3 md:p-4 flex flex-col h-full hover:shadow-lg transition-all group">
              
              {/* Image Section - No more extra space */}
              <div className="w-full h-36 md:h-48 flex items-center justify-center bg-[#f8f9fa] rounded-lg overflow-hidden p-2 mb-3">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                <p className="font-black text-gray-900 text-lg md:text-xl">${item.price}</p>
                
                <p className="text-xs md:text-sm text-gray-600 mt-1 leading-tight font-bold line-clamp-1">
                  {item.name}
                </p>

                <div className="mt-2 flex-grow">
                  {item.specs ? (
                    <div className="space-y-0.5">
                      {Object.entries(item.specs).slice(0, 2).map(([key, value]) => (
                        <p key={key} className="text-[10px] md:text-[11px] text-gray-400 capitalize truncate">
                          <span className="font-semibold">{key}:</span> {value}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[10px] md:text-[11px] text-gray-400 italic">
                      {item.description ? item.description.substring(0, 30) + "..." : "No specs"}
                    </p>
                  )}
                </div>

                <Link 
                  to={`/product/${item._id}`} 
                  className="mt-4 bg-[#2563eb] text-white text-center py-2 md:py-3 rounded-lg text-[11px] md:text-xs font-black uppercase tracking-wider"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-400 italic font-bold bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
             No items found in database...
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedItems;