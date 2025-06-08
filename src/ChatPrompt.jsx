
import React, { useState, useEffect } from 'react';
import { FiBook, FiCode } from 'react-icons/fi';
import NativeSpeech from './assets/Native speech.png';
import LiveAudio from './assets/Live audio.png';
import Explore from './assets/Explore.png';
import NativeImage from './assets/Native image.png';
import { Link } from 'react-router-dom';
import {
  ClipboardList,
  Code2,
  Share2,
  Save,
  Shuffle,
  RotateCcw,
  MoreVertical,
} from 'lucide-react';

const icons = [
  { icon: <ClipboardList size={18} />, tooltip: 'System instruction' },
  { icon: <FiCode />, tooltip: 'Get SDK code to chat with Gemini' },
  { icon: <Share2 size={18} />, tooltip: 'You need to create and run a prompt in order to share it' },
  { icon: <Save size={18} />, tooltip: 'No changes to save' },
  { icon: <Shuffle size={18} />, tooltip: 'Compare mode' },
  { icon: <RotateCcw size={18} />, tooltip: 'Clear chat' },
  { icon: <MoreVertical size={18} />, tooltip: 'More options' },
];

export default function Chat() {
  const [prompt, setPrompt] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const sentences = [
    "Generate a scavenger hunt for street food around the city of Seoul, Korea ➔|",
    "Create a detailed description of an alien planet ➔|",
    "Generate a collection of elementary math worksheet for addition and subtraction o... ➔|",
    "Generate a high school revision guide on quantum computing ➔|",
    "Item: Apple, Price: $1. Extract name, Price to JSON ➔|",
    "Design A REST API for a social media platform ➔|"
  ];

  useEffect(() => {
    if (isTyping) return;
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [index, sentences, isTyping]);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
    setIsTyping(true);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-4 md:p-8 rounded-[2rem] mr-18">
      {/* Top Bar with Chat Prompt and Icons */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-l">Chat Prompt</h1>
        <div className="flex space-x-2">
          {icons.map((item, index) => (
            <div
              key={index}
              className="relative p-2 rounded-full hover:bg-gray-700 cursor-pointer"
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="text-gray-400">{item.icon}</div>
              {hoveredIcon === index && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                  {item.tooltip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-gray-600 mb-8"></div>

      {/* Main Centered Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)]">
        <h2 className="text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900 mb-10">
          Welcome to AI Studio
        </h2>

        {/* Input Box */}
        <div className="flex items-center bg-[#2a2a2a] rounded-full px-4 py-3 mb-8 w-full max-w-3xl relative">
          <input
            value={prompt}
            onChange={handleInputChange}
            placeholder={sentences[index]}
            className="flex-1 bg-transparent text-sm px-4 py-2 focus:outline-none rounded-full text-gray-300 placeholder-gray-400"
          />

          {/* File Upload */}
          <div className="relative group mr-2">
            <label htmlFor="file-upload" className="cursor-pointer text-gray-400 hover:text-white">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 group-hover:border-white">
                <span className="text-xl leading-none">+</span>
              </div>
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                console.log("Selected file:", file);
              }}
            />
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Insert assets such as images, videos, folders, files, or audio
            </div>
          </div>

          {/* Run Button */}
          <div className="relative group">
            <button className="flex items-center gap-1 bg-[#3c3c3c] hover:bg-[#505050] text-sm px-4 py-1 rounded-full text-gray-300">
              Run <span className="ml-1 text-xs text-gray-400">Ctrl ⤶</span>
            </button>
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Run prompt
            </div>
          </div>
        </div>

        {/* What's New Section */}
        <div className="w-full max-w-5xl px-2">
          <h3 className="text-l font-semibold mb-6">What's new</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Card 1 */}
            <a
              href="https://aistudio.google.com/generate-speech"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[#2d2d2d] p-4 rounded-2xl flex flex-col justify-between min-h-[100px] hover:bg-[#353535] transition"
            >
              <span className="absolute top-2 right-2 bg-[#98c0e6] text-blue-900 text-[11px] px-1 py-[2px] rounded-full font-medium">
                New
              </span>
              <div className="flex items-start gap-3">
                <img src={NativeSpeech} alt="Speech" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-semibold text-gray-200">Native speech generation</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Generate high quality text to speech with Gemini
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <Link
              to="/stream"
              className="relative bg-[#2d2d2d] p-4 rounded-2xl flex flex-col justify-between min-h-[100px] hover:bg-[#353535] transition"
            >
              <span className="absolute top-2 right-2 bg-[#98c0e6] text-blue-900 text-[11px] px-1 py-[2px] rounded-full font-medium">
                New
              </span>
              <div className="flex items-start gap-3">
                <img src={LiveAudio} alt="Audio" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-semibold text-gray-200">Live audio-to-audio dialog</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Try Gemini's natural, real-time dialog with audio and video inputs
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              to="/stream"
              className="bg-[#2d2d2d] p-4 rounded-2xl flex flex-col justify-between min-h-[100px] hover:bg-[#353535] transition"
            >
              <div className="flex items-start gap-3">
                <img src={NativeImage} alt="Image" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-semibold text-gray-200">Native image generation</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Interleaved text-and-image generation with the new Gemini 2.0 Flash
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 4 */}
            <a
              href="https://aistudio.google.com/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d2d2d] p-4 rounded-2xl flex flex-col justify-between min-h-[100px] hover:bg-[#353535] transition"
            >
              <div className="flex items-start gap-3">
                <img src={Explore} alt="App" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-semibold text-gray-200">Explore and co-develop apps</p>
                  <p className="text-sm text-gray-400 mt-1">
                    See Gemini in action with interactive, open source examples
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
