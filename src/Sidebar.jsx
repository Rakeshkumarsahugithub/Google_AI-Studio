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
} from "react-icons/lu";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

const links = [
  { name: "Chat", icon: LuMessageSquare, to: "/" },
  { name: "Stream", icon: LuWaves, to: "/stream" },
  { name: "Generate Media", icon: LuImage, to: "https://aistudio.google.com/gen-media" },
  { name: "Build", icon: LuSettings2, to: "https://aistudio.google.com/apps" },
  { name: "History", icon: LuClock, to: "https://aistudio.google.com/library" },
  {
    name: "Enable saving",
    icon: AddToDriveIcon,
    to: "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?...",
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const renderLinks = () =>
    links.map(({ name, icon: Icon, to }) => (
      <Link
        key={name}
        to={to}
        className={`flex items-center gap-3 px-4 py-2 text-sm ${
          pathname === to
            ? "bg-[#2d2d2d] text-white px-6 py-2 rounded-3xl"
            : "hover:bg-[#2a2a2a] text-gray-300 rounded-xl"
        } ${name === "Enable saving" ? "mt-4 ml-2" : ""}`}
        onClick={() => setIsOpen(false)}
        target={to.startsWith("http") ? "_blank" : "_self"}
        rel={to.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <Icon className="text-lg" />
        {name}
      </Link>
    ));

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#1e1e1e] p-2 rounded-full"
      >
        {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-56 bg-[#151617] text-white flex flex-col py-4 px-2 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-semibold pl-4 mb-10 text-[#b8d6f9]">
          Google <span className="text-[#8ab4f8]">AI Studio</span>
        </h1>
        <div className="flex flex-col gap-1">{renderLinks()}</div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col w-60 h-screen bg-[#151617] text-white py-6 px-4">
        <h1 className="text-2xl font-semibold pl-4 mb-10 text-[#b8d6f9]">
          Google <span className="text-[#8ab4f8]">AI Studio</span>
        </h1>
        <div className="flex flex-col gap-2">{renderLinks()}</div>
        <div className="mt-auto px-4 text-sm text-gray-400 pt-6">
          <p>
            Built with{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8ab4f8] hover:underline"
            >
              React
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
