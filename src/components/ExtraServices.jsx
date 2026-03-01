import React from 'react';

const ExtraServices = () => {
  const services = [
    { 
      title: "Source from Industry Hubs", 
      icon: "🔍", 
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      title: "Customize Your Products", 
      icon: "📦", 
      img: "https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      title: "Fast, reliable shipping by ocean", 
      icon: "🚢", 
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" // Ocean / ship
    },
    { 
      title: "Fast, reliable shipping by air", 
      icon: "✈️", 
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80" // Airplane
    },
    { 
      title: "Product monitoring and inspection", 
      icon: "🛡️", 
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=400&q=80" 
    },
  ];

  return (
    <div className="my-10 px-4">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Our Extra Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-md overflow-hidden relative group shadow-sm">
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-32 object-cover" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/150?text=No+Image";
              }}
            />
            <div className="p-4 relative bg-white">
              <div className="absolute -top-6 right-4 bg-blue-100 border-4 border-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md">
                {service.icon}
              </div>
              <p className="font-semibold text-gray-800 text-sm pr-10">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
