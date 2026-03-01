import TeslaImg from '../assets/TeslaCharger.jpg';
import TiresImg from '../assets/Tires.jpg';
import OilImg from '../assets/EngineOil.jpg'; 
import DashCamImg from '../assets/DashCam.jpg'; 
import PoloImg from '../assets/PoloShirtmen.jpg'; 
import JeansImg from '../assets/Jeans.jpg';
import SneakersImg from '../assets/sneaker_new.jpg'; 
import LeatherJacketImg from '../assets/LeatherJacket.jpg'; 
import SofaImg from '../assets/Sofa.jpg';
import FloorLampImg from '../assets/FloorLamp.jpg'; 
import CoffeeTableImg from '../assets/CoffeeTable.jpg'; 
import RugImg from '../assets/Rug.jpg';
import LaptopImg from '../assets/Laptop.jpg';
import HeadphonesImg from '../assets/Headphones.jpg';
import PowerBankImg from '../assets/PowerBank.jpg'; 
import SSDImg from '../assets/SSD.jpg';

export const allProductsData = {
  "automobiles": [
    { 
      id: 'am1', name: "Tesla Charger", price: 450, oldPrice: 499, img: TeslaImg, category: 'automobiles', 
      rating: 4.9, reviews: 128, orders: 500, supplier: "Tesla Official Store",
      desc: "High-speed Tesla wall connector for home.", 
      longDesc: "The Tesla Wall Connector is an efficient and convenient home charging solution that lets you plug your vehicle in overnight and start your day charged. With customizable power levels, it can be installed on most home electrical systems.",
      specs: {"Power": "11.5 kW", "Cable": "7.3m", "Type": "Level 2", "Connectivity": "Wi-Fi"},
      features: ["Up to 44 miles of range added per hour", "Compatible with Model S, 3, X and Y", "Indoor/outdoor installation"]
    },
    { 
      id: 'am2', name: "Performance Tires", price: 285, oldPrice: 350, img: TiresImg, category: 'automobiles', 
      rating: 4.8, reviews: 85, orders: 230, supplier: "Michelin Hub",
      desc: "Durable all-season performance tires.", 
      longDesc: "Engineered for excellence, these performance tires provide superior grip and handling in both wet and dry conditions. The advanced tread compound ensures longevity and a quiet ride.",
      specs: {"Size": "19 inch", "Type": "All-Season", "Warranty": "50,000 Miles", "Speed Rating": "V"},
      features: ["Enhanced wet grip technology", "Low rolling resistance for fuel efficiency", "Quiet track technology"]
    },
    { id: 'am3', name: "Engine Oil", price: 35, oldPrice: 50, img: OilImg, category: 'automobiles', rating: 4.7, reviews: 340, orders: 1200, supplier: "Shell Global", desc: "Full synthetic motor oil.", longDesc: "Maximum engine protection for high performance.", specs: {"Volume": "5 Liters", "Grade": "5W-30"}, features: ["Protects against sludge", "Better fuel economy"] },
    { id: 'am4', name: "Smart Dash Cam", price: 249, oldPrice: 299, img: DashCamImg, category: 'automobiles', rating: 4.8, reviews: 92, orders: 410, supplier: "NextBase", desc: "4K Dash camera.", longDesc: "Crystal clear 4K recording with night vision and GPS.", specs: {"Resolution": "4K", "Storage": "64GB"}, features: ["Night vision", "G-Sensor", "Wi-Fi"] }
  ],
  "clothes-and-wear": [
    { 
      id: 'cw1', name: "Polo Shirt", price: 45, oldPrice: 65, img: PoloImg, category: 'clothes-and-wear', 
      rating: 4.7, reviews: 215, orders: 1500, supplier: "Fashion Hub LLC",
      desc: "Classic cotton polo shirt for men.", 
      longDesc: "Crafted from premium Pique cotton, this polo shirt offers a breathable and comfortable fit. Perfect for casual outings or semi-formal events.",
      specs: {"Material": "100% Cotton", "Fit": "Slim Fit", "Sleeve": "Short Sleeve", "Design": "Classic"},
      features: ["Breathable fabric", "Fade-resistant color", "Reinforced stitching"]
    },
    { id: 'cw2', name: "Slim Fit Jeans", price: 75, oldPrice: 95, img: JeansImg, category: 'clothes-and-wear', rating: 4.6, reviews: 180, orders: 890, supplier: "Denim Co.", desc: "Stylish blue denim.", longDesc: "Stretchable and durable denim for everyday wear.", specs: {"Waist": "30-40", "Style": "Slim"}, features: ["Stretchable", "Machine washable"] },
    { id: 'cw3', name: "Running Sneakers", price: 120, oldPrice: 160, img: SneakersImg, category: 'clothes-and-wear', rating: 4.9, reviews: 500, orders: 2500, supplier: "Nike Store", desc: "Lightweight sneakers.", longDesc: "Designed for athletes, providing maximum cushion and support.", specs: {"Sole": "Rubber", "Weight": "250g"}, features: ["Breathable mesh", "Shock absorption"] },
    { id: 'cw4', name: "Leather Jacket", price: 250, oldPrice: 320, img: LeatherJacketImg, category: 'clothes-and-wear', rating: 4.9, reviews: 65, orders: 120, supplier: "Leather World", desc: "Genuine leather jacket.", longDesc: "Handcrafted premium leather jacket with soft lining.", specs: {"Material": "Genuine Leather", "Color": "Black"}, features: ["Windproof", "Premium zippers"] }
  ],
  "home-interiors": [
    { 
      id: 'hi1', name: "Modern Sofa", price: 899, oldPrice: 1200, img: SofaImg, category: 'home-interiors', 
      rating: 4.9, reviews: 45, orders: 80, supplier: "IKEA Interiors",
      desc: "Comfortable velvet sofa for living room.", 
      longDesc: "Transform your living space with this luxurious velvet sofa. It features deep seating and plush cushions for ultimate relaxation.",
      specs: {"Seating": "3 Seater", "Fabric": "Velvet", "Frame": "Solid Wood", "Dimensions": "84\" W x 35\" D"},
      features: ["Stain-resistant fabric", "Removable cushion covers", "Sturdy wooden legs"]
    },
    { id: 'hi2', name: "Floor Lamp", price: 110, oldPrice: 150, img: FloorLampImg, category: 'home-interiors', rating: 4.7, reviews: 30, orders: 150, supplier: "Home Glow", desc: "Minimalist floor lamp.", longDesc: "Sleek design that fits perfectly in any modern home corner.", specs: {"Height": "5ft", "Bulb": "LED included"}, features: ["Dimmable", "Energy efficient"] }
  ],
  "computer-and-tech": [
    { 
      id: 'ct1', name: "High-End Laptop", price: 1500, oldPrice: 1800, img: LaptopImg, category: 'computer-and-tech', 
      rating: 5.0, reviews: 15, orders: 40, supplier: "Tech Giant",
      desc: "Powerful laptop for work and gaming.", 
      longDesc: "Equipped with the latest processor and dedicated graphics, this laptop handles multitasking and high-end gaming with ease.",
      specs: {"RAM": "16GB", "Storage": "512GB SSD", "Processor": "Intel i7", "Screen": "15.6\" 4K"},
      features: ["Backlit keyboard", "Fast charging", "Ultra-slim design"]
    },
    { id: 'ct2', name: "Wireless Headphones", price: 199, oldPrice: 250, img: HeadphonesImg, category: 'computer-and-tech', rating: 4.9, reviews: 210, orders: 600, supplier: "Sony Audio", desc: "Noise-canceling headphones.", longDesc: "Industry-leading noise cancellation for a pure audio experience.", specs: {"Battery": "40 Hours", "ANC": "Yes"}, features: ["Touch controls", "Voice assistant"] }
  ]
};

export default allProductsData;