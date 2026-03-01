import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from '../components/Navbar';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Form State
  const [formData, setFormData] = useState({
    name: '', email: '', address: '', city: '', zip: '', phone: ''
  });

  // Price Calculation
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);
  const total = subtotal + 14;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = localStorage.getItem('aimenUser');
    if (!userData) {
      alert("Please login to complete your purchase.");
      navigate('/login');
      return;
    }

    const user = JSON.parse(userData);
    const userId = user?._id || user?.id;

    // ✅ FIXED ORDER DATA: Name ko shippingAddress ke andar dala hai
    const orderData = {
      user: userId,
      orderItems: cartItems.map(item => ({
        name: item.name,
        qty: item.qty || 1,
        price: item.price,
        image: item.image || item.img
      })),
      shippingAddress: {
        name: formData.name, // ⭐ Ye line ab sahi jagah hai
        address: formData.address,
        city: formData.city,
        postalCode: formData.zip,
        phone: formData.phone
      },
      totalPrice: total
    };

    try {
      await axios.post('https://aimen-mart-backend.vercel.app/api/orders', orderData);
      alert(`Thank you, ${formData.name}! Your order has been placed successfully. 🎉`);
      clearCart();
      navigate('/');
    } catch (err) {
      console.error("Order Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Navbar searchTerm="" setSearchTerm={() => {}} />
        <div className="p-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
          <button onClick={() => navigate('/')} className="text-blue-600 font-bold hover:underline">
            Go back to shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Navbar searchTerm="" setSearchTerm={() => {}} />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 uppercase tracking-tighter text-center lg:text-left">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 bg-white p-8 border rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-gray-700">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" name="name" placeholder="Full Name" required 
                  value={formData.name} onChange={handleChange}
                  className="border p-3 rounded-lg w-full outline-blue-500" 
                />
                <input 
                  type="email" name="email" placeholder="Email Address" required 
                  value={formData.email} onChange={handleChange}
                  className="border p-3 rounded-lg w-full outline-blue-500" 
                />
              </div>
              <input 
                type="text" name="address" placeholder="Street Address" required 
                value={formData.address} onChange={handleChange}
                className="border p-3 rounded-lg w-full outline-blue-500" 
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* ✅ FIXED CITY SELECT: Ab dropdown nazar ayega */}
                <select 
                  name="city" 
                  required 
                  value={formData.city} 
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full outline-blue-500 bg-white"
                >
                  <option value="">Select City</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                </select>

                <input 
                  type="text" name="zip" placeholder="ZIP Code" required 
                  value={formData.zip} onChange={handleChange}
                  className="border p-3 rounded-lg w-full outline-blue-500" 
                />
                <input 
                  type="text" name="phone" placeholder="Phone Number" required 
                  value={formData.phone} onChange={handleChange}
                  className="border p-3 rounded-lg w-full outline-blue-500" 
                />
              </div>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-700">Payment Method</h2>
              <div className="p-4 border-2 border-blue-100 rounded-lg bg-blue-50 text-blue-800 font-medium">
                Cash on Delivery (COD)
              </div>
              
              <button type="submit" className="w-full bg-[#1e293b] text-white py-4 rounded-xl font-bold text-lg mt-6 hover:bg-black transition-all shadow-lg uppercase tracking-widest">
                CONFIRM ORDER (${total.toFixed(2)})
              </button>
            </form>
          </div>

          <div className="lg:w-96">
            <div className="bg-white p-6 border rounded-xl shadow-sm sticky top-24">
              <h2 className="font-bold border-b pb-4 mb-4 text-gray-800 uppercase tracking-widest">Order Summary</h2>
              <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item, index) => (
                  <div key={item._id || index} className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <img src={item.image || item.img} className="w-12 h-12 object-contain border rounded p-1 bg-gray-50" alt={item.name} />
                      <div>
                        <p className="text-sm font-bold line-clamp-1 text-gray-700">{item.name}</p>
                        <p className="text-xs text-gray-400">Qty: {item.qty || 1}</p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-600">${(item.price * (item.qty || 1)).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mt-4 space-y-2">
                <div className="flex justify-between text-gray-500"><span>Subtotal</span> <span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-gray-500"><span>Shipping</span> <span>$14.00</span></div>
                <div className="flex justify-between font-black text-lg pt-2 border-t mt-2 text-[#1e293b]">
                  <span>Total</span> 
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;