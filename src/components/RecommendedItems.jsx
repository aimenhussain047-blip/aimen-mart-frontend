import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItems = () => {
  // Baji, ye temporary data hai taake aapka project khali na dikhayi de
  const finalItems = [
    { _id: '1', name: 'Luxury Velvet Sofa Set', price: 450, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc', category: 'Home' },
    { _id: '2', name: 'Minimalist Plant Black Vase', price: 45, image: 'https://images.unsplash.com/photo-1512213031070-58814777c57b', category: 'Interior' },
    { _id: '3', name: 'Modern Coffee Table', price: 120, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88', category: 'Furniture' },
    { _id: '4', name: 'High-Performance Laptop', price: 899, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853', category: 'Electronics' }
  ];

  return (
    <div className="my-6 px-3">
      <h2 className="text-lg font-bold mb-4 text-gray-800 ml-1">Recommended items</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {finalItems.map((item) => (
          <div key={item._id} className="bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col h-full">
            <div className="w-full h-40 md:h-52 bg-[#f8f9fa] overflow-hidden">
              <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <p className="font-black text-gray-900 text-base">${item.price}</p>
              <h4 className="text-[12px] md:text-sm text-gray-700 mt-2 font-bold line-clamp-2 min-h-[2.5rem]">{item.name}</h4>
              <div className="flex-grow"><p className="text-[10px] text-gray-400 uppercase">{item.category}</p></div>
              <Link to="/" className="mt-4 block w-full bg-[#2563eb] text-white text-center py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;