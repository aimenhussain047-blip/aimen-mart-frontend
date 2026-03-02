import React from 'react';
import SidebarCategories from './SidebarCategories';
import Wallpaper from '../assets/wallpaper1.jpg'; 
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/category?type=clothes-and-wear');
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[400px] md:min-h-[480px]">
      
      {/* 1. Sidebar - Sirf Laptop par dikhega (No Change) */}
      <div className="hidden lg:block w-[240px] border-r-2 border-gray-100 bg-[#fafbfc] p-8 shrink-0">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
          Categories
        </h3>
        <SidebarCategories />
      </div>

      {/* 2. Main Banner Area */}
      <div className="flex-1 flex flex-col md:flex-row bg-white relative">
        
        {/* Content Section */}
        <div className="w-full md:w-[48%] px-6 md:pl-10 md:pr-4 py-10 md:py-12 flex flex-col justify-center z-10 order-2 md:order-1">
          
          {/* Top Actions */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8">
             <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 shrink-0">
                <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <p className="text-orange-600 font-black text-[9px] uppercase tracking-widest">Live: Hot Deals</p>
             </div>
             
             <button 
                onClick={handleExploreClick}
                className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#1e293b] hover:text-[#b89146] flex items-center gap-2 transition-all group border-b-2 border-transparent hover:border-[#b89146]"
             >
                Explore Collection 
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
             </button>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-[#1e293b] leading-[0.9] mb-4 md:mb-6 tracking-tighter">
            Discover Your <br/> 
            <span className="text-[#b89146]">Essentials</span>
          </h1>
          
          <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-bold max-w-[320px]">
            Curated premium collections. Sourced globally, delivered locally.
          </p>
        </div>

        {/* Right Image - Mobile par upar ayegi, Laptop par side mein */}
        <div className="w-full md:w-[52%] h-[250px] md:h-auto relative overflow-hidden order-1 md:order-2">
          <img 
            src={Wallpaper} 
            alt="Hero Banner" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-gray-100"></div>
        </div>
      </div>

      {/* 3. Right Side Boxes - Laptop View (No Change) */}
      <div className="hidden xl:flex flex-col w-[270px] bg-[#f8fafc] shrink-0 border-l-2 border-gray-100 p-5 gap-4">
         <div className="bg-white p-6 rounded-[1.5rem] border-2 border-transparent shadow-sm flex flex-col gap-4 group hover:border-[#b89146] transition-all cursor-default">
            <div className="w-12 h-12 bg-[#1e293b] text-white rounded-2xl flex items-center justify-center text-2xl">🚀</div>
            <div>
               <h4 className="font-black text-[12px] text-[#1e293b] uppercase tracking-widest mb-1">Global Shipping</h4>
               <p className="text-[11px] text-[#b89146] font-black italic">Arrives in 3-5 days</p>
            </div>
         </div>

         <div className="bg-white p-6 rounded-[1.5rem] border-2 border-transparent shadow-sm flex flex-col gap-4 group hover:border-[#b89146] transition-all cursor-default">
            <div className="w-12 h-12 bg-[#1e293b] text-white rounded-2xl flex items-center justify-center text-2xl">🛡️</div>
            <div>
               <h4 className="font-black text-[12px] text-[#1e293b] uppercase tracking-widest mb-1">Buyer Protection</h4>
               <p className="text-[11px] text-[#b89146] font-black italic">100% Secure Payment</p>
            </div>
         </div>

         <div className="flex-1 bg-gradient-to-br from-[#b89146] to-[#8a6d35] p-6 rounded-[1.5rem] flex flex-col justify-center text-white relative overflow-hidden shadow-xl group">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-90 underline underline-offset-4">Weekly Promo</p>
            <h4 className="font-black text-2xl leading-tight">Get 10% <br/> Extra Off</h4>
            <div className="mt-4 bg-white/20 w-fit px-3 py-1 rounded-lg text-[10px] font-black group-hover:bg-white group-hover:text-[#b89146] transition-all">Claim Now</div>
            <span className="absolute -bottom-6 -right-2 text-white/20 text-8xl font-black italic">10</span>
         </div>
      </div>
    </div>
  );
};

export default Hero;