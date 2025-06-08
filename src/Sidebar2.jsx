import { Link, useLocation } from "react-router-dom";
import KeyIcon from "@mui/icons-material/Key";

import { PiKeyFill } from "react-icons/pi";
import { MdListAlt } from 'react-icons/md';
import { MdBarChart } from "react-icons/md";

const sidebarLinks = [
  { name: "API Keys", icon: KeyIcon, to: "/dashboard" },
  { name: "Usage & Billing", icon: MdBarChart, to: "https://aistudio.google.com/usage" },
  { name: "Changelog", icon: MdListAlt, to: "https://aistudio.google.com/changelog" },
];

const Sidebar2 = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-60 bg-[#151617] text-white h-screen py-5 px-4 flex flex-col">
      {/* Title */}
      <div className="mb-3 ">
        <h1 className="text-2xl font-semibold pl-4 mb-4 text-[#b8d6f9] mb-[50px]">
          Google <span className="text-studioAccent">AI Studio</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {sidebarLinks.map(({ name, icon: Icon, to }) => {
          const isActive = pathname === to;
          return (
            <Link
              key={name}
              to={to}
              className={`flex items-center gap-3 px-4 py-2 text-sm transition-all ${isActive
                  ? "bg-[#2d2d2d] text-white px-6 py-2 rounded-3xl"
                  : "hover:bg-[#2a2a2a] hover:text-white rounded-xl text-gray-400"
                }`}
            >
              <Icon className="text-base" />
              {name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar2;
