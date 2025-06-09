import React, { useState } from 'react';
import { FiCode, FiMic, FiVideo, FiMonitor } from 'react-icons/fi';
import { ClipboardList } from 'lucide-react';

const icons = [
  { icon: <ClipboardList size={18} />, tooltip: 'System instruction' },
  { icon: <FiCode size={18} />, tooltip: 'Get SDK code to chat with Gemini' },
];

export default function Stream() {
  const [prompt, setPrompt] = useState('');
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-[2rem] mr-1 lg:mr-16">
      <div className="flex-1 flex flex-col space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-base sm:text-lg font-semibold">Stream Realtime</h1>
          <div className="flex space-x-2">
            {icons.map((item, index) => (
              <div
                key={index}
                className="relative p-1 sm:p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {item.icon}
                {hoveredIcon === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 sm:mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                    {item.tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-600"></div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900 mb-4 sm:mb-10">
          Talk to Gemini live
        </h2>

        {/* Input */}
        <div className="flex flex-col">
          <div className="flex items-center bg-[#2a2a2a] rounded-full px-4 py-2 sm:px-6 sm:py-3">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Start typing a prompt"
              className="flex-1 bg-transparent text-sm px-2 py-2 focus:outline-none rounded-full"
            />
            <button className="flex items-center gap-1 cursor-pointer bg-[#3c3c3c] hover:bg-[#505050] text-xs sm:text-sm px-3 py-1 rounded-full ml-2">
              Run <span className="ml-1 text-[10px] text-gray-400 hidden sm:inline">Ctrl ⤶</span>
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 gap-2 mt-4 w-full">
          <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 border border-[#8ab4f8] px-4 py-2 text-xs sm:text-sm rounded-3xl hover:border-2">
            <FiMic />
            Talk
          </button>
          <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 border border-[#8ab4f8] px-4 py-2 text-xs sm:text-sm rounded-3xl hover:border-2">
            <FiVideo />
            Webcam
          </button>
          <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 border border-[#8ab4f8] px-4 py-2 text-xs sm:text-sm rounded-3xl hover:border-2">
            <FiMonitor />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

