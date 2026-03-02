import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // MY LOGIC: Fetching all customer orders from the database
  const fetchOrders = async () => {
    try {
      const res = await axios.get('https://aimen-mart-backend.vercel.app/api/orders');
      setOrders(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching orders", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // MY ACTION: Updating the order status to "Delivered" via API
  const handleDeliver = async (orderId) => {
    try {
      await axios.put(`https://aimen-mart-backend.vercel.app/api/orders/${orderId}/deliver`);
      alert("Success: Order status updated to Delivered.");
      fetchOrders(); // Refreshing the list to show updated status
    } catch (err) {
      alert("Error: Failed to update order status.");
    }
  };

  // Showing a clean loader while data is being fetched
  if (loading) return <div className="p-20 text-center font-bold uppercase tracking-widest">Loading Order Details...</div>;

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar searchTerm="" setSearchTerm={() => {}} />
      <div className="container mx-auto px-4 py-10">
        
        {/* Navigation back to the main admin dashboard */}
        <button 
          onClick={() => navigate('/admin')} 
          className="mb-6 font-bold text-blue-600 uppercase text-xs hover:underline"
        >
          ← Back to Admin Portal
        </button>

        <h2 className="text-3xl font-black mb-8 text-gray-800 uppercase italic">
          Full Order Specifications
        </h2>
        
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="bg-white rounded-3xl shadow-lg border-2 border-white overflow-hidden">
              
              {/* Order ID Bar: Displays Reference ID and current status badge */}
              <div className="bg-[#1e293b] p-4 flex justify-between items-center text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest">Reference ID: {order._id}</span>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${
                  order.status === 'Delivered' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white animate-pulse'
                }`}>
                  {order.status}
                </span>
              </div>

              <div className="p-8 grid md:grid-cols-3 gap-10">
                
                {/* 1. Account Info: Showing the registered user's login details */}
                <div className="space-y-4">
                  <h4 className="font-black text-blue-600 uppercase text-xs tracking-widest border-b-2 border-blue-50 pb-2">Login Account</h4>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-gray-800">{order.user?.name || "Anonymous"}</p>
                    <p className="text-xs text-gray-500 underline">{order.user?.email || "No Email Found"}</p>
                  </div>
                  
                  {/* Shipping Info: Showing the specific receiver name from the checkout form */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <h5 className="text-[10px] font-black text-blue-400 uppercase mb-3">Shipping Details (Form)</h5>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Receiver:</strong> {order.shippingAddress?.name || "Not Provided"}</p>
                      <p className="text-sm"><strong>Phone:</strong> {order.shippingAddress?.phone}</p>
                      <p className="text-sm"><strong>City:</strong> {order.shippingAddress?.city}</p>
                      <p className="text-sm text-gray-600 leading-tight"><strong>Address:</strong> {order.shippingAddress?.address}</p>
                    </div>
                  </div>
                </div>

                {/* 2. Package Contents: Listing all items inside this specific order */}
                <div className="space-y-4">
                  <h4 className="font-black text-blue-600 uppercase text-xs tracking-widest border-b-2 border-blue-50 pb-2">Package Contents</h4>
                  <div className="space-y-3 overflow-y-auto max-h-[250px] pr-2 custom-scrollbar">
                    {order.orderItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg shadow-sm" />
                        <div className="flex-1">
                          <p className="text-xs font-black text-gray-800 uppercase leading-none">{item.name}</p>
                          <p className="text-[10px] text-gray-400 mt-2">Qty: {item.qty} | Price: ${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Payment & Action: Final price and the "Dispatch" button */}
                <div className="flex flex-col justify-between bg-gray-50 p-6 rounded-2xl border-2 border-white shadow-inner">
                  <div>
                    <h4 className="font-black text-gray-400 uppercase text-[10px] tracking-widest mb-2">Total Payable</h4>
                    <p className="text-4xl font-black text-[#1e293b] tracking-tighter">${order.totalPrice.toFixed(2)}</p>
                    <p className="text-[10px] font-bold text-gray-400 mt-2">Placed on: {new Date(order.createdAt).toLocaleString()}</p>
                  </div>

                  <div className="mt-8">
                    {order.status !== 'Delivered' ? (
                      <button 
                        onClick={() => handleDeliver(order._id)}
                        className="w-full bg-[#1e293b] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95"
                      >
                        Dispatch Order
                      </button>
                    ) : (
                      <div className="text-center p-4 bg-green-50 border-2 border-green-200 rounded-2xl">
                        <span className="text-green-600 font-black text-xs uppercase italic tracking-widest">Order Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty state if there are no orders */}
          {orders.length === 0 && (
            <div className="bg-white p-20 text-center rounded-3xl shadow-xl">
              <p className="text-gray-300 font-black uppercase tracking-widest">No active orders found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;