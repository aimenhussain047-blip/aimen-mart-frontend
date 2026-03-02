import React from "react";
import ProductCard from "./ProductCard";

// ✅ Logic bilkul wahi hai, bas Grid settings change ki hain mobile ke liye
const HomeOutdoor = ({ products }) => {
  return (
    <div className="border-0 md:border p-2 md:p-6 bg-white rounded-3xl shadow-sm my-6 md:my-10">
      <h2 className="text-xl md:text-2xl font-black mb-6 text-[#1e293b] ml-2">
        Home & Outdoor <span className="text-[#b89146]">Products</span>
      </h2>

      {/* 📱 Mobile: grid-cols-1 (Ek ke niche ek) | 💻 Laptop: md:grid-cols-4 (Chaar aik line mein) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6">
        
        {/* ✅ Check karte hain ke products hain ya nahi */}
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="w-full">
              <ProductCard
                _id={item._id} 
                title={item.name} 
                price={item.price}
                image={item.image} 
                specs={item.specs}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
             <p className="text-gray-400 font-bold italic">
               No Home & Outdoor items found in database...
             </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeOutdoor;