import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { useCart } from '../context/CartContext'; 

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const showBackButton = location.pathname !== "/";

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  // ✅ Fixed Classes: Is se buttons mobile par chhupenge nahi
  const actionBtnClass = "flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-xl border border-gray-100 shadow-sm font-bold text-[9px] md:text-xs uppercase tracking-tight transition-all bg-white text-gray-600 hover:text-[#b89146]";

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="w-full px-2 md:px-8 py-3 flex justify-between items-center gap-2">
        
        {/* Logo Section */}
        <div className="flex items-center gap-1 md:gap-4 shrink-0">
          {showBackButton && (
            <button onClick={() => navigate(-1)} className="p-1.5 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-[#1e293b]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
          )}
          <Link to="/" className="flex items-center gap-1">
            <div className="bg-[#1e293b] text-white w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-lg font-black text-sm md:text-lg">A</div>
            <span className="text-sm md:text-lg font-black text-[#1e293b] tracking-tighter">AIMEN<span className="text-[#b89146]">MART</span></span>
          </Link>
        </div>

        {/* Search Bar - Desktop Only (Center aligned) */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <input 
            type="text" 
            placeholder="Search items..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#b89146]" 
          />
        </div>

        {/* ✅ All Buttons: Hamesha Visible Rahenge */}
        <div className="flex items-center gap-1 md:gap-2 shrink-0">
          <Link to="/admin" className={actionBtnClass}>Portal</Link>
          <Link to="/my-orders" className={actionBtnClass}>Orders</Link>
          <Link to="/login" className={actionBtnClass}>Account</Link>

          {/* Cart Icon */}
          <Link to="/cart" className="bg-[#1e293b] text-white p-2 rounded-xl relative ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#b89146] text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center border border-white">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Row - (Logo ke niche prominent nazar ayegi) */}
      <div className="md:hidden px-4 pb-3">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none shadow-sm focus:border-[#b89146]" 
        />
      </div>
    </nav>
  );
};

export default Navbar;