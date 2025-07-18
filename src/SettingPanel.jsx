


// import { useState } from "react";
// import { FiChevronDown, FiX } from "react-icons/fi";

// const SettingsPanel = ({ isOpen, toggleSettingPanel }) => {
  
//   const [toolsOpen, setToolsOpen] = useState(true);
//   const [advancedOpen, setAdvancedOpen] = useState(false);
//   const [temperature, setTemperature] = useState(1);
//   const [topP, setTopP] = useState(1);

//   const tools = [
//     { name: "Structured output" },
//     { name: "Code execution" },
//     { name: "Function calling" },
//     { name: "Grounding with Google Search" },
//     { name: "URL context" },
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 lg:relative lg:inset-auto lg:w-80 bg-[#1F1F24] border-l border-[#2F2F33] text-white flex flex-col p-4 overflow-y-auto max-h-screen">
//       {/* Header with close button for mobile */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-sm font-semibold text-gray-300">Run settings</h2>
//         <button 
//           onClick={toggleSettingPanel}
//           className="text-gray-400 hover:text-white lg:hidden"
//         >
//           <FiX size={18} />
//         </button>
//         <button 
//           onClick={() => setIsOpen(false)} 
//           className="text-gray-400 hover:text-white hidden lg:block"
//         >
//           <FiX size={18} />
//         </button>
//       </div>

//       {/* Mobile-only back button */}
//       <div className="lg:hidden mb-4">
//         <button 
//           onClick={() => setIsOpen(false)} 
//           className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
//         >
//           ← Back to chat
//         </button>
//       </div>

//       {/* Content */}
//       <div className="overflow-y-auto flex-1">
//         {/* Model Dropdown */}
//         <select className="w-full p-2 rounded-md bg-[#2A2B32] text-sm text-white focus:outline-none mb-4">
//           <option>Gemini 2.5 Pro Preview</option>
//         </select>

//         {/* Token Count */}
//         <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
//           <div>Token count</div>
//           <div className="px-2 py-1 text-xs text-gray-200 bg-[#2A2B32] rounded-md border border-[#2F2F33]">
//             0 / 1,048,576
//           </div>
//         </div>

//         {/* Temperature */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
//             <span>Temperature</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <input
//               type="range"
//               min={0}
//               max={2}
//               step={0.1}
//               value={temperature}
//               onChange={(e) => setTemperature(parseFloat(e.target.value))}
//               className="w-full accent-blue-500"
//             />
//             <input
//               type="number"
//               min={0}
//               max={2}
//               step={0.1}
//               value={temperature}
//               onChange={(e) => setTemperature(parseFloat(e.target.value))}
//               className="w-16 px-2 py-1 bg-[#2A2B32] text-white text-xs border border-[#2F2F33] rounded-md focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="border-[#2F2F33] mb-4" />

//         {/* Thinking Section */}
//         <div className="text-sm text-gray-300 mb-2">Thinking</div>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-sm text-gray-300">Thinking mode</span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input type="checkbox" className="sr-only peer" />
//             <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-blue-600"></div>
//           </label>
//         </div>
//         <div className="flex justify-between items-center mb-6">
//           <span className="text-sm text-gray-300">Set thinking budget</span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input type="checkbox" className="sr-only peer" />
//             <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-blue-600"></div>
//           </label>
//         </div>

//         {/* Divider */}
//         <hr className="border-[#2F2F33] mb-4" />

//         {/* Tools Section */}
//         <button
//           onClick={() => setToolsOpen(!toolsOpen)}
//           className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-2"
//         >
//           <span>Tools</span>
//           <FiChevronDown className={`transform transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
//         </button>

//         {toolsOpen && (
//           <div className="space-y-4 mb-4">
//             {tools.map((tool) => (
//               <div className="flex justify-between items-center" key={tool.name}>
//                 <span className="text-sm text-gray-300">{tool.name}</span>
//                 <div className="flex items-center gap-2">
//                   {(tool.name === "Structured output" || tool.name === "Function calling") && (
//                     <span className="text-xs text-gray-400 cursor-pointer hover:text-white">Edit</span>
//                   )}
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input type="checkbox" className="sr-only peer" />
//                     <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-blue-600"></div>
//                   </label>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Divider */}
//         <hr className="border-[#2F2F33] mb-4" />

//         {/* Advanced Settings */}
//         <button
//           onClick={() => setAdvancedOpen(!advancedOpen)}
//           className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-2"
//         >
//           <span>Advanced settings</span>
//           <FiChevronDown className={`transform transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
//         </button>

//         {advancedOpen && (
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-300">Safety settings</span>
//               <span className="text-xs text-gray-400 cursor-pointer hover:text-white">Edit</span>
//             </div>

//             <div>
//               <label className="text-sm text-gray-300 mb-1 block">Add stop sequence</label>
//               <input
//                 type="text"
//                 placeholder="Add stop..."
//                 className="w-full p-2 rounded-md bg-[#2A2B32] text-sm text-white border border-[#2F2F33] focus:outline-none"
//               />
//             </div>

//             <div className="flex justify-between items-center mb-4">
//               <span className="text-sm text-gray-300">Output length</span>
//               <div className="flex items-center bg-[#2A2B32] rounded-md border border-[#2F2F33] px-2 py-1">
//                 <input
//                   type="number"
//                   defaultValue={65536}
//                   className="w-20 bg-transparent text-white text-sm focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-xs text-gray-400">Top P</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="range"
//                   min={0}
//                   max={1}
//                   step={0.01}
//                   value={topP}
//                   onChange={(e) => setTopP(parseFloat(e.target.value))}
//                   className="w-full accent-blue-500"
//                 />
//                 <input
//                   type="text"
//                   min={0}
//                   max={1}
//                   step={0.01}
//                   value={topP}
//                   onChange={(e) => setTopP(parseFloat(e.target.value))}
//                   className="w-16 px-2 py-1 bg-[#2A2B32] text-white text-xs border border-[#2F2F33] rounded-md focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Mobile footer */}
//       <div className="lg:hidden mt-4 pt-4 border-t border-[#2F2F33]">
//         <button 
//           className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
//           onClick={() => setIsOpen(false)}
//         >
//           Apply Settings
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SettingsPanel;


// import { useState } from "react";
// import { FiChevronDown, FiX } from "react-icons/fi";

// const SettingsPanel = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [toolsOpen, setToolsOpen] = useState(true);
//   const [advancedOpen, setAdvancedOpen] = useState(false);
//   const [temperature, setTemperature] = useState(1);
//   const [topP, setTopP] = useState(1);


//   const tools = [
//     { name: "Structured output" },
//     { name: "Code execution" },
//     { name: "Function calling" },
//     { name: "Grounding with Google Search" },
//     { name: "URL context" },
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="lg:w-80 sm:w-60 bg-[#1F1F24] border-l border-[#2F2F33] text-white flex flex-col p-4 sm:mr-16 overflow-y-auto max-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-sm font-semibold text-gray-300">Run settings</h2>
//         <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
//           <FiX size={18} />
//         </button>
//       </div>

//       {/* Model Dropdown */}
//       <select className="w-full p-2 rounded-md bg-[#2A2B32] text-sm text-white focus:outline-none mb-4">
//         <option>Gemini 2.5 Pro Preview</option>
//       </select>

//       {/* Token Count */}
//       <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
//         <div>Token count</div>
//         <div className="px-2 py-1 text-xs text-gray-200 bg-[#2A2B32] rounded-md border border-[#2F2F33]">
//           0 / 1,048,576
//         </div>
//       </div>

//       {/* Temperature */}
//       <div className="mb-6">
//         <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
//           <span>Temperature</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <input
//             type="range"
//             min={0}
//             max={2}
//             step={0.1}
//             value={temperature}
//             onChange={(e) => setTemperature(parseFloat(e.target.value))}
//             className="w-full accent-blue-500"
//           />
//           <input
//             type="number"
//             min={0}
//             max={2}
//             step={0.1}
//             value={temperature}
//             onChange={(e) => setTemperature(parseFloat(e.target.value))}
//             className="w-16 px-2 py-1 bg-[#2A2B32] text-white text-xs border border-[#2F2F33] rounded-md focus:outline-none"
//           />
//         </div>
//       </div>




//       {/* Divider */}
//       <hr className="border-[#2F2F33] mb-4" />

//       {/* Thinking Section */}
//       <div className="text-sm text-gray-300 mb-2">Thinking</div>
//       <div className="flex justify-between items-center mb-4">
//         <span className="text-sm text-gray-300">Thinking mode</span>
//         <label className="relative inline-flex items-center cursor-pointer">
//           <input type="checkbox" className="sr-only peer" />
//           <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:bg-blue-600"></div>
//         </label>
//       </div>
//       <div className="flex justify-between items-center mb-6">
//         <span className="text-sm text-gray-300">Set thinking budget</span>
//         <label className="relative inline-flex items-center cursor-pointer">
//           <input type="checkbox" className="sr-only peer" />
//           <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:bg-blue-600"></div>
//         </label>
//       </div>

//       {/* Divider */}
//       <hr className="border-[#2F2F33] mb-4" />

//       {/* Tools Section */}
//       <button
//         onClick={() => setToolsOpen(!toolsOpen)}
//         className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-2"
//       >
//         <span>Tools</span>
//         <FiChevronDown className={`transform transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
//       </button>


//       {toolsOpen && (
//         <div className="space-y-4 mb-4">
//           {tools.map((tool) => (
//             <div className="flex justify-between items-center" key={tool.name}>
//               <span className="text-sm text-gray-300">{tool.name}</span>
//               <div className="flex items-center gap-2">
//                 {(tool.name === "Structured output" || tool.name === "Function calling") && (
//                   <span className="text-xs text-gray-400 cursor-pointer hover:text-white">Edit</span>
//                 )}
//                 <label className="relative inline-flex items-center cursor-pointer">
//                   <input type="checkbox" className="sr-only peer" />
//                   <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:bg-blue-600"></div>
//                 </label>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}


//       {/* Divider */}
//       <hr className="border-[#2F2F33] mb-4" />

//       {/* Advanced Settings */}
//       <button
//         onClick={() => setAdvancedOpen(!advancedOpen)}
//         className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-2"
//       >
//         <span>Advanced settings</span>
//         <FiChevronDown className={`transform transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
//       </button>

//       {advancedOpen && (
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-sm text-gray-300">Safety settings</span>
//             <span className="text-xs text-gray-400 cursor-pointer hover:text-white">Edit</span>
//           </div>

//           <div>
//             <label className="text-sm text-gray-300 mb-1 block">Add stop sequence</label>
//             <input
//               type="text"
//               placeholder="Add stop..."
//               className="w-full p-2 rounded-md bg-[#2A2B32] text-sm text-white border border-[#2F2F33] focus:outline-none"
//             />
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <span className="text-sm text-gray-300">Output length</span>
//             <div className="flex items-center bg-[#2A2B32] rounded-md border border-[#2F2F33] px-2 py-1">
//               <input
//                 type="number"
//                 defaultValue={65536}
//                 className="w-20 bg-transparent text-white text-sm focus:outline-none"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-xs text-gray-400">Top P</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <input
//                 type="range"
//                 min={0}
//                 max={1}
//                 step={0.01}
//                 value={topP}
//                 onChange={(e) => setTopP(parseFloat(e.target.value))}
//                 className="w-full accent-blue-500"
//               />
//               <input
//                 type="text"
//                 min={0}
//                 max={1}
//                 step={0.01}
//                 value={topP}
//                 onChange={(e) => setTopP(parseFloat(e.target.value))}
//                 className="w-16 px-2 py-1 bg-[#2A2B32] text-white text-xs border border-[#2F2F33] rounded-md focus:outline-none"
//               />
//             </div>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// };

// export default SettingsPanel;




import { useState, useRef } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import ModelDropdown from './ModelDropdown';

const COLORS = {
  panelBg: "#1F1F24",
  border: "#2F2F33",
  inputBg: "#2A2B32",
  text: "#E3E3E3",
  label: "#B0B0B0",
  blue: "#8ab4f8",
  toggleOn: "#4285F4",
  toggleOff: "#44464D",
  edit: "#B0B0B0",
  editHover: "#fff",
};

const SettingsPanel = ({ isOpen, onClose }) => {
  const [toolsOpen, setToolsOpen] = useState(true);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [temperature, setTemperature] = useState(1);
  const [topP, setTopP] = useState(1);
  const [mediaResolution, setMediaResolution] = useState("Default");
  const [thinkingMode, setThinkingMode] = useState(false);
  const [thinkingBudget, setThinkingBudget] = useState(false);
  const [toolToggles, setToolToggles] = useState({
    "Structured output": false,
    "Code execution": false,
    "Function calling": false,
    "Grounding with Google Search": false,
    "URL context": false,
  });
  const [selectedModel, setSelectedModel] = useState("Gemini 2.5 Pro Preview");

  const tools = [
    { name: "Structured output" },
    { name: "Code execution" },
    { name: "Function calling" },
    { name: "Grounding with Google Search" },
    { name: "URL context" },
  ];

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 lg:relative lg:inset-auto lg:w-80 border-l border-[#2F2F33] text-white flex flex-col p-4 overflow-y-auto max-h-screen shadow-xl`}
      style={{
        fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
        fontWeight: 400,
        right: typeof window !== 'undefined' && window.innerWidth >= 1024 ? 64 : 0,
        borderRadius: '18px',
        background: '#232525',
      }}
    >
      {/* Header with close button for mobile */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-semibold text-[#E3E3E3] tracking-tight">Run settings</h2>
        <button 
          onClick={onClose} 
          className="text-[#B0B0B0] hover:text-white lg:hidden p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8ab4f8]"
        >
          <FiX size={20} />
        </button>
        <button 
          onClick={onClose} 
          className="text-[#B0B0B0] hover:text-white hidden lg:block p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8ab4f8]"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Mobile-only back button */}
      <div className="lg:hidden mb-4">
        <button 
          onClick={onClose} 
          className="text-[#8ab4f8] hover:text-[#B0B0B0] text-[14px] flex items-center cursor-pointer font-medium"
        >
          ← Back to chat
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto flex-1">
        {/* Model Dropdown */}
        <ModelDropdown value={selectedModel} onChange={setSelectedModel} />

        {/* Token Count */}
        <div className="flex justify-between items-center text-xs text-[#B0B0B0] mb-1">
          <div>Token count</div>
          <div className="px-2 py-1 text-xs text-[#E3E3E3] bg-[#2A2B32] rounded-md border border-[#2F2F33] font-mono">0 / 1,048,576</div>
        </div>

        {/* Temperature */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs text-[#B0B0B0] mb-2">
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
              className="w-full accent-[#8ab4f8]"
              style={{ height: 4 }}
            />
            <input
              type="number"
              min={0}
              max={2}
              step={0.1}
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-16 px-2 py-1 bg-[#2A2B32] text-[#E3E3E3] text-xs border border-[#2F2F33] rounded-md focus:outline-none text-center"
            />
          </div>
        </div>

        {/* Media Resolution */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs text-[#B0B0B0] mb-2">
            <span>Media Resolution</span>
          </div>
          <select
            className="w-full p-2 rounded-md bg-[#2A2B32] text-[14px] text-[#E3E3E3] focus:outline-none border border-[#2F2F33] cursor-pointer font-medium"
            value={mediaResolution}
            onChange={e => setMediaResolution(e.target.value)}
          >
            <option>Default</option>
            <option>High</option>
            <option>Low</option>
          </select>
        </div>

        {/* Divider */}
        <hr className="border-[#2F2F33] mb-4" />

        {/* Thinking Section */}
        <div className="text-sm text-[#E3E3E3] mb-2 font-medium">Thinking</div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-[#E3E3E3]">Thinking mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={thinkingMode}
              onChange={() => setThinkingMode(!thinkingMode)}
            />
            <div className="w-9 h-5 bg-[#44464D] peer-checked:bg-[#4285F4] rounded-full transition-colors duration-200"></div>
            <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-4"></span>
          </label>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-[#E3E3E3]">Set thinking budget</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={thinkingBudget}
              onChange={() => setThinkingBudget(!thinkingBudget)}
            />
            <div className="w-9 h-5 bg-[#44464D] peer-checked:bg-[#4285F4] rounded-full transition-colors duration-200"></div>
            <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-4"></span>
          </label>
        </div>

        {/* Divider */}
        <hr className="border-[#2F2F33] mb-4" />

        {/* Tools Section */}
        <button
          onClick={() => setToolsOpen(!toolsOpen)}
          className="w-full flex justify-between items-center text-sm text-[#E3E3E3] hover:text-white mb-2 cursor-pointer font-medium"
        >
          <span>Tools</span>
          <FiChevronDown className={`transform transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
        </button>

        {toolsOpen && (
          <div className="space-y-4 mb-4">
            {tools.map((tool) => (
              <div className="flex justify-between items-center" key={tool.name}>
                <span className="text-sm text-[#E3E3E3]">{tool.name}</span>
                <div className="flex items-center gap-2">
                  {(tool.name === "Structured output" || tool.name === "Function calling") && (
                    <span className="text-xs text-[#B0B0B0] cursor-pointer hover:text-white transition-colors">Edit</span>
                  )}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={toolToggles[tool.name]}
                      onChange={() => setToolToggles(t => ({ ...t, [tool.name]: !t[tool.name] }))}
                    />
                    <div className="w-9 h-5 bg-[#44464D] peer-checked:bg-[#4285F4] rounded-full transition-colors duration-200"></div>
                    <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-4"></span>
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
          className="w-full flex justify-between items-center text-sm text-[#E3E3E3] hover:text-white mb-2 cursor-pointer font-medium"
        >
          <span>Advanced settings</span>
          <FiChevronDown className={`transform transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
        </button>

        {advancedOpen && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#E3E3E3]">Safety settings</span>
              <span className="text-xs text-[#B0B0B0] cursor-pointer hover:text-white transition-colors">Edit</span>
            </div>

            <div>
              <label className="text-sm text-[#E3E3E3] mb-1 block">Add stop sequence</label>
              <input
                type="text"
                placeholder="Add stop..."
                className="w-full p-2 rounded-md bg-[#2A2B32] text-[14px] text-[#E3E3E3] border border-[#2F2F33] focus:outline-none"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#E3E3E3]">Output length</span>
              <div className="flex items-center bg-[#2A2B32] rounded-md border border-[#2F2F33] px-2 py-1">
                <input
                  type="number"
                  defaultValue={65536}
                  className="w-20 bg-transparent text-[#E3E3E3] text-sm focus:outline-none text-center"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-[#B0B0B0]">Top P</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={topP}
                  onChange={(e) => setTopP(parseFloat(e.target.value))}
                  className="w-full accent-[#8ab4f8]"
                  style={{ height: 4 }}
                />
                <input
                  type="text"
                  min={0}
                  max={1}
                  step={0.01}
                  value={topP}
                  onChange={(e) => setTopP(parseFloat(e.target.value))}
                  className="w-16 px-2 py-1 bg-[#2A2B32] text-[#E3E3E3] text-xs border border-[#2F2F33] rounded-md focus:outline-none text-center"
                />
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Mobile footer */}
      <div className="lg:hidden mt-4 pt-4 border-t border-[#2F2F33]">
        <button 
          className="w-full py-2 bg-[#4285F4] hover:bg-[#3367D6] rounded-md text-white font-semibold text-[15px] tracking-tight shadow focus:outline-none focus:ring-2 focus:ring-[#8ab4f8]"
          onClick={onClose}
        >
          Apply Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;


// import { useState } from "react";
// import { FiChevronDown, FiX } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5"; // Run settings icon

// const SettingsPanel = () => {
//   const [isOpen, setIsOpen] = useState(false); // Universal toggle
//   const [toolsOpen, setToolsOpen] = useState(true);
//   const [advancedOpen, setAdvancedOpen] = useState(false);
//   const [temperature, setTemperature] = useState(1);
//   const [topP, setTopP] = useState(1);

//   const tools = [
//     { name: "Structured output" },
//     { name: "Code execution" },
//     { name: "Function calling" },
//     { name: "Grounding with Google Search" },
//     { name: "URL context" },
//   ];

//   return (
//     <>
//       {/* Toggle Button for All Screens */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md flex items-center gap-2"
//       >
//         <IoSettingsOutline className="text-xl" />
//         <span className="hidden sm:inline">Run Settings</span>
//       </button>

//       {/* Backdrop for small screens only */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//         />
//       )}

//       {/* Settings Panel */}
//       <div
//         className={`
//           fixed top-0 right-0 h-full w-80 sm:w-64 bg-[#1F1F24] border-l border-[#2F2F33] text-white p-4 z-50 transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-sm font-semibold text-gray-300">Run settings</h2>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-gray-400 hover:text-white"
//           >
//             <FiX size={18} />
//           </button>
//         </div>

//         {/* Model Dropdown */}
//         <select className="w-full p-2 rounded-md bg-[#2A2B32] text-sm text-white focus:outline-none mb-4">
//           <option>Gemini 2.5 Pro Preview</option>
//         </select>

//         {/* Token Count */}
//         <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
//           <div>Token count</div>
//           <div className="px-2 py-1 text-xs text-gray-200 bg-[#2A2B32] rounded-md border border-[#2F2F33]">
//             0 / 1,048,576
//           </div>
//         </div>

//         {/* Temperature */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
//             <span>Temperature</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <input
//               type="range"
//               min={0}
//               max={2}
//               step={0.1}
//               value={temperature}
//               onChange={(e) => setTemperature(parseFloat(e.target.value))}
//               className="w-full accent-blue-500"
//             />
//             <input
//               type="number"
//               min={0}
//               max={2}
//               step={0.1}
//               value={temperature}
//               onChange={(e) => setTemperature(parseFloat(e.target.value))}
//               className="w-16 px-2 py-1 bg-[#2A2B32] text-white text-xs border border-[#2F2F33] rounded-md focus:outline-none"
//             />
//           </div>
//         </div>

//         <hr className="border-[#2F2F33] mb-4" />

//         {/* Thinking */}
//         <div className="text-sm text-gray-300 mb-2">Thinking</div>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-sm text-gray-300">Thinking mode</span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input type="checkbox" className="sr-only peer" />
//             <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:bg-blue-600"></div>
//           </label>
//         </div>
//         <div className="flex justify-between items-center mb-6">
//           <span className="text-sm text-gray-300">Set thinking budget</span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input type="checkbox" className="sr-only peer" />
//             <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:bg-blue-600"></div>
//           </label>
//         </div>

//         <hr className="border-[#2F2F33] mb-4" />

//         {/* Tools */}
//         <button
//           onClick={() => setToolsOpen(!toolsOpen)}
//           className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-2"
//         >
//           <span>Tools</span>
//           <FiChevronDown
//             className={`transform transition-transform ${
//               toolsOpen ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {toolsOpen && (
//           <div className="space-y-4 mb-4">
//             {tools.map((tool) => (
//               <div className="flex justify-between items-center" key={tool.name}>
//                 <span className="text-sm text-gray-300">{tool.name}</span>
//                 <div className="flex items-center gap-2">
//                   {(tool.name === "Structured output" || tool.name === "Function calling") && (
//                     <span className="text-xs text-gray-400 cursor-pointer hover:text-white">
//                       Edit
//                     </span>
//                   )}
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input type="checkbox" className="sr-only peer" />
//                     <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:bg-blue-600"></div>
//                   </label>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <hr className="border-[#2F2F33] mb-4" />

//         {/* Advanced */}
//         <button
//           onClick={() => setAdvancedOpen(!advancedOpen)}
//           className="w-full flex justify-between items-center text-sm text-gray-300 hover:text-white mb-2"
//         >
//           <span>Advanced settings</span>
//           <FiChevronDown
//             className={`transform transition-transform ${
//               advancedOpen ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {advancedOpen && (
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-300">Safety settings</span>
//               <span className="text-xs text-gray-400 cursor-pointer hover:text-white">Edit</span>
//             </div>

//             <div>
//               <label className="text-sm text-gray-300 mb-1 block">Add stop sequence</label>
//               <input
//                 type="text"
//                 placeholder="Add stop..."
//                 className="w-full p-2 rounded-md bg-[#2A2B32] text-sm text-white border border-[#2F2F33] focus:outline-none"
//               />
//             </div>

//             <div className="flex justify-between items-center mb-4">
//               <span className="text-sm text-gray-300">Output length</span>
//               <div className="flex items-center bg-[#2A2B32] rounded-md border border-[#2F2F33] px-2 py-1">
//                 <input
//                   type="number"
//                   defaultValue={65536}
//                   className="w-20 bg-transparent text-white text-sm focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-xs text-gray-400">Top P</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="range"
//                   min={0}
//                   max={1}
//                   step={0.01}
//                   value={topP}
//                   onChange={(e) => setTopP(parseFloat(e.target.value))}
//                   className="w-full accent-blue-500"
//                 />
//                 <input
//                   type="text"
//                   min={0}
//                   max={1}
//                   step={0.01}
//                   value={topP}
//                   onChange={(e) => setTopP(parseFloat(e.target.value))}
//                   className="w-16 px-2 py-1 bg-[#2A2B32] text-white text-xs border border-[#2F2F33] rounded-md focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SettingsPanel;



