import React from 'react';

const Regions = () => {
  const countries = [
    { name: "United Arab Emirates", url: "shopname.ae", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" },
    { name: "Australia", url: "shopname.au", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
    { name: "United States", url: "shopname.us", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { name: "Russia", url: "shopname.ru", flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
    { name: "Italy", url: "shopname.it", flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
    { name: "Denmark", url: "shopname.dk", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
    { name: "France", url: "shopname.fr", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { name: "China", url: "shopname.cn", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" },
    { name: "United Kingdom", url: "shopname.co.uk", flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
  ];

  return (
    <div className="my-10 px-4 pb-10">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Suppliers by Region</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer border border-gray-100 shadow-sm"
          >
            <img 
              src={country.flag} 
              alt={country.name} 
              className="w-16 h-10 object-cover rounded-md border mb-2"
            />
            <p className="text-sm font-medium text-gray-800 text-center">{country.name}</p>
            <p className="text-xs text-gray-500 mt-1 text-center">{country.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regions;
