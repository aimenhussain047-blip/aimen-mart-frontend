import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CategoryProducts from "./pages/CategoryProducts";
import Checkout from "./pages/Checkout"; 
import Admin from "./pages/Admin"; 
import AdminOrders from "./pages/AdminOrders"; 
import ProductDetails from "./pages/ProductDetails"; 
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login"; 
import Signup from "./pages/Signup"; 
// ✅ 1. MyOrders ko Import karein
import MyOrders from "./pages/MyOrders"; 

// Components & Context
import { CartProvider } from "./context/CartContext"; 
import ProtectedRoute from "./ProtectedRoute"; 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://aimen-mart-backend.vercel.app/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Database connection failed:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home products={products} />} />
          <Route path="/category/:type" element={<CategoryProducts />} />
          <Route path="/search" element={<SearchResults />} /> 
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* ✅ 2. MY ORDERS ROUTE (Yeh missing tha) */}
          <Route path="/my-orders" element={<MyOrders />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          
          {/* Manage Products */}
          <Route 
            path="/admin/products" 
            element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} 
          />
          
          <Route path="/admin/orders" element={<ProtectedRoute><AdminOrders /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;