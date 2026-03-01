import React from "react";
import ProductCard from "./ProductCard";

// ✅ Ab hum 'products' ko as a prop le rahe hain jo Backend se aa rahe hain
const HomeOutdoor = ({ products }) => {
  return (
    <div className="border p-4 bg-white rounded shadow my-6">
      <h2 className="text-xl font-bold mb-4">Home & Outdoor Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* ✅ Check karte hain ke products hain ya nahi */}
        {products && products.length > 0 ? (
          products.map((item) => (
            <ProductCard
              key={item._id} 
              _id={item._id}     // 👈 YE LINE ZAROORI HAI! Is ke baghair link kaam nahi karega
              title={item.name} 
              price={item.price}
              image={item.image} 
              specs={item.specs}
            />
          ))
        ) : (
          <p className="col-span-full text-center py-4 text-gray-400">
            No Home & Outdoor items found in database...
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeOutdoor;