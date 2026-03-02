import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-6 px-3">
      <h2 className="text-lg font-bold mb-4 text-gray-800 ml-1">Recommended items</h2>
      
      {/* 📱 2 Columns for Mobile | 💻 4 for Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col">
              
              {/* 🖼️ Image: Fixed aspect ratio taake fuzool jagah khatam ho jaye */}
              <div className="w-full aspect-[4/5] bg-[#f8f9fa] flex items-center justify-center p-2">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  className="w-full h-full object-contain mix-blend-multiply" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              {/* 📝 Content: Compact padding aur fixed heights */}
              <div className="p-3">
                <p className="font-black text-gray-900 text-base leading-none">${item.price}</p>
                
                <h4 className="text-[11px] md:text-sm text-gray-600 mt-2 font-bold line-clamp-1 leading-tight">
                  {item.name}
                </h4>

                {/* Specs: Sirf aik line taake card uniform rahe */}
                <div className="mt-1 min-h-[14px]">
                  {item.specs && Object.values(item.specs).length > 0 ? (
                    <p className="text-[9px] text-gray-400 truncate">
                      {Object.values(item.specs)[0]}
                    </p>
                  ) : (
                    <p className="text-[9px] text-gray-400 italic opacity-0">.</p>
                  )}
                </div>

                {/* View Details Button: Sleek and small */}
                <Link 
                  to={`/product/${item._id}`} 
                  className="mt-3 block w-full bg-[#2563eb] text-white text-center py-2 rounded-lg text-[10px] font-black uppercase tracking-tight hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-400 italic text-sm">
             No items found.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedItems;