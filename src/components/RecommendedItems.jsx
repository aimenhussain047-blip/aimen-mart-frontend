import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-8 px-3">
      <h3 className="text-lg font-bold mb-5 text-gray-800 ml-1">Recommended items</h3>
      
      {/* 📱 Mobile: 2 Columns | 💻 Laptop: 4 Columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col h-full hover:shadow-md transition-all">
              
              {/* 🖼️ Image Section: Height kam ki hai aur object-cover lagaya hai taake jagah khali na rahe */}
              <div className="w-full h-32 md:h-44 bg-[#f8f9fa] relative">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  className="w-full h-full object-contain p-2 mix-blend-multiply" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              {/* 📝 Content Section: Padding kam ki hai taake card compact lage */}
              <div className="p-3 flex flex-col flex-grow">
                <p className="font-black text-gray-900 text-base md:text-xl leading-none">${item.price}</p>
                
                <p className="text-[11px] md:text-sm text-gray-600 mt-1.5 font-bold line-clamp-1">
                  {item.name}
                </p>

                {/* Specs Section: Sirf 1 line taake card lamba na ho */}
                <div className="mt-2 flex-grow">
                  {item.specs ? (
                    Object.entries(item.specs).slice(0, 1).map(([key, value]) => (
                      <p key={key} className="text-[9px] md:text-[10px] text-gray-400 truncate">
                        {value}
                      </p>
                    ))
                  ) : (
                    <p className="text-[9px] text-gray-400 italic">Premium Quality</p>
                  )}
                </div>

                {/* Button: Compact for mobile */}
                <Link 
                  to={`/product/${item._id}`} 
                  className="mt-3 bg-[#2563eb] text-white text-center py-2 rounded-lg text-[10px] font-black uppercase tracking-tight"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-400 italic font-bold bg-gray-50 rounded-xl">
             No items found.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedItems;