import React from 'react';
import ProductCard from './ProductCard';

const ConsumerElectronics = () => {
  const items = [
    { title: "Smart watches", price: "19", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" },
    { title: "Cameras", price: "89", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200" },
    { title: "Headphones", price: "10", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" },
    { title: "Smart tea kettle", price: "90", image: "https://images.unsplash.com/photo-1594824464562-06085566ec46?w=200" },
    { title: "Gaming set", price: "35", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200" },
    { title: "Laptops & PC", price: "340", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200" },
    { title: "Smartphones", price: "19", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200" },
    { title: "Electric kettle", price: "240", image: "https://images.unsplash.com/photo-1520915569730-600399202020?w=200" },
  ];

  return (
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden my-6 bg-white shadow-sm">
      <div className="md:w-1/4 p-6 flex flex-col justify-between bg-blue-50" 
           style={{ backgroundImage: "linear-gradient(rgba(209, 231, 255, 0.8), rgba(209, 231, 255, 0.8)), url('https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400')" }}>
        <h3 className="text-xl font-bold text-gray-800">Consumer electronics</h3>
        <button className="bg-white px-4 py-2 rounded-md font-bold text-sm shadow hover:bg-gray-50 w-fit transition">Source now</button>
      </div>
      <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4">
        {items.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ConsumerElectronics;