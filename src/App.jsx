
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import TopNav from "./TopNav";
import SettingsPanel from "./SettingPanel";
import Stream from "./pages/Stream";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { useState } from "react";

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

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studio/chat" element={<Home />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;





