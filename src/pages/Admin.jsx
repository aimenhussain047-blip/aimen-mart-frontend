import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Admin = () => {
  const navigate = useNavigate();
  
  // MY STATE: Controlling the view and storing product data
  const [showProducts, setShowProducts] = useState(false); 
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  
  // MY INITIAL FORM STATE
  const [newProduct, setNewProduct] = useState({
    name: '', price: '', image: '', description: '', category: '', stock: 10, specs: ''
  });

  // MY LOGIC: Fetching all products from the backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://aimen-mart-backend.vercel.app/api/products");
      setProducts(res.data);
    } catch (err) { console.error("Error fetching data:", err); }
  };

  useEffect(() => {
    if (showProducts) fetchProducts();
  }, [showProducts]);

  // MY FORM LOGIC: Handling both Save and Update actions
  const handleSubmit = async (e) => {
    e.preventDefault();
    let specsObject = {};
    
    // Converting the comma-separated string back to an object for the database
    if (typeof newProduct.specs === 'string') {
      newProduct.specs.split(',').forEach(item => {
        const [key, value] = item.split(':');
        if (key && value) specsObject[key.trim()] = value.trim();
      });
    } else {
      specsObject = newProduct.specs;
    }

    const productData = { ...newProduct, specs: specsObject };

    try {
      if (isEditing) {
        await axios.put(`https://aimen-mart-backend.vercel.app/api/products/${currentId}`, productData);
        alert("Product updated successfully!");
      } else {
        await axios.post("https://aimen-mart-backend.vercel.app/api/products/add", productData);
        alert("Product added successfully!");
      }
      resetForm();
      fetchProducts();
    } catch (err) {
      alert("Something went wrong! Check your console.");
    }
  };

  // MY EDIT LOGIC: Pre-filling the form when edit button is clicked
  const handleEditClick = (p) => {
    setIsEditing(true);
    setCurrentId(p._id);
    
    // Formatting specs object back to string for the input field
    const specsString = Object.entries(p.specs || {})
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');

    setNewProduct({
      name: p.name, price: p.price, image: p.image,
      description: p.description, category: p.category,
      stock: p.stock || 10, specs: specsString
    });
  };

  // MY RESET LOGIC: Clearing the form fields
  const resetForm = () => {
    setIsEditing(false);
    setCurrentId(null);
    setNewProduct({ name: '', price: '', image: '', description: '', category: '', stock: 10, specs: '' });
  };

  // MY DELETE LOGIC: Removing a product after confirmation
  const handleDelete = async (id) => {
    if (window.confirm("Delete this product permanently?")) {
      try {
        await axios.delete(`https://aimen-mart-backend.vercel.app/api/products/${id}`);
        fetchProducts();
      } catch (err) { alert("Delete failed!"); }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6 md:p-10">
        
        {/* DASHBOARD VIEW: The main entry point for Admin */}
        {!showProducts ? (
          <div className="max-w-4xl mx-auto text-center mt-10">
            <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter text-gray-800 italic">
              Admin Portal
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Box to manage products */}
              <div 
                onClick={() => setShowProducts(true)} 
                className="bg-white p-12 rounded-[2.5rem] shadow-xl border-b-8 border-blue-600 hover:scale-105 cursor-pointer transition-all"
              >
                <div className="text-6xl mb-4 text-blue-600">📦</div>
                <h2 className="text-2xl font-black uppercase text-gray-800">Manage Products</h2>
              </div>

              {/* Box to view orders */}
              <div 
                onClick={() => navigate('/admin/orders')} 
                className="bg-white p-12 rounded-[2.5rem] shadow-xl border-b-8 border-gray-400 hover:scale-105 cursor-pointer transition-all"
              >
                <div className="text-6xl mb-4 text-gray-400">📜</div>
                <h2 className="text-2xl font-black uppercase text-gray-800">View Orders</h2>
              </div>
            </div>
          </div>
        ) : (
          /* PRODUCT MANAGEMENT VIEW: Form and Table layout */
          <div>
            <button 
              onClick={() => setShowProducts(false)} 
              className="mb-6 font-bold text-blue-600 uppercase text-xs tracking-widest hover:underline"
            >
              ← Back to Dashboard
            </button>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* MY FORM SECTION */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-blue-500 sticky top-10">
                  <h2 className="text-xl font-bold mb-6 text-gray-700">
                    {isEditing ? "📝 Edit Product" : "✨ Add New Product"}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Product Title" className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" 
                      value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} required />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <input type="number" placeholder="Price" className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" 
                        value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} required />
                      <input type="text" placeholder="Category" className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" 
                        value={newProduct.category} onChange={(e) => setNewProduct({...newProduct, category: e.target.value})} required />
                    </div>

                    <input type="text" placeholder="Specs (Color: Red, Size: L)" className="w-full border-2 border-blue-50/50 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" 
                      value={newProduct.specs} onChange={(e) => setNewProduct({...newProduct, specs: e.target.value})} />

                    <input type="text" placeholder="Image URL" className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400" 
                      value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} required />

                    <textarea placeholder="Description" className="w-full border p-3 rounded-lg h-24 outline-none focus:ring-2 focus:ring-blue-400"
                      value={newProduct.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} required></textarea>
                    
                    <div className="flex gap-2">
                      <button type="submit" className={`flex-1 font-bold py-3 rounded-lg text-white shadow-lg transition-all ${isEditing ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                        {isEditing ? "Update Product" : "Save Product"}
                      </button>
                      {isEditing && (
                        <button type="button" onClick={resetForm} className="bg-gray-400 text-white px-4 rounded-lg hover:bg-gray-500">
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              {/* MY PRODUCT LIST TABLE */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-black">
                      <tr>
                        <th className="p-4">Name</th>
                        <th className="p-4 text-center">Price</th>
                        <th className="p-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {products.map((p) => (
                        <tr key={p._id} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-bold text-gray-700">{p.name}</td>
                          <td className="p-4 font-black text-blue-600 text-center">${p.price}</td>
                          <td className="p-4 text-center space-x-4">
                            <button onClick={() => handleEditClick(p)} className="text-blue-500 font-bold hover:underline italic">Edit</button>
                            <button onClick={() => handleDelete(p._id)} className="text-red-500 font-bold hover:underline italic">Remove</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;