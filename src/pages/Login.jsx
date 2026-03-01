import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://aimen-mart-backend.vercel.app/api/auth/login', formData);
      
      // ✅ Storing Token and User Info in Local Storage
      localStorage.setItem('aimenToken', res.data.token);
      localStorage.setItem('aimenUser', JSON.stringify(res.data.user));
      
      alert(`Welcome back, ${res.data.user.name}!`);

      // ✅ Redirect based on User Role
      if (res.data.user.isAdmin) {
        navigate('/admin'); // If Admin, go to Admin Panel
      } else {
        navigate('/'); // If regular user, go to Home
      }
      
    } catch (err) {
      // ✅ English error messages
      alert(err.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar searchTerm="" setSearchTerm={() => {}} />
      <div className="flex justify-center items-center py-20 px-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-orange-500 mb-2 text-center">Customer Login</h2>
          <p className="text-gray-500 text-center mb-8">Please enter your details to sign in.</p>
          
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border p-3 rounded outline-none focus:border-orange-500 transition-all" 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full border p-3 rounded outline-none focus:border-orange-500 transition-all" 
              required 
            />
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold mt-6 hover:bg-orange-600 transition shadow-md">
            Sign In
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-orange-500 font-bold hover:underline">Create one now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;