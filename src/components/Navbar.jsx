import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { useCart } from '../context/CartContext'; 

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const userData = localStorage.getItem('aimenUser');
  const user = userData ? JSON.parse(userData) : null;

  const showBackButton = location.pathname !== "/";

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  const actionBtnClass = "flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 border border-gray-100 shadow-sm hover:shadow-md font-bold text-[10px] md:text-xs uppercase tracking-tight";

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Top Row: Logo & Icons */}
      <div className="w-full px-4 md:px-8 py-3 flex justify-between items-center gap-2">
        
        <div className="flex items-center gap-2 md:gap-4">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)} 
              className="p-2 hover:bg-gray-100 rounded-full transition-all text-[#1e293b]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
          )}

          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-[#1e293b] text-white w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg font-black text-base md:text-lg shadow-lg group-hover:bg-[#b89146] transition-all">
              A
            </div>
            <span className="text-base md:text-lg font-black text-[#1e293b] tracking-tighter">
              AIMEN<span className="text-[#b89146]">MART</span>
            </span>
          </Link>
        </div>

        {/* Search Bar - Desktop View */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search items..." 
              value={searchTerm}
              onChange={(e) => {
                const val = e.target.value;
                setSearchTerm(val);
                if (val === "") navigate("/");
              }}
              onKeyDown={handleKeyDown}
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2 text-sm focus:bg-white focus:border-[#b89146] outline-none transition-all" 
            />
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <Link to="/admin" className={`${actionBtnClass} bg-white text-gray-600`}>
            <span>Portal</span>
          </Link>

          {user && (
            <Link to="/my-orders" className={`${actionBtnClass} bg-white text-[#b89146] border-[#b89146]`}>
              <span>Orders</span>
            </Link>
          )}

          <Link to="/cart" className={`${actionBtnClass} bg-[#1e293b] text-white border-transparent hover:bg-[#b89146]`}>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-[#b89146] text-white text-[9px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="hidden xs:block">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar Row - Sirf Mobile Par Dikhegi */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search items..." 
            value={searchTerm}
            onChange={(e) => {
              const val = e.target.value;
              setSearchTerm(val);
              if (val === "") navigate("/");
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2 text-sm focus:bg-white focus:border-[#b89146] outline-none transition-all shadow-sm" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;