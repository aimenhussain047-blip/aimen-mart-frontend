import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, clearCart } = useCart();

  // Price calculation
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My Cart ({cartItems.length})</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* LEFT: Items List */}
            <div className="flex-1 space-y-4">
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                {cartItems.map((item, index) => (
                  <div key={item._id || index} className="flex flex-col md:flex-row items-center gap-6 border-b py-6 last:border-0">
                    
                    {/* ✅ Image Fix: Donon possibilities check ho rahi hain */}
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg p-2 border">
                        <img 
                          src={item.image || item.img} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Image'; }} 
                        />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                      <p className="text-gray-400 text-sm mb-2 uppercase">{item.category || "General"}</p>
                      
                      <button 
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500 text-sm font-bold border border-red-100 px-3 py-1 rounded hover:bg-red-50 transition"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${(item.price * (item.qty || 1)).toFixed(2)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 font-bold uppercase">Qty:</span>
                        <select 
                          value={item.qty || 1}
                          onChange={(e) => updateQty(item._id, parseInt(e.target.value))}
                          className="border rounded p-1 text-sm outline-none bg-white cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5, 10].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-4 flex justify-between items-center">
                  <Link to="/" className="text-blue-600 font-bold hover:underline">← Continue Shopping</Link>
                  <button onClick={clearCart} className="text-gray-400 hover:text-red-500 text-sm underline">
                    Remove all items
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Order Summary */}
            <div className="lg:w-80 space-y-4">
              <div className="bg-white border rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="font-bold mb-4 border-b pb-2">Summary</h3>
                <div className="space-y-2 text-gray-600 border-b pb-4">
                  <div className="flex justify-between"><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between text-green-500"><span>Shipping:</span> <span className="uppercase font-bold text-xs">Free</span></div>
                  <div className="flex justify-between"><span>Tax (EST):</span> <span>+$14.00</span></div>
                </div>
                <div className="flex justify-between font-bold text-xl py-4">
                  <span>Total:</span>
                  <span className="text-blue-600">${(subtotal + 14).toFixed(2)}</span>
                </div>

                <Link 
                  to="/checkout" 
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg text-center block transition-all active:scale-95"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>

          </div>
        ) : (
          <div className="bg-white border rounded-xl p-20 text-center shadow-sm">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty!</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;