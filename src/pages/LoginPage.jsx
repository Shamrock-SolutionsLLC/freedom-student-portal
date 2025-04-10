import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import shamrockIcon from '../assets/shamrock_icon_color.png';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const correctUsername = import.meta.env.VITE_USERNAME;
    const correctPassword = import.meta.env.VITE_PASSWORD;

    if (username === correctUsername && password === correctPassword) {
      navigate('/');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-xl shadow-lg max-w-md w-full text-white">
        <div className="text-center">
          <div className="text-6xl font-extrabold mb-1 flex items-center justify-center space-x-1">
            <span className="text-[#4cbcf0]">FREED</span>
            <img 
              src={shamrockIcon} 
              alt="Shamrock Icon" 
              className="h-12 w-12 inline-block align-middle"
            />
            <span className="text-[#4cbcf0]">M</span>
          </div>
          <div className="text-[#4cbcf0] text-sm tracking-tight mb-5">
            TRANSCRIPT AUTOMATION
          </div>
          <h1 className="text-[#4cbcf0] text-3xl font-bold">
            STUDENT PORTAL
          </h1>
        </div>

        <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Email or Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 pr-10 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a996]"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a996]"
            required
          />

          <div className="flex items-center justify-between space-x-6 pt-2">
            <button
              type="submit"
              className="flex-grow bg-[#00a996] hover:bg-[#008577] text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Login
            </button>
            <div className="flex flex-col text-sm text-right whitespace-nowrap">
              <a href="#" className="text-gray-400 hover:text-white">
                SIGN UP
              </a>
              <a href="#" className="text-gray-400 hover:text-white mt-1">
                FORGOT PASSWORD
              </a>
            </div>
          </div>
        </form>

        <p className="text-xs text-center text-gray-400 mt-8 pb-2">
          Student Portal for the exclusive use of students interested in<br />
          <strong>SHAMROCK UNIVERSITY</strong>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;