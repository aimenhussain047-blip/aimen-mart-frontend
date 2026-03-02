import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { useCart } from '../context/CartContext'; 

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // MY LOGIC: Checking if user is logged in from local storage
  const userData = localStorage.getItem('aimenUser');
  const user = userData ? JSON.parse(userData) : null;
  
  // Checking if I am on Home page or not to show Back Arrow
  const showBackButton = location.pathname !== "/";

  // Search function for my store
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  // My Custom Button Styling: Compact for mobile view
  const actionBtnClass = "flex items-center justify-center px-1.5 md:px-4 py-2 rounded-xl border border-gray-100 shadow-sm font-bold text-[9px] md:text-xs uppercase tracking-tighter md:tracking-tight whitespace-nowrap transition-all";

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Container for my header items */}
      <div className="w-full px-2 md:px-8 py-3 flex justify-between items-center gap-1">
        
        {/* Left: Back Arrow and My Logo */}
        <div className="flex items-center gap-1 md:gap-4 shrink-0">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)} 
              className="p-1 md:p-2 hover:bg-gray-100 rounded-full text-[#1e293b] shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
          )}

          <Link to="/" className="flex items-center gap-1 md:gap-2 shrink-0">
            <div className="bg-[#1e293b] text-white w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-lg font-black text-xs md:text-lg">
              A
            </div>
            <span className="text-[10px] md:text-lg font-black text-[#1e293b] tracking-tighter uppercase">
              AIMEN<span className="text-[#b89146]">MART</span>
            </span>
          </Link>
        </div>

        {/* Right: All my action buttons including My Orders */}
        <div className="flex items-center gap-1 md:gap-3 ml-auto">
          
          <Link to="/admin" className={`${actionBtnClass} bg-white text-gray-600`}>
            Portal
          </Link>

          {/* IMPORTANT: Only show My Orders if user is logged in */}
          {user && (
            <Link to="/my-orders" className={`${actionBtnClass} bg-white text-[#b89146] border-[#b89146]`}>
              My Orders
            </Link>
          )}

          <Link to="/login" className={`${actionBtnClass} bg-white text-gray-600`}>
            Account
          </Link>

          {/* My Shopping Cart: Fixed for mobile visibility */}
          <Link to="/cart" className="bg-[#1e293b] text-white p-2 md:p-2.5 rounded-xl shrink-0 relative flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#b89146] text-white text-[8px] md:text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* My Search Bar for mobile users */}
      <div className="md:hidden px-3 pb-3">
        <input 
          type="text" 
          placeholder="Search items..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2 text-[12px] outline-none" 
        />
      </div>
    </nav>
  );
};

export default Navbar;