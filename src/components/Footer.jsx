import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white pt-16 pb-8 border-t-4 border-[#b89146]">
      <div className="w-full px-4 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        
        {/* Logo & About Section */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-[#b89146] text-[#1e293b] w-10 h-10 flex items-center justify-center rounded-xl font-black text-xl shadow-lg">
              A
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              AIMEN<span className="text-[#b89146]">MART</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Your premium destination for high-quality electronics, home interiors, and daily essentials. Experience the art of shopping with <span className="text-white font-bold italic underline decoration-[#b89146]">AimenMart</span>.
          </p>
          {/* Social Icons (Bonus addition for better look) */}
          <div className="flex gap-4 text-gray-400">
            <span className="hover:text-[#b89146] cursor-pointer transition-all">🌐</span>
            <span className="hover:text-[#b89146] cursor-pointer transition-all">📸</span>
            <span className="hover:text-[#b89146] cursor-pointer transition-all">🐦</span>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#b89146] mb-6 underline underline-offset-8">About</h4>
          <ul className="text-gray-300 text-sm space-y-4">
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">About Us</li>
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">Find Store</li>
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">Categories</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#b89146] mb-6 underline underline-offset-8">Information</h4>
          <ul className="text-gray-300 text-sm space-y-4">
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">Help Center</li>
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">Shipping</li>
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">Refunds</li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#b89146] mb-6 underline underline-offset-8">Support</h4>
          <ul className="text-gray-300 text-sm space-y-4">
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">Contact Us</li>
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">Privacy Policy</li>
            <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium">Terms of Use</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="border-t border-gray-700/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-4">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          © 2024 <span className="text-white">AimenMart</span>. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 grayscale hover:grayscale-0 transition opacity-50" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 grayscale hover:grayscale-0 transition opacity-50" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;