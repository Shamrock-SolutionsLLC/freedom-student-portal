import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, User, BookOpen, FileText, BarChart2 } from 'lucide-react';
import shamrockIcon from '../../assets/shamrock_icon_color.png';

const NavButton = ({ to, icon: Icon, label, isActive }) => (
  <Link
    to={to}
    className={`
      flex items-center h-8 px-3 rounded-md
      text-white/90 hover:bg-white/10
      transition-colors duration-200
      ${isActive ? 'bg-white/10' : ''}
    `}
  >
    <Icon className='h-4 w-4' />
    <span className="ml-1.5 text-xs font-medium">{label}</span>
  </Link>
);

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = { name: 'Kbarber', email: 'Kbarber@shamrocksolutionsllc.com' };

  const handleSignOut = async () => {
    console.log("Signing out...");
    navigate('/login');
  };

  const navItems = [
    { path: '/estimator', icon: BarChart2, label: 'Academic Estimator' },
    { path: '/coursework', icon: BookOpen, label: 'My Coursework' },
    { path: '/submissions', icon: FileText, label: 'My Submissions' },
  ];

  return (
    <div className={`
      fixed h-10 
      rounded-lg z-40 transition-all duration-300
      top-4 
      left-4 right-4
      bg-gradient-to-b from-[#1a2b4b] via-[#0f172a] to-[#0c1322] 
      border border-white/[0.08] hover:border-white/[0.12]
      shadow-[0_8px_32px_-2px_rgba(0,0,0,0.4),0_0_16px_-2px_rgba(30,58,138,0.2)]
      hover:shadow-[0_12px_48px_-4px_rgba(0,0,0,0.5),0_0_24px_-4px_rgba(30,58,138,0.3)]
    `}>
      <div className='h-full flex items-center justify-between px-3'>
        
        <div className='flex items-center gap-4'>
          <Link to="/" className="flex items-center space-x-1 flex-shrink-0 mr-4">
            <span className="text-xl font-extrabold text-[#4cbcf0]">FREED</span>
            <img src={shamrockIcon} alt="Shamrock Icon" className="h-6 w-6" />
            <span className="text-xl font-extrabold text-[#4cbcf0]">M</span>
          </Link>
          
          <div className='flex items-center gap-1'>
             {navItems.map(({ path, icon, label }) => (
               <NavButton
                 key={path}
                 to={path}
                 icon={icon}
                 label={label}
                 isActive={location.pathname.startsWith(path)}
               />
             ))}
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className="flex items-center space-x-2 text-right">
             <User className="h-5 w-5 text-white/70" />
            <div>
              <div className="text-sm font-medium text-white/90">{user.name}</div>
              <div className="text-xs text-gray-400">{user.email}</div>
            </div>
          </div>

          <div className="h-4 w-px bg-white/20" /> 

          <button
            onClick={handleSignOut}
            className='flex items-center h-8 px-3 rounded-md text-white/90 hover:bg-white/10 transition-colors duration-200'
            title="Exit"
          >
            <LogOut className='h-4 w-4' />
            <span className="ml-1.5 text-xs font-medium">Exit</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar; 