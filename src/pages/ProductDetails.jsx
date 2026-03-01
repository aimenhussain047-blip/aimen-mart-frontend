import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext'; 

const ProductDetails = () => {
  const { productId, id } = useParams();
  const currentId = productId || id; 

  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      if (!currentId) return;
      try {
        setLoading(true);
        const { data } = await axios.get(`https://aimen-mart-backend.vercel.app/api/products/${currentId}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    window.scrollTo(0, 0);
  }, [currentId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, qty: 1 });
      alert("Added to bag! 🛍️");
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e293b]"></div>
      <p className="ml-4 font-black uppercase tracking-widest text-gray-400">Loading Product...</p>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-black text-red-500 uppercase">Product Not Found!</h2>
      <button onClick={() => navigate('/')} className="mt-4 text-blue-600 font-bold underline">Go Back Home</button>
    </div>
  );

  const specifications = product.details || product.specs || product.specifications || null;

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-black transition-all font-black text-[10px] uppercase tracking-[0.2em]"
        >
          ← Back to Collection
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 p-6 md:p-12 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#fafafa] rounded-[2rem] p-10">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-[500px] w-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-[#b89146] font-black text-[10px] uppercase tracking-[0.3em]">Premium Selection</span>
                <h1 className="text-5xl font-black text-[#1e293b] mt-2 uppercase tracking-tighter leading-none">
                  {product.name}
                </h1>
                <p className="text-gray-400 mt-4 font-medium italic text-lg">{product.category}</p>
              </div>
              
              <div className="mb-10">
                <p className="text-5xl font-black text-[#1e293b]">${product.price}</p>
                <div className="h-1 w-20 bg-[#b89146] mt-4"></div>
              </div>

              {specifications && (
                <div className="grid grid-cols-1 gap-4 mb-10">
                  {Object.entries(specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{key}</span>
                      <span className="text-sm font-bold text-[#1e293b]">{String(val)}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-10">
                <p className="text-gray-500 leading-relaxed text-sm">{product.description}</p>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-[#1e293b] text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-2xl shadow-gray-200 active:scale-95"
              >
                Add to Shopping Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;