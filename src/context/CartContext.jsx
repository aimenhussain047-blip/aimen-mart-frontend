import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ 1. Load data from LocalStorage on Startup
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ 2. Save to LocalStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // 🛠️ FIX: MongoDB uses _id, so we check both _id and id
    const productId = product._id || product.id;
    
    setCartItems((prev) => {
      const isExist = prev.find(item => (item._id || item.id) === productId);
      if (isExist) {
        return prev.map(item => 
          (item._id || item.id) === productId ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        (item._id || item.id) === id ? { ...item, qty: newQty } : item
      )
    );
  };

  const removeFromCart = (id) => {
    // 🛠️ FIX: Filtering based on both ID possibilities
    setCartItems(prev => prev.filter(item => (item._id || item.id) !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart'); // Safai!
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQty, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);