import { useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import SidebarCombined from "./SidebarCombined"; // mobile version
import TopNav from "./TopNav";
import SettingsPanel from "./SettingPanel";
import useIsMobile from "./hooks/UseIsMobile";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const path = location.pathname;

  const [isSettingPanelOpen, setSettingPanelOpen] = useState(false);
  const toggleSettingPanel = () => {
    setSettingPanelOpen(!isSettingPanelOpen);
  };

  // Determine which sidebar to use
  const renderSidebar = () => {
    if (path === "/dashboard") {
      return isMobile ? <SidebarCombined /> : <Sidebar2 />;
    }

    if (path === "/" || path === "/stream") {
      return isMobile ? <SidebarCombined /> : <Sidebar />;
    }

    // fallback
    return <Sidebar />;
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {renderSidebar()}
      <div className="flex-1 flex flex-col bg-studioGray">
        <TopNav
          isSettingPanelOpen={isSettingPanelOpen}
          toggleSettingPanel={toggleSettingPanel}
        />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto">{children}</div>
          {path !== "/dashboard" && isSettingPanelOpen && (
            <SettingsPanel onClose={toggleSettingPanel} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
