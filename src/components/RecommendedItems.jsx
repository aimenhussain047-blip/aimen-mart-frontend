import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {
  return (
    <div className="my-6 px-3">
      <h2 className="text-lg font-bold mb-4 text-gray-800 ml-1">Recommended items</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Wahi asli database mapping jo pehle thi */}
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
              
              {/* Image box: height fix ki hai taake sofa barabar rahay */}
              <div className="w-full h-40 md:h-52 bg-[#f8f9fa] overflow-hidden">
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=AimenMart" }}
                />
              </div>
              
              <div className="p-3 flex flex-col flex-grow">
                <p className="font-black text-gray-900 text-base leading-none">${item.price}</p>
                
                {/* Title ki min-height se alignment seedhi rahegi */}
                <h4 className="text-[12px] md:text-sm text-gray-700 mt-2 font-bold line-clamp-2 leading-tight min-h-[2.5rem]">
                  {item.name}
                </h4>

                <div className="mt-1 flex-grow">
                  <p className="text-[10px] text-gray-400 truncate uppercase">
                    {item.category || "General"}
                  </p>
                </div>

                <Link 
                  to={`/product/${item._id}`} 
                  className="mt-4 block w-full bg-[#2563eb] text-white text-center py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider hover:bg-blue-700 transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-400 italic">
             No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedItems;