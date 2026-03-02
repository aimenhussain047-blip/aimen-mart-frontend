import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-6 md:my-10 px-2 md:px-4">
      <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800 ml-2">Recommended items</h3>
      
      {/* Mobile par 2 columns, Tablet/Laptop par 4 - Gap thora kam kiya hai */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="bg-white border border-gray-100 rounded-xl p-3 md:p-4 flex flex-col h-full hover:shadow-md transition-all group relative">
              
              {/* Image Section - Mobile par height thori kam ki hai */}
              <div className="w-full aspect-square flex items-center justify-center bg-[#f8f9fa] rounded-lg overflow-hidden p-2 md:p-4 mb-3">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              {/* Info Section */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-baseline gap-1">
                   <span className="text-[10px] md:text-xs font-bold text-gray-400">$</span>
                   <p className="font-black text-gray-900 text-base md:text-xl leading-none">{item.price}</p>
                </div>
                
                <p className="text-[11px] md:text-sm text-gray-600 mt-2 leading-tight font-bold line-clamp-2 h-[28px] md:h-auto">
                  {item.name}
                </p>

                {/* Specs Section - Logic 100% same, bas styling clean ki hai */}
                <div className="mt-2 flex-grow">
                  {item.specs ? (
                    <div className="space-y-0.5">
                      {Object.entries(item.specs).slice(0, 2).map(([key, value]) => (
                        <p key={key} className="text-[9px] md:text-[11px] text-gray-400 capitalize truncate">
                          <span className="font-semibold">{key}:</span> {value}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[9px] md:text-[11px] text-gray-400 italic">
                      {item.description ? item.description.substring(0, 25) + "..." : "No specs available"}
                    </p>
                  )}
                </div>

                {/* View Details Button - Mobile par size adjust kiya hai */}
                <Link 
                  to={`/product/${item._id}`} 
                  className="mt-3 bg-[#2563eb] text-white text-center py-2 rounded-lg hover:bg-blue-700 transition text-[10px] md:text-xs font-black uppercase tracking-wider"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
             <p className="text-gray-400 italic font-bold">No items found in database...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedItems;