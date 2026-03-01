import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useParams use karein active check karne ke liye

const SidebarCategories = () => {
  const navigate = useNavigate();
  const { type } = useParams(); // URL se :type uthayega (e.g. automobiles)
  
  const categories = [
    "Automobiles", 
    "Clothes and wear", 
    "Home interiors", 
    "Computer and tech", 
  ];

  const handleCategoryClick = (cat) => {
    // ✅ FIXED: Ab ye App.js ke mutabiq /category/automobiles par le kar jayega
    const slug = cat.toLowerCase().trim().replace(/\s+/g, '-');
    navigate(`/category/${slug}`);
  };

  return (
    <div className="bg-transparent"> 
      <ul className="flex flex-col gap-1">
        {categories.map((cat, index) => {
          const slug = cat.toLowerCase().trim().replace(/\s+/g, '-');
          // ✅ Active check karne ke liye URL ka type aur slug match karein
          const isActive = type === slug;

          return (
            <li 
              key={index} 
              onClick={() => handleCategoryClick(cat)}
              className={`
                px-4 py-3 text-[14px] cursor-pointer transition-all duration-300 rounded-xl
                ${isActive 
                  ? 'bg-[#1e293b] text-[#b89146] font-bold shadow-sm' 
                  : 'text-gray-800 font-bold hover:bg-gray-100 hover:text-[#1e293b]' 
                }
              `}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarCategories;