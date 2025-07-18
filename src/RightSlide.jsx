// import { useState } from "react";
// import TuneIcon from "@mui/icons-material/Tune";
// import CollectionsIcon from "@mui/icons-material/Collections";


// import { useState } from 'react';
// import TuneIcon from '@mui/icons-material/Tune';
// import CollectionsIcon from '@mui/icons-material/Collections';

// export default function RightSlide({ toggleSettingPanel }) {
//   const [hoveredIcon, setHoveredIcon] = useState(null);

//   return (
//     <div className="relative h-screen">
//       {/* Run Settings */}
//       <div
//         onClick={toggleSettingPanel}
//         onMouseEnter={() => setHoveredIcon('settings')}
//         onMouseLeave={() => setHoveredIcon(null)}
//         className="sticky top-20 left-4 rounded-full p-2 hover:bg-gray-700 cursor-pointer"
//       >
//         <TuneIcon className="text-white" />
//         {hoveredIcon === 'settings' && (
//           <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
//             Run settings
//           </div>
//         )}
//       </div>

//       {/* Gallery Prompt */}
//       <div
//         onMouseEnter={() => setHoveredIcon('gallery')}
//         onMouseLeave={() => setHoveredIcon(null)}
//         className="sticky top-32 left-4 rounded-full p-2 hover:bg-gray-700 cursor-pointer"
//       >
//         <CollectionsIcon className="text-white" />
//         {hoveredIcon === 'gallery' && (
//           <div className="absolute right-0 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
//             Gallery prompts
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// import { useState } from 'react';
// import TuneIcon from '@mui/icons-material/Tune';
// import CollectionsIcon from '@mui/icons-material/Collections';

// export default function RightSlide({ toggleSettingPanel }) {
//   const [hoveredIcon, setHoveredIcon] = useState(null);

//   return (
//     <div className="relative h-screen">
//       {/* Run Settings */}
//       <div
//         onClick={toggleSettingPanel}
//         onMouseEnter={() => setHoveredIcon('settings')}
//         onMouseLeave={() => setHoveredIcon(null)}
//         className="sticky top-20 left-4 rounded-full p-2 hover:bg-gray-700 cursor-pointer"
//       >
//         <TuneIcon className="text-white" />
//         {hoveredIcon === 'settings' && (
//           <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
//             Run settings
//           </div>
//         )}
//       </div>

//       {/* Gallery Prompt */}
//       <div
//         onMouseEnter={() => setHoveredIcon('gallery')}
//         onMouseLeave={() => setHoveredIcon(null)}
//         className="sticky top-32 left-4 rounded-full p-2 hover:bg-gray-700 cursor-pointer"
//       >
//         <CollectionsIcon className="text-white" />
//         {hoveredIcon === 'gallery' && (
//           <div className="absolute right-0 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
//             Gallery prompts
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import TuneIcon from "@mui/icons-material/Tune";
// import CollectionsIcon from "@mui/icons-material/Collections";

// export default function RightSlide({ toggleSettingPanel }) {
//   const [hoveredIcon, setHoveredIcon] = useState(null);

//   return (
//     <div className="h-screen">
//       {/* Desktop layout */}
//       <div className="hidden lg:flex flex-col items-center fixed top-20 right-4 z-50 space-y-6">
//         {/* Run Settings */}
//         <div
//           onClick={toggleSettingPanel}
//           onMouseEnter={() => setHoveredIcon("settings")}
//           onMouseLeave={() => setHoveredIcon(null)}
//           className="rounded-full p-2 hover:bg-gray-700 cursor-pointer relative"
//         >
//           <TuneIcon className="text-white" />
//           {hoveredIcon === "settings" && (
//             <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
//               Run settings
//             </div>
//           )}
//         </div>

