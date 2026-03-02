import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-6 px-3">
      <h2 className="text-lg font-bold mb-4 text-gray-800 ml-1">Recommended items</h2>
      
      {/* MY GRID: 2 items on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        
        {products && products.length > 0 ? (
          products.map((item) => (
            // FIXED: Added 'flex flex-col h-full' to make cards equal height
            <div key={item._id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
              
              {/* IMAGE BOX: Aspect ratio keeps images uniform */}
              <div className="w-full aspect-[4/5] bg-[#f8f9fa] flex items-center justify-center p-2">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  className="w-full h-full object-contain mix-blend-multiply" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              {/* CONTENT: FIXED 'flex-grow' ensures the button stays at the bottom */}
              <div className="p-3 flex flex-col flex-grow">
                <p className="font-black text-gray-900 text-base leading-none">${item.price}</p>
                
                {/* Fixed height for name to handle different lengths */}
                <h4 className="text-[11px] md:text-sm text-gray-600 mt-2 font-bold line-clamp-2 leading-tight min-h-[2.5rem]">
                  {item.name}
                </h4>

                {/* Specs section with flex-grow to push the button down */}
                <div className="mt-1 flex-grow">
                  {item.specs && Object.values(item.specs).length > 0 ? (
                    <p className="text-[9px] text-gray-400 truncate">
                      {Object.values(item.specs)[0]}
                    </p>
                  ) : (
                    <p className="text-[9px] text-gray-400 italic opacity-0">.</p>
                  )}
                </div>

                {/* MY ACTION BUTTON: Always stays aligned at the bottom now */}
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