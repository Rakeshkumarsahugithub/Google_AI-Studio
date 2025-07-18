import { useState, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import KeyIcon from "@mui/icons-material/Key";
import { ExternalLink } from 'lucide-react';
import RightSlide from './RightSlide';
import ModelDropdown from './ModelDropdown'; // Added import for ModelDropdown
import TuneIcon from "@mui/icons-material/Tune";
import { MdOutlineWbSunny, MdOutlineDarkMode, MdOutlineDesktopWindows } from 'react-icons/md';
import { LuClipboardList, LuShield, LuFlag, LuFlaskConical } from 'react-icons/lu';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

export default function TopNav({ isSettingPanelOpen, toggleSettingPanel }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isDashboard = location.pathname === "/dashboard";

  // Model dropdown state for mobile
  const [selectedModel, setSelectedModel] = useState('gemini-2.5-pro');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [theme, setTheme] = useState('system');
  const settingsRef = useRef();

  return (
    <div className="w-full h-18 bg-[#151617] flex items-center justify-between px-4 sm:px-8 md:px-7 relative">
      {/* Mobile: Gemini dropdown only */}
      <div className="flex items-center gap-2 lg:hidden w-full">
        {/* Gemini Dropdown */}
        <div className="flex-1 flex justify-start ml-16">
          <ModelDropdown value={selectedModel} onChange={setSelectedModel} width={200} />
        </div>
        {/* Run Settings Tune Icon (mobile only) */}
        <div
          onClick={toggleSettingPanel}
          onMouseEnter={() => setHoveredIcon("settings")}
          onMouseLeave={() => setHoveredIcon(null)}
          className="rounded-full p-2 hover:bg-gray-700 cursor-pointer relative mr-24 -mt-6"
        >
          <TuneIcon className="text-white" />
          {hoveredIcon === "settings" && (
            <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
              Run settings
            </div>
          )}
        </div>
      </div>
      {/* Optional Logo or Title */}
      <div className="text-white font-semibold text-lg hidden sm:block">
        {/* Logo or branding */}
      </div>

      {/* Main nav items - hidden on mobile */}
      <div className="hidden sm:flex items-center gap-4 flex-grow justify-end ml-auto">
        <Link
          to="/dashboard"
          className="flex items-center cursor-pointer gap-1 text-white bg-[#2d2d2d] px-2 py-1 rounded-full text-xs sm:text-sm sm:px-4 sm:py-2"
        >
          <KeyIcon className="text-white" />
          Get API key
        </Link>

        <button
          className={`text-sm px-2 cursor-pointer transition-all ${isActive('/studio/chat') ? 'text-lg font-semibold text-gray-100' : 'text-gray-300'}`}
          onClick={() => navigate('/studio/chat')}
        >
          Studio
        </button>

        <button
          className={`text-sm px-2 cursor-pointer transition-all ${isActive('/dashboard') ? 'text-lg font-semibold text-gray-100' : 'text-gray-300'}`}
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>

        <button
          onClick={() => window.open('https://ai.google.dev/gemini-api/docs', '_blank')}
          className="flex items-center text-sm text-gray-300 hover:text-white transition focus:outline-none cursor-pointer"
        >
          Documentation
          <ExternalLink className="ml-1 w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Settings and Profile (always visible) */}
      <div className="absolute top-2 right-6 sm:right-2 sm:static flex items-center gap-2 sm:gap-4 ml-2">
        {/* Settings Icon: always visible on all screens */}
        <div
          ref={settingsRef}
          className="relative p-2 rounded-full hover:bg-gray-700 cursor-pointer block"
          onClick={() => setSettingsOpen((o) => !o)}
        >
          <FiSettings className="text-white text-xl" />
          {/* Dropdown menu */}
          {settingsOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-[#18191c] rounded-2xl shadow-2xl z-50 text-white border border-[#232323]">
              {/* Theme toggle */}
              <div className="flex gap-1 p-3 pb-2">
                <button
                  className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-colors ${theme === 'light' ? 'bg-[#232323]' : ''}`}
                  onClick={() => setTheme('light')}
                >
                  <MdOutlineWbSunny className="text-xl" />
                </button>
                <button
                  className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-[#232323]' : ''}`}
                  onClick={() => setTheme('dark')}
                >
                  <MdOutlineDarkMode className="text-xl" />
                </button>
                <button
                  className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-colors ${theme === 'system' ? 'bg-[#232323]' : ''}`}
                  onClick={() => setTheme('system')}
                >
                  <MdOutlineDesktopWindows className="text-xl" />
                </button>
              </div>
              {/* Enable save */}
              <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-[#232323] font-semibold">
                <AddToDriveIcon className="text-lg" />
                Enable save
              </button>
              <div className="border-t border-[#232323] my-1" />
              {/* Menu items */}
              <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-[#232323]">
                <LuClipboardList className="text-lg" />
                Terms of service
              </button>
              <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-[#232323]">
                <LuShield className="text-lg" />
                Privacy policy
              </button>
              <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-[#232323]">
                <LuFlag className="text-lg" />
                Send feedback
              </button>
              <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-[#232323]">
                <LuFlaskConical className="text-lg" />
                Billing Support
              </button>
            </div>
          )}
        </div>
        {/* Profile (R) */}
        <div className="w-8 h-8 cursor-pointer bg-[#d94c4c] rounded-full flex items-center justify-center text-white">
          R
        </div>
      </div>

      {/* RightSlide Panel */}
      {!isDashboard && (
        <div className="absolute top-0 lg:right-7 sm:right-10">
          <RightSlide toggleSettingPanel={toggleSettingPanel} />
        </div>
      )}
    </div>
  );
}

