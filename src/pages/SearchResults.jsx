import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const location = useLocation();
  
  // URL se query nikalne ke liye
  const query = new URLSearchParams(location.search).get('q') || "";

  // ✅ 1. Local state banayi taake input mein typing ho sakay
  const [localSearch, setLocalSearch] = useState(query);

  // Jab URL change ho (naya search), toh input ko bhi update karo
  useEffect(() => {
    setLocalSearch(query);
  }, [query]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await axios.get(`https://aimen-mart-backend.vercel.app/api/products/search/${query}`);
        setResults(res.data);
      } catch (err) {
        console.error("Search error:", err);
      }
      setLoading(false);
    };
    fetchResults();
  }, [query]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ 2. setSearchTerm ko localSearch se connect kar diya taake backspace kaam kare */}
      <Navbar searchTerm={localSearch} setSearchTerm={setLocalSearch} />
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Search Results for: <span className="text-blue-600">"{query}"</span>
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((item) => (
              <ProductCard key={item._id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">No products found for "{query}". Try a different keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;