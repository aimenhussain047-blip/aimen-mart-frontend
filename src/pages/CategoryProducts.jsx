import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SidebarCategories from '../components/SidebarCategories';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const CategoryProducts = () => {
  // ✅ App.js mein path="/category/:type" hai, isliye useParams se 'type' uthayenge
  const { type } = useParams(); 
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('https://aimen-mart-backend.vercel.app/api/products');
        
        // 🛠️ FILTER LOGIC: Database category ko URL ke 'type' se match karna
        const filtered = data.filter(p => {
          if (!p.category) return false;
          // Database: "Automobiles" -> "automobiles"
          const dbCat = p.category.toLowerCase().trim().replace(/\s+/g, '-');
          // URL: "automobiles"
          const urlCat = type.toLowerCase().trim();
          return dbCat === urlCat;
        });
        
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    window.scrollTo(0, 0);
  }, [type]); // Jab category badle gi, ye dobara chalay ga

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:px-10">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate('/')} 
          className="group flex items-center gap-2 mb-8 text-[#1e293b] font-black text-xs uppercase tracking-widest hover:text-[#b89146] transition-all"
        >
          <div className="bg-white border border-gray-200 p-2 rounded-full group-hover:bg-[#b89146] group-hover:text-white transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          Back to Home
        </button>

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-64 shrink-0">
             <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm sticky top-24">
               <SidebarCategories />
             </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white border border-gray-100 p-6 mb-8 rounded-3xl shadow-sm flex justify-between items-center">
              <p className="text-[#1e293b] font-black text-sm uppercase tracking-tighter">
                Showing <span className="text-[#b89146]">{products.length}</span> Premium Items
              </p>
              <h2 className="text-gray-400 font-bold text-xs uppercase tracking-widest italic">
                Category: <span className="text-[#1e293b] not-italic">{type.replace(/-/g, ' ')}</span>
              </h2>
            </div>

            <div className="grid gap-8">
              {loading ? (
                <div className="text-center p-20 font-black text-[#1e293b] animate-pulse">
                  LOADING COLLECTION...
                </div>
              ) : products.length > 0 ? (
                products.map(p => (
                  <div key={p._id} className="bg-white border border-gray-50 rounded-[2rem] overflow-hidden flex flex-col md:flex-row p-6 hover:shadow-xl transition-all group">
                    <div className="w-full md:w-60 h-52 bg-[#fafbfc] rounded-[1.5rem] flex items-center justify-center p-4">
                      <img src={p.image} alt={p.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    <div className="flex-1 md:pl-10 flex flex-col justify-between py-2">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h2 className="text-2xl font-black text-[#1e293b] tracking-tighter uppercase">{p.name}</h2>
                          <p className="text-2xl font-black text-[#b89146]">${p.price}</p>
                        </div>
                        <p className="text-gray-400 mt-2 text-sm leading-relaxed font-medium line-clamp-2 max-w-xl">{p.description}</p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-4">
                        <Link to={`/product/${p._id}`} className="bg-[#1e293b] text-white px-10 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-black transition-all">
                          View Details
                        </Link>
                        <button 
                          onClick={() => addToCart(p)} 
                          className="border-2 border-[#1e293b] text-[#1e293b] px-10 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#1e293b] hover:text-white transition-all"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white border-2 border-dashed border-gray-100 rounded-[2rem] p-32 text-center">
                   <p className="text-gray-300 font-black text-xs uppercase tracking-[0.3em]">No Items Found in this Category</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;