import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // 1. LocalStorage se user ka data nikalna
        const userData = JSON.parse(localStorage.getItem('aimenUser'));
        
        if (!userData) {
          setError("Please login to see your orders.");
          setLoading(false);
          return;
        }

        // 2. ID aur Token nikalna (Backend ke liye zaroori hai)
        const userId = userData.id || userData._id; 
        const token = userData.token;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // 3. ✅ SAHI URL: Jo aapke backend ke naye route se match karta hai
        const res = await axios.get(
          `https://aimen-mart-backend.vercel.app/api/orders/user/${userId}`,
          config
        );

        console.log("Orders Data Received:", res.data);
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Could not load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-[#1e293b] mb-10 uppercase tracking-tighter">
          My Orders
        </h1>

        {loading ? (
          <div className="text-center py-20 font-bold text-gray-400 uppercase tracking-widest">
            Loading Records...
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-500 font-bold uppercase">
            {error}
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white p-20 rounded-3xl border-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-400 font-bold text-lg">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <p className="text-[10px] font-black text-[#b89146] uppercase tracking-widest mb-1">
                    Order ID: {order._id}
                  </p>
                  <h3 className="text-lg font-black text-[#1e293b]">
                    {order.orderItems?.length || 0} Item(s) Purchased
                  </h3>
                  
                  <p className="text-sm text-gray-500 mt-1">
                    Status: 
                    <span className={`font-bold uppercase text-xs ml-2 ${
                      order.status === 'Delivered' || order.status === 'DELIVERED'
                      ? 'text-green-600' 
                      : 'text-orange-500'
                    }`}>
                      {order.status || 'Processing'}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-2xl font-black text-[#1e293b]">
                    ${order.totalPrice ? order.totalPrice.toFixed(2) : '0.00'}
                  </p>
                  <p className="text-xs text-gray-400 font-medium">Payment: Cash on Delivery</p>
                  <p className="text-[10px] text-gray-300 mt-1">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyOrders;