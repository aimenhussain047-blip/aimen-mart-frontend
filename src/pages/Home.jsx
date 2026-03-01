import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import HomeOutdoor from '../components/HomeOutdoor';
import RecommendedItems from '../components/RecommendedItems';
import ExtraServices from '../components/ExtraServices';
import Regions from '../components/Regions';
import Footer from '../components/Footer';

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((item) => {
    if (!searchTerm) return true;
    return item.name?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const homeOutdoorItems = products.filter(p => 
    p.category && (p.category.toLowerCase().includes('home') || p.category.toLowerCase().includes('outdoor'))
  ).slice(0, 4);

  return (
    <div className="bg-[#f4f7fa] min-h-screen w-full font-sans text-gray-900">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {/* Full Width Wrapper */}
      <div className="w-full">
        
        {!searchTerm ? (
          <div className="flex flex-col gap-8 pb-10">
            
            {/* 1. Hero Section - Isko thori side padding di hai taake deewar se na lage */}
            <div className="w-full px-4 md:px-6 lg:px-8 pt-6">
                <Hero />
            </div>

            {/* 2. Offers Section - Prominent Container */}
            <div className="w-full px-4 md:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                <Offers />
              </div>
            </div>

            {/* 3. Recommended Items - Prominent Section */}
            <section className="w-full px-4 md:px-6 lg:px-8">
               <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
                  {/* Heading yahan se hata di taake component wali hi nazar aaye */}
                  <RecommendedItems products={products.slice(0, 8)} />
               </div>
            </section>

            {/* 4. Home & Outdoor - High Contrast Container */}
            <section className="w-full px-4 md:px-6 lg:px-8">
               <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
                  {/* Heading yahan se hata di taake component wali hi nazar aaye */}
                  <HomeOutdoor products={homeOutdoorItems} />
               </div>
            </section>

            {/* 5. Extra Services */}
            <div className="w-full px-4 md:px-6 lg:px-8 py-4">
               <ExtraServices />
            </div>

            {/* 6. Regions */}
            <div className="w-full px-4 md:px-6 lg:px-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <Regions />
              </div>
            </div>

          </div>
        ) : (
          /* Search View */
          <div className="w-full px-4 md:px-10 py-12 min-h-[60vh]">
            <h2 className="text-2xl font-bold mb-8">Results for "{searchTerm}"</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <RecommendedItems products={filteredProducts} />
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}