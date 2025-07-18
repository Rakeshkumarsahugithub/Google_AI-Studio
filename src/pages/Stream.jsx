import React, { useState } from 'react';

import { FiBook, FiCode, FiMic, FiVideo, FiMonitor } from 'react-icons/fi';
import {
  ClipboardList,
} from 'lucide-react';

const icons = [
  { icon: <ClipboardList size={18} />, tooltip: 'System instruction' },
  { icon: <FiCode />, tooltip: 'Get SDK code to chat with Gemini' },
];


export default function Stream() {
  const [prompt, setPrompt] = useState('');
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-4 md:p-8 rounded-[2rem] mr-1 lg:mr-16">
      <div className="flex-1 flex flex-col p-4">
        {/* Chat Prompt Section */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-l font-semibold">Stream Realtime</h1>
          <div className="flex space-x-2">
            {icons.map((item, index) => (
              <div
                key={index}
                className="relative p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {item.icon}
                {hoveredIcon === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                    {item.tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Line separator below Chat Prompt */}
        <div className="border-b border-gray-600 mb-[100px]"></div> {/* 100px gap */}

        {/* Welcome Section */}
        <h2 className="text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900 mb-10">
          Talk to Gemini live
        </h2>

        {/* Input Box Section */}
        <div className="flex flex-col">
          <div className="flex items-center bg-[#2a2a2a] rounded-full px-3 py-2 md:px-6 md:py-3 mb-4 w-full max-w-xs md:max-w-full mx-auto">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Start typing a prompt"
              className="flex-1 bg-transparent text-xs md:text-sm px-1 md:px-2 py-1 md:py-3 focus:outline-none rounded-full"
            />
            <button className="flex items-center gap-1 bg-[#16213e] hover:bg-[#22336b] text-xs md:text-sm px-2 md:px-4 py-1 md:py-1 rounded-full ml-2">
              Run <span className="ml-1 text-[10px] md:text-xs text-gray-400">Ctrl ⤶</span>
            </button>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-col gap-3 mt-4 w-full max-w-xs md:max-w-md mx-auto md:flex-row md:justify-center md:gap-4">
          <button
            style={{ background: 'rgb(1,13,61)', border: '1.5px solid rgb(35,145,235)' }}
            className="flex items-center justify-center gap-2 text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-sm md:text-base w-full md:w-auto"
          >
            <FiMic className="group-hover:text-[white]" />
            Talk
          </button>
          <button
            style={{ background: 'rgb(1,13,61)', border: '1.5px solid rgb(35,145,235)' }}
            className="flex items-center justify-center gap-2 text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-sm md:text-base w-full md:w-auto"
          >
            <FiVideo className="group-hover:text-[white]" />
            Webcam
          </button>
          <button
            style={{ background: 'rgb(1,13,61)', border: '1.5px solid rgb(35,145,235)' }}
            className="flex items-center justify-center gap-2 text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-sm md:text-base w-full md:w-auto"
          >
            <FiMonitor className="group-hover:text-[white]" />
            Share Screen
          </button>
        </div>
      </div>
    </div>
  );
}
