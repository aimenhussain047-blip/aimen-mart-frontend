import TeslaImg from '../assets/TeslaCharger.jpg';
import TiresImg from '../assets/Tires.jpg';
import EngineOilImg from '../assets/EngineOil.jpg';
import DashCamImg from '../assets/DashCam.jpg';
import PoloImg from '../assets/PoloShirtmen.jpg';
import JeansImg from '../assets/Jeans.jpg';
import SneakersImg from '../assets/sneaker_new.jpg'; // Naya naam likhein
import LeatherJacketImg from '../assets/LeatherJacket.jpg';
import SofaImg from '../assets/Sofa.jpg';
import FloorLampImg from '../assets/FloorLamp.jpg';
import CoffeeTableImg from '../assets/CoffeeTable.jpg';
import RugImg from '../assets/Rug.jpg';
import LaptopImg from '../assets/Laptop.jpg';
import HeadphonesImg from '../assets/Headphones.jpg';
import PowerBankImg from '../assets/PowerBank.jpg';
import SSDImg from '../assets/SSD.jpg';

const allProducts = [
  { id: 'am1', name: "Tesla Wall Connector", price: 450, oldPrice: 499, img: TeslaImg, category: 'automobiles', specs: {"Type": "Home Charger"}, desc: "Fast charging." },
  { id: 'am3', name: "Castrol Engine Oil", price: 35, oldPrice: 45, img: EngineOilImg, category: 'automobiles', specs: {"Size": "5L"}, desc: "Synthetic oil." },
  { id: 'am4', name: "Smart Dash Cam", price: 249, oldPrice: 280, img: DashCamImg, category: 'automobiles', specs: {"Res": "4K"}, desc: "Security cam." },
  { id: 'cw1', name: "Polo Shirt", price: 45, oldPrice: 65, img: PoloImg, category: 'clothes-and-wear', specs: {"Material": "Cotton"}, desc: "Comfortable." },
  { id: 'cw3', name: "Running Sneakers", price: 120, oldPrice: 160, img: SneakersImg, category: 'clothes-and-wear', specs: {"Size": "All"}, desc: "Lightweight." },
  { id: 'ct3', name: "Power Bank", price: 55, oldPrice: 80, img: PowerBankImg, category: 'computer-and-tech', specs: {"Cap": "20k mAh"}, desc: "Portable." }
];

// ✅ DEFAULT EXPORT (Isi liye doosri file mein brackets nahi lagenge)
export default allProducts;