//         {/* Gallery Prompt */}
//         <div
//           onMouseEnter={() => setHoveredIcon("gallery")}
//           onMouseLeave={() => setHoveredIcon(null)}
//           className="rounded-full p-2 hover:bg-gray-700 cursor-pointer relative"
//         >
//           <CollectionsIcon className="text-white" />
//           {hoveredIcon === "gallery" && (
//             <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
//               Gallery prompts
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile layout */}
//       <div className="lg:hidden fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-4">
//         <div
//           onClick={toggleSettingPanel}
//           className="bg-gray-800 p-3 rounded-full shadow-md"
//         >
//           <TuneIcon className="text-white" />
//         </div>
//         <div className="bg-gray-800 p-3 rounded-full shadow-md">
//           <CollectionsIcon className="text-white" />
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import TuneIcon from "@mui/icons-material/Tune";
// import CollectionsIcon from "@mui/icons-material/Collections";

// export default function RightSlide({ toggleSettingPanel }) {
//   const [hoveredIcon, setHoveredIcon] = useState(null);

//   return (
//     <div className="h-screen">
//       {/* Desktop layout */}
//       <div className="hidden lg:flex flex-col items-center fixed top-20 right-4 z-50 space-y-6">
//         {/* Run Settings */}
//         <div
//           onClick={toggleSettingPanel}
//           onMouseEnter={() => setHoveredIcon("settings")}
//           onMouseLeave={() => setHoveredIcon(null)}
//           className="rounded-full p-2 hover:bg-gray-700 cursor-pointer relative"
//         >
//           <TuneIcon className="text-white" />
//           {hoveredIcon === "settings" && (
//             <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
//               Run settings
//             </div>
//           )}
//         </div>

//         {/* Gallery Prompt */}
//         <div
//           onMouseEnter={() => setHoveredIcon("gallery")}
//           onMouseLeave={() => setHoveredIcon(null)}
//           className="rounded-full p-2 hover:bg-gray-700 cursor-pointer relative"
//         >
//           <CollectionsIcon className="text-white" />
//           {hoveredIcon === "gallery" && (
//             <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
//               Gallery prompts
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile layout */}
//       <div className="lg:hidden fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-4">
//         <div
//           onClick={toggleSettingPanel}
//           className="bg-gray-800 p-3 rounded-full shadow-md"
//         >
//           <TuneIcon className="text-white" />
//         </div>
//         <div className="bg-gray-800 p-3 rounded-full shadow-md">
//           <CollectionsIcon className="text-white" />
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CollectionsIcon from "@mui/icons-material/Collections";

// Match header color and sizing
const HEADER_BG = "#151617";
const ICON_SECTION_WIDTH = 64; // px, smaller width
const HEADER_HEIGHT = 64; // px, adjust to match your header height

export default function RightSlide({ toggleSettingPanel }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Only show on desktop (lg and up)
  return (
    <div className="hidden lg:flex fixed right-0 z-[100] flex-col items-center" style={{ width: ICON_SECTION_WIDTH, top: HEADER_HEIGHT, height: `calc(100vh - ${HEADER_HEIGHT}px)`, background: HEADER_BG, minWidth: ICON_SECTION_WIDTH }}>
      {/* Settings Icon */}
      <div
        onClick={toggleSettingPanel}
        onMouseEnter={() => setHoveredIcon("settings")}
        onMouseLeave={() => setHoveredIcon(null)}
        className="mt-4 mb-6 flex items-center justify-center w-10 h-10 rounded-full bg-[#232525] hover:bg-[#353637] cursor-pointer transition-colors duration-150"
      >
        <TuneIcon className="text-[#bfc2c5]" style={{ fontSize: 20 }} />
      </div>
      {/* Gallery Icon */}
      <div
        onMouseEnter={() => setHoveredIcon("gallery")}
        onMouseLeave={() => setHoveredIcon(null)}
        className="flex items-center justify-center w-8 h-8 rounded-md bg-transparent hover:bg-[#353637] cursor-pointer transition-colors duration-150"
      >
        <CollectionsIcon className="text-[#bfc2c5]" style={{ fontSize: 16 }} />
      </div>
    </div>
  );
}
