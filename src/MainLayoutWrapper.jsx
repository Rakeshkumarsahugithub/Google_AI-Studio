import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import TopNav from "./TopNav";
import SettingsPanel from "./SettingPanel";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  const [isSettingPanelOpen, setSettingPanelOpen] = useState(false);
  const toggleSettingPanel = () => {
    setSettingPanelOpen(!isSettingPanelOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {isDashboard ? <Sidebar2 /> : <Sidebar />}
      <div className="flex-1 flex flex-col bg-studioGray">
        <TopNav
          isSettingPanelOpen={isSettingPanelOpen}
          toggleSettingPanel={toggleSettingPanel}
        />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto">{children}</div>
          {!isDashboard && isSettingPanelOpen && (
            <SettingsPanel onClose={toggleSettingPanel} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
