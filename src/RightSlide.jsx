
import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function RightSlide({ toggleSettingPanel }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="relative h-screen">
      {/* Run Settings */}
      <div
        onClick={toggleSettingPanel}
        onMouseEnter={() => setHoveredIcon('settings')}
        onMouseLeave={() => setHoveredIcon(null)}
        className="sticky top-20 left-4 rounded-full p-2 hover:bg-gray-700 cursor-pointer"
      >
        <TuneIcon className="text-white" />
        {hoveredIcon === 'settings' && (
          <div className="absolute right-12 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
            Run settings
          </div>
        )}
      </div>

      {/* Gallery Prompt */}
      <div
        onMouseEnter={() => setHoveredIcon('gallery')}
        onMouseLeave={() => setHoveredIcon(null)}
        className="sticky top-32 left-4 rounded-full p-2 hover:bg-gray-700 cursor-pointer"
      >
        <CollectionsIcon className="text-white" />
        {hoveredIcon === 'gallery' && (
          <div className="absolute right-0 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded z-10">
            Gallery prompts
          </div>
        )}
      </div>
    </div>
  );
}
