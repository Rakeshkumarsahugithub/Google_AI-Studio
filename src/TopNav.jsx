
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import KeyIcon from "@mui/icons-material/Key";
import RightSlide from './RightSlide';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function TopNav({ isSettingPanelOpen, toggleSettingPanel }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();


  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full h-18 bg-[#151617] flex items-center justify-between px-4 sm:px-8 md:px-7 relative">
      <div className="text-white font-semibold text-lg hidden sm:block">
      </div>
      <div className="flex items-center gap-4 flex-grow justify-end sm:justify-end ml-auto">
        <Link
          to="/dashboard"
          className="flex items-center cursor-pointer gap-1 text-white bg-[#2d2d2d] px-2 py-1 rounded-full text-xs sm:text-sm sm:px-4 sm:py-2"
        >
          <KeyIcon className="text-white" />
          Get API key
        </Link>

        {/* Studio Navigation Button */}
        <button
          className={`text-sm px-2 cursor-pointer transition-all ${isActive('/studio/chat') ? 'text-lg font-semibold text-gray-100' : 'text-gray-300'}`}
          onClick={() => navigate('/studio/chat')}
        >
          Studio
        </button>

        {/* Dashboard Navigation Button */}
        <button
          className={`text-sm px-2 cursor-pointer transition-all ${isActive('/dashboard') ? 'text-lg font-semibold text-gray-100' : 'text-gray-300'}`}
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>

        {/* Documentation Button */}
        <button
          onClick={() => window.open('https://ai.google.dev/gemini-api/docs', '_blank')}
          className="flex items-center text-sm text-gray-300 hover:text-white transition focus:outline-none cursor-pointer"
        >
          Documentation
          <ExternalLink className="ml-1 w-4 h-4 text-gray-400" />
        </button>

        {/* System Settings Icon */}
        <div
          className="relative p-2 rounded-full hover:bg-gray-700 cursor-pointer"
          onMouseEnter={() => setHoveredIcon('system')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FiSettings className="text-white text-xl" />
          {hoveredIcon === 'system' && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-700 text-white text-xs rounded z-10">
              System instruction
            </div>
          )}
        </div>

        {/* Profile (R Icon) */}
        <div className="w-8 h-8 cursor-pointer bg-[#d94c4c] rounded-full flex items-center justify-center text-white">
          R
        </div>
      </div>

      {/* Right Panel (if open) */}
      <div className="absolute top-0 lg:right-7 sm:right-10">
        <RightSlide toggleSettingPanel={toggleSettingPanel} />
      </div>

    </div>
  );
}
