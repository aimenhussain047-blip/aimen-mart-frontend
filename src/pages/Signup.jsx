import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending data to the backend
      await axios.post('https://aimen-mart-backend.vercel.app/api/auth/register', formData);
      alert("Account created successfully! Please login to continue.");
      navigate('/login');
    } catch (err) {
      // Professional English error message
      alert(err.response?.data?.message || "Registration failed. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar searchTerm="" setSearchTerm={() => {}} />
      <div className="flex justify-center items-center py-20 px-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-600 mb-2 text-center">Create Account</h2>
          <p className="text-gray-500 text-center mb-8 text-sm">Join AimenMart today and start shopping!</p>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-600 uppercase">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border p-3 rounded mt-1 outline-none focus:border-blue-500 transition-all" 
                required 
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600 uppercase">Email Address</label>
              <input 
                type="email" 
                placeholder="example@mail.com" 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border p-3 rounded mt-1 outline-none focus:border-blue-500 transition-all" 
                required 
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600 uppercase">Password</label>
              <input 
                type="password" 
                placeholder="Minimum 6 characters" 
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full border p-3 rounded mt-1 outline-none focus:border-blue-500 transition-all" 
                required 
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold mt-8 hover:bg-blue-700 transition shadow-lg">
            Create My Account
          </button>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;