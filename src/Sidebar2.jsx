import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import { MdListAlt, MdBarChart } from "react-icons/md";
import KeyIcon from "@mui/icons-material/Key";

const sidebarLinks = [
  { name: "API Keys", icon: KeyIcon, to: "/dashboard" },
  { name: "Usage & Billing", icon: MdBarChart, to: "https://aistudio.google.com/usage" },
  { name: "Changelog", icon: MdListAlt, to: "https://aistudio.google.com/changelog" },
];

const Sidebar2 = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#1e1e1e] p-2 rounded-full"
      >
        {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-60 bg-[#151617] text-white flex flex-col py-5 px-4 z-40 transition-transform duration-300 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Title */}
        <h1 className="text-2xl font-semibold pl-4 mb-10 text-[#b8d6f9]">
          Google <span className="text-[#8ab4f8]">AI Studio</span>
        </h1>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {sidebarLinks.map(({ name, icon: Icon, to }) => {
            const isActive = pathname === to;
            const isExternal = to.startsWith("http");

            const linkClass = `flex items-center gap-3 px-4 py-2 text-sm transition-all ${
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
              <a
                key={name}
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {content}
              </a>
            ) : (
              <Link
                key={name}
                to={to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {content}
              </Link>
            );
          })}
        </nav>

        {/* Optional Footer */}
        <div className="mt-auto px-4 text-sm text-gray-400 pt-6 hidden md:block">
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar2;
