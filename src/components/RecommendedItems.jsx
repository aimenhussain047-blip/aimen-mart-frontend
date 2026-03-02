import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-6 px-3">
      <h2 className="text-lg font-bold mb-4 text-gray-800 ml-1">Recommended items</h2>
      
      {/* GRID: 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
              
              {/* IMAGE BOX: Fixed height and object-cover to keep all cards balanced */}
              <div className="w-full h-40 md:h-52 bg-[#f8f9fa] overflow-hidden">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  // object-cover is key: it fills the box without stretching the image
                  className="w-full h-full object-cover" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              {/* CONTENT BOX: flex-grow ensures the button stays at the bottom */}
              <div className="p-3 flex flex-col flex-grow">
                <p className="font-black text-gray-900 text-base leading-none">${item.price}</p>
                
                {/* Product Name: Min-height handles 1 or 2 lines without breaking balance */}
                <h4 className="text-[12px] md:text-sm text-gray-700 mt-2 font-bold line-clamp-2 leading-tight min-h-[2.5rem]">
                  {item.name}
                </h4>

                {/* Specs/Category: flex-grow pushes the link down */}
                <div className="mt-1 flex-grow">
                  <p className="text-[10px] text-gray-400 truncate uppercase">
                    {item.category || "General"}
                  </p>
                </div>

                {/* ACTION BUTTON: Perfect alignment on all devices */}
                <Link 
                  to={`/product/${item._id}`} 
                  className="mt-4 block w-full bg-[#2563eb] text-white text-center py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider hover:bg-blue-700 transition-all active:scale-95"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-400 italic">
             No products to display.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedItems;