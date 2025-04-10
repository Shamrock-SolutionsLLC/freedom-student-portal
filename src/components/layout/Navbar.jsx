import shamrockIcon from '../../assets/shamrock_icon_color.png'; 

function Navbar() { 
  const user = { name: 'Admin', email: 'admin@freedomocr.com' };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <span className="text-xl font-extrabold text-[#4cbcf0]">FREED</span>
              <img src={shamrockIcon} alt="Shamrock Icon" className="h-6 w-6" />
              <span className="text-xl font-extrabold text-[#4cbcf0]">M</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Academic Estimator</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> {/* TODO: Add Icon */} My Coursework</a>
              <a href="#" className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"> {/* TODO: Add Icon */} My Submissions</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div>
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-gray-400">{user.email}</div>
              </div>
            </div>
            <button className="text-gray-300 hover:text-white flex items-center space-x-1">
              <span>Exit</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 