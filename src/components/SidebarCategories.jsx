import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 

const SidebarCategories = () => {
  const navigate = useNavigate();
  // MY LOGIC: Using useParams to detect the active category from the URL
  const { type } = useParams(); 
  
  // MY CATEGORIES: Static list for my store sidebar
  const categories = [
    "Automobiles", 
    "Clothes and wear", 
    "Home interiors", 
    "Computer and tech", 
  ];

  // MY NAVIGATION: Converting category name to slug and navigating to category page
  const handleCategoryClick = (cat) => {
    const slug = cat.toLowerCase().trim().replace(/\s+/g, '-');
    navigate(`/category/${slug}`);
  };

  return (
    <div className="bg-transparent"> 
      <ul className="flex flex-col gap-1">
        {categories.map((cat, index) => {
          // MY SLUG LOGIC: Keeping it consistent with my App.js routes
          const slug = cat.toLowerCase().trim().replace(/\s+/g, '-');
          
          // CHECKING ACTIVE STATE: Comparing URL param with my generated slug
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