import React from "react";
import ProductCard from "./ProductCard";

const HomeOutdoor = ({ products }) => {
  return (
    // My main container for Home & Outdoor category
    <div className="border-0 md:border p-2 md:p-6 bg-white rounded-3xl shadow-sm my-6 md:my-10">
      <h2 className="text-xl md:text-2xl font-black mb-6 text-[#1e293b] ml-2">
        Home & Outdoor <span className="text-[#b89146]">Products</span>
      </h2>

      {/* MY GRID: 1 column for mobile view and 4 columns for desktop screens */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6">
        
        {/* MY LOGIC: Checking if products exist before mapping */}
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="w-full">
              {/* Passing my product data to the ProductCard component */}
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
          // My empty state when no products are found in the database
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