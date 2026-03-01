import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // 🚀 useNavigate add kiya
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const ItemOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // 🚀 navigate function
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://aimen-mart-backend.vercel.app/api/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, qty: 1 });
      alert(`${product.name} has been added to your cart!`);
    }
  };

  if (loading) return <div className="text-center py-20 text-2xl font-black text-[#1e293b]">Loading...</div>;
  if (!product) return <div className="text-center py-20 text-2xl font-black text-red-500">Product Not Found!</div>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar searchTerm="" setSearchTerm={() => {}} />
      
      <div className="container mx-auto px-4 py-8 md:px-10">
        
        {/* 🚀 BACK BUTTON - Sab se ooper prominent */}
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center gap-2 mb-8 text-[#1e293b] font-black text-xs uppercase tracking-widest hover:text-[#b89146] transition-all"
        >
          <div className="bg-gray-100 p-2 rounded-full group-hover:bg-[#b89146]/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          Back to Collection
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left: Image Container */}
          <div className="bg-white rounded-3xl p-4 md:p-12 flex items-center justify-center border-2 border-gray-50 shadow-sm relative overflow-hidden group">
            <div className="absolute top-4 left-4 bg-[#b89146] text-[#1e293b] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
              Original Product
            </div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-[450px] w-full object-contain group-hover:scale-105 transition-all duration-500" 
            />
          </div>

          {/* Right: Info Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-[#1e293b] mb-4 tracking-tighter leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
               <p className="text-3xl font-black text-[#b89146]">${product.price}</p>
               <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">In Stock</span>
            </div>
            
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100 mb-8">
              <p className="text-[10px] font-black text-[#b89146] uppercase tracking-[0.2em] mb-3">Product Overview</p>
              <p className="text-gray-500 leading-relaxed font-medium">{product.description}</p>
            </div>

            {/* Specifications Section */}
            {product.specs && Object.keys(product.specs).length > 0 ? (
              <div className="border-2 border-gray-50 p-6 rounded-2xl mb-8">
                <p className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em] mb-4">Technical Specs</p>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-50 pb-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{key}</span>
                      <span className="text-sm text-[#1e293b] font-black italic">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 border border-dashed border-gray-200 rounded-2xl text-gray-400 text-[11px] font-bold uppercase text-center mb-8 tracking-widest">
                General Specification Applied
              </div>
            )}

            {/* Action Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-[#1e293b] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[#b89146] transition-all shadow-xl shadow-gray-200 active:scale-95 flex items-center justify-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              Secure Checkout
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemOverview;