import React from 'react';
import { Link } from 'react-router-dom'; 

const Offers = () => {
  // MY DEALS LIST: Added category to each item so it redirects correctly
  const deals = [
    { name: "Smart watches", disc: "-25%", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", category: "computer-and-tech" },
    { name: "Laptops", disc: "-15%", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200", category: "computer-and-tech" },
    { name: "Cameras", disc: "-40%", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200", category: "computer-and-tech" },
    { name: "Headphones", disc: "-20%", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200", category: "computer-and-tech" },
    { name: "Mobiles", disc: "-25%", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200", category: "computer-and-tech" },
  ];

  return (
    // My main container for deals and the countdown timer
    <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
      
      {/* MY TIMER SECTION: Showing the remaining time for offers */}
      <div className="p-6 border-r border-gray-200 md:w-1/4">
        <h3 className="text-lg font-bold text-gray-800">Deals and offers</h3>
        <p className="text-gray-400 text-sm mb-4">Hygiene equipments</p>
        <div className="flex gap-2">
          {['04', '13', '34', '56'].map((num, i) => (
            <div key={i} className="bg-gray-700 text-white rounded p-1 text-center w-11">
              <span className="block font-bold">{num}</span>
              <span className="text-[10px]">{i === 0 ? 'Days' : i === 1 ? 'Hour' : i === 2 ? 'Min' : 'Sec'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MY DEALS GRID: Mapping through my deals array */}
      <div className="grid grid-cols-2 md:grid-cols-5 flex-1">
        {deals.map((item, index) => (
          /* MY DYNAMIC LINK: Redirects to the specific category page */
          <Link 
            key={index} 
            to={`/category/${item.category}`} 
            className="p-4 border-r border-gray-100 text-center hover:bg-gray-50 transition-colors cursor-pointer block"
          >
            <img src={item.img} alt={item.name} className="h-28 mx-auto object-contain mb-3 rounded" />
            <p className="text-sm font-medium text-gray-700">{item.name}</p>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold mt-2 inline-block">
              {item.disc}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;