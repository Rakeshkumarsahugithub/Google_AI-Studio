// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Sidebar2 from "./Sidebar2";
// import TopNav from "./TopNav";
// import SettingsPanel from "./SettingPanel";

// const LayoutWrapper = ({ children }) => {
//   const location = useLocation();
//   const isDashboard = location.pathname === "/dashboard";

//   const [isSettingPanelOpen, setSettingPanelOpen] = useState(false);
//   const toggleSettingPanel = () => {
//     setSettingPanelOpen(!isSettingPanelOpen);
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {isDashboard ? <Sidebar2 /> : <Sidebar />}
//       <div className="flex-1 flex flex-col bg-studioGray">
//         <TopNav
//           isSettingPanelOpen={isSettingPanelOpen}
//           toggleSettingPanel={toggleSettingPanel}
//         />
//         <div className="flex flex-1 overflow-hidden">
//           <div className="flex-1 overflow-y-auto">{children}</div>
//           {!isDashboard && isSettingPanelOpen && (
//             <SettingsPanel onClose={toggleSettingPanel} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutWrapper;


import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import SidebarCombined from "./SidebarCombined"; // mobile version
import TopNav from "./TopNav";
import SettingsPanel from "./SettingPanel";
import useIsMobile from "./UseIsMobile";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const path = location.pathname;
  const isMobile = useIsMobile();
  const path = location.pathname;

  // Set initial state based on screen size - open on desktop, closed on mobile
  const [isSettingPanelOpen, setSettingPanelOpen] = useState(!isMobile);
  const toggleSettingPanel = () => {
    setSettingPanelOpen(!isSettingPanelOpen);
  };

  // Determine which sidebar to use
  const renderSidebar = () => {
    if (path === "/dashboard") {
      return isMobile ? <Sidebar /> : <Sidebar2 />;
    }

    if (path === "/" || path === "/stream") {
      return <Sidebar />;
    }

    // fallback
    return <Sidebar />;
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {renderSidebar()}
      {renderSidebar()}
      <div className="flex-1 flex flex-col bg-studioGray">
        <TopNav
          isSettingPanelOpen={isSettingPanelOpen}
          toggleSettingPanel={toggleSettingPanel}
        />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto">{children}</div>
          {path !== "/dashboard" && (
            <SettingsPanel 
              isOpen={isSettingPanelOpen} 
              onClose={toggleSettingPanel} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
