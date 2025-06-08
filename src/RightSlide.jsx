import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CollectionsIcon from "@mui/icons-material/Collections";


export default function RightSlide({ toggleSettingPanel }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="h-screen">
      {/* Desktop layout */}
      <div className="hidden lg:flex flex-col items-center fixed top-20 right-4 z-50 space-y-6">
        {/* Run Settings */}
        <div
          onClick={toggleSettingPanel}
          onMouseEnter={() => setHoveredIcon("settings")}
          onMouseLeave={() => setHoveredIcon(null)}
          className="rounded-full p-2 hover:bg-gray-700 cursor-pointer relative"
        >
          <TuneIcon className="text-white" />
          {hoveredIcon === "settings" && (
            <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
              Run settings
            </div>
          )}
        </div>

        {/* Gallery Prompt */}
        <div
          onMouseEnter={() => setHoveredIcon("gallery")}
          onMouseLeave={() => setHoveredIcon(null)}
          className="rounded-full p-2 hover:bg-gray-700 cursor-pointer relative"
        >
          <CollectionsIcon className="text-white" />
          {hoveredIcon === "gallery" && (
            <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
              Gallery prompts
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout: Only Run Settings, placed beside Settings icon */}
      <div className="lg:hidden fixed top-1 right-20 z-50">
        <div
          onClick={toggleSettingPanel}
          className="p-2 rounded-full shadow-md"
        >
          <TuneIcon className="text-white" />
        </div>
      </div>
    </div>
  );
}
