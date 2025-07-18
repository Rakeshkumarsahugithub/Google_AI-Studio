import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LuMessageSquare,
  LuWaves,
  LuImage,
  LuSettings2,
  LuClock,
  LuMenu,
  LuX,
  LuChevronDown,
  LuChevronRight,
} from "react-icons/lu";
import { MdListAlt, MdBarChart } from "react-icons/md";
import KeyIcon from "@mui/icons-material/Key";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

const studioLinks = [
  { name: "Chat", icon: LuMessageSquare, to: "/" },
  { name: "Stream", icon: LuWaves, to: "/stream" },
  { name: "Generate Media", icon: LuImage, to: "https://aistudio.google.com/gen-media" },
  { name: "Build", icon: LuSettings2, to: "https://aistudio.google.com/apps" },
  { name: "History", icon: LuClock, to: "https://aistudio.google.com/library" },
  {
    name: "Enable saving",
    icon: AddToDriveIcon,
    to: "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=823511539352-ojaretejk1s95sdvkic0te923pt7knpu.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.install&response_type=none%20gsession&access_type=offline&redirect_uri=storagerelay%3A%2F%2Fhttps%2Faistudio.google.com%3Fid%3Dauth12354&login_hint=113218895632440576722&service=lso&o2v=1&flowName=GeneralOAuthFlow"
  }
];

const dashboardLinks = [
  { name: "API Keys", icon: KeyIcon, to: "/dashboard" },
  { name: "Usage & Billing", icon: MdBarChart, to: "https://aistudio.google.com/usage" },
  { name: "Changelog", icon: MdListAlt, to: "https://aistudio.google.com/changelog" }
];

const SidebarCombined = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(true);
  const [dashboardOpen, setDashboardOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const renderLinks = (links) =>
    links.map(({ name, icon: Icon, to }) => {
      const isActive = pathname === to;
      const isExternal = to.startsWith("http");

      const classes = `flex items-center gap-3 px-4 py-2 text-sm transition-all ${
        isActive
          ? "bg-[#2d2d2d] text-white px-6 py-2 rounded-3xl"
          : "hover:bg-[#2a2a2a] hover:text-white rounded-xl text-gray-400"
      }`;

      const content = (
        <>
          <Icon className="text-base" />
          {name}
        </>
      );

      return isExternal ? (
        <a key={name} href={to} target="_blank" rel="noopener noreferrer" className={classes} onClick={() => setIsOpen(false)}>
          {content}
        </a>
      ) : (
        <Link key={name} to={to} className={classes} onClick={() => setIsOpen(false)}>
          {content}
        </Link>
      );
    });

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#1e1e1e] p-2 rounded-full"
      >
        {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#151617] text-white flex flex-col py-6 px-4 z-40 transition-transform duration-300 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        {/* Logo */}
        <h1 className="text-2xl font-semibold mb-6 text-[#b8d6f9]">
          Google <span className="text-[#8ab4f8]">AI Studio</span>
        </h1>

        {/* API Key Button */}
        <Link
          to="/dashboard"
          className="flex items-center gap-2 mb-6 text-white bg-[#2d2d2d] px-4 py-2 rounded-full text-sm justify-center"
        >
          <KeyIcon className="text-white" />
          Get API key
        </Link>

        {/* Studio Dropdown */}
        <div>
          <button
            onClick={() => setStudioOpen(!studioOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-xs text-gray-400"
          >
            <span>Studio</span>
            {studioOpen ? <LuChevronDown /> : <LuChevronRight />}
          </button>
          {studioOpen && <nav className="flex flex-col gap-1 mb-4">{renderLinks(studioLinks)}</nav>}
        </div>

        {/* Documentation Link (Standalone) */}
        <a
          href="https://aistudio.google.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 mb-4 text-sm text-gray-400 hover:text-white hover:bg-[#2a2a2a] rounded-xl"
        >
          Documentation ↗
        </a>

        {/* Dashboard Dropdown */}
        <div>
          <button
            onClick={() => setDashboardOpen(!dashboardOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-xs text-gray-400"
          >
            <span>Dashboard</span>
            {dashboardOpen ? <LuChevronDown /> : <LuChevronRight />}
          </button>
          {dashboardOpen && <nav className="flex flex-col gap-1">{renderLinks(dashboardLinks)}</nav>}
        </div>
      </div>

      {/* Overlay on Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleSidebar} />
      )}
    </>
  );
};

export default SidebarCombined;
