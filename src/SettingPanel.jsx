import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

const SettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [toolsOpen, setToolsOpen] = useState(true);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [temperature, setTemperature] = useState(1);
  const [topP, setTopP] = useState(1);

  const tools = [
    { name: "Structured output" },
    { name: "Code execution" },
    { name: "Function calling" },
    { name: "Grounding with Google Search" },
    { name: "URL context" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto lg:w-80 bg-[#1F1F24] border-l border-[#2F2F33] text-white flex flex-col p-4 overflow-y-auto max-h-screen">
      {/* Header with close button for mobile */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-300">Run settings</h2>
        <button 
          onClick={() => setIsOpen(false)} 
          className="text-gray-400 hover:text-white lg:hidden"
        >
          <FiX size={18} />
        </button>
        <button 
          onClick={() => setIsOpen(false)} 
          className="text-gray-400 hover:text-white hidden lg:block"
        >
          <FiX size={18} />
        </button>
      </div>

      {/* Mobile-only back button */}
      <div className="lg:hidden mb-4">
        <button 
          onClick={() => setIsOpen(false)} 
          className="text-blue-400 hover:text-blue-300 text-sm flex items-center cursor-pointer"
        >
          ← Back to chat
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto flex-1">
        {/* Model Dropdown */}
        <select className="w-full p-2 rounded-md bg-[#2A2B32] text-sm text-white focus:outline-none mb-4 cursor-pointer">
          <option>Gemini 2.5 Pro Preview</option>
        </select>

        {/* Token Count */}
        <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
          <div>Token count</div>
          <div className="px-2 py-1 text-xs text-gray-200 bg-[#2A2B32] rounded-md border border-[#2F2F33]">
            0 / 1,048,576
          </div>
        </div>

        {/* Temperature */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
            <span>Temperature</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={2}
              step={0.1}
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full accent-blue-500"
            />
            <input
              type="number"
              min={0}
              max={2}
              step={0.1}
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-16 px-2 py-1 bg-[#2A2B32] text-white text-xs border border-[#2F2F33] rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#2F2F33] mb-4" />

        {/* Thinking Section */}
        <div className="text-sm text-gray-300 mb-2">Thinking</div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-300">Thinking mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-300">Set thinking budget</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Divider */}
        <hr className="border-[#2F2F33] mb-4" />

        {/* Tools Section */}
        <button
          onClick={() => setToolsOpen(!toolsOpen)}
          className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-2 cursor-pointer"
        >
          <span>Tools</span>
          <FiChevronDown className={`transform transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
        </button>

        {toolsOpen && (
          <div className="space-y-4 mb-4">
            {tools.map((tool) => (
              <div className="flex justify-between items-center" key={tool.name}>
                <span className="text-sm text-gray-300">{tool.name}</span>
                <div className="flex items-center gap-2">
                  {(tool.name === "Structured output" || tool.name === "Function calling") && (
                    <span className="text-xs text-gray-400 cursor-pointer hover:text-white">Edit</span>
                  )}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        <hr className="border-[#2F2F33] mb-4" />

        {/* Advanced Settings */}
        <button
          onClick={() => setAdvancedOpen(!advancedOpen)}
          className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-2 cursor-pointer"
        >
          <span>Advanced settings</span>
          <FiChevronDown className={`transform transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
        </button>

        {advancedOpen && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Safety settings</span>
              <span className="text-xs text-gray-400 cursor-pointer hover:text-white">Edit</span>
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-1 block">Add stop sequence</label>
              <input
                type="text"
                placeholder="Add stop..."
                className="w-full p-2 rounded-md bg-[#2A2B32] text-sm text-white border border-[#2F2F33] focus:outline-none"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-300">Output length</span>
              <div className="flex items-center bg-[#2A2B32] rounded-md border border-[#2F2F33] px-2 py-1">
                <input
                  type="number"
                  defaultValue={65536}
                  className="w-20 bg-transparent text-white text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">Top P</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={topP}
                  onChange={(e) => setTopP(parseFloat(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <input
                  type="text"
                  min={0}
                  max={1}
                  step={0.01}
                  value={topP}
                  onChange={(e) => setTopP(parseFloat(e.target.value))}
                  className="w-16 px-2 py-1 bg-[#2A2B32] text-white text-xs border border-[#2F2F33] rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile footer */}
      <div className="lg:hidden mt-4 pt-4 border-t border-[#2F2F33]">
        <button 
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Apply Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;


