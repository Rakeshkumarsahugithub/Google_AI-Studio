import { Link, useLocation } from "react-router-dom";

import {
  LuMessageSquare,
  LuWaves,
  LuImage,
  LuSettings2,
  LuClock,
  LuSave,
  LuPlus,
} from "react-icons/lu";
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

const links = [
  { name: "Chat", icon: LuMessageSquare, to: "/" },
  { name: "Stream", icon: LuWaves, to: "/stream" },
  { name: "Generate Media", icon: LuImage, to: "https://aistudio.google.com/gen-media" },
  { name: "Build", icon: LuSettings2, to: "https://aistudio.google.com/apps" },
  { name: "History", icon: LuClock, to: "https://aistudio.google.com/library" },
  { name: "Enable saving", icon: AddToDriveIcon, to: "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=823511539352-ojaretejk1s95sdvkic0te923pt7knpu.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.install&response_type=none%20gsession&access_type=offline&redirect_uri=storagerelay%3A%2F%2Fhttps%2Faistudio.google.com%3Fid%3Dauth12354&login_hint=113218895632440576722&service=lso&o2v=1&flowName=GeneralOAuthFlow" },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-56 bg-[#151617] text-white flex flex-col py-4 px-2">
      <h1 className="text-2xl font-semibold pl-4 mb-4 text-[#b8d6f9] mb-[50px]">
        Google <span className="text-studioAccent">AI Studio</span>
      </h1>

      <div className="flex flex-col gap-1">
        {links.map(({ name, icon: Icon, to }) => (
          <Link
            to={to}
            key={name}
            className={`flex items-center gap-3 px-4 py-2 text-sm ${pathname === to
                ? "bg-[#2d2d2d] text-white px-6 py-2 rounded-3xl"
                : "hover:bg-studioPanel rounded-lg"
              } ${name === "Enable saving" ? "mt-[1rem] ml-[1rem]" : ""
              }`}
          >
            <Icon className="text-lg" />
            {name}
          </Link>
        ))}
      </div>
      {/* <div className="mt-auto px-4 text-sm text-gray-400 pt-4">
        <p>This model not stable and may not be suitable for production use. Learn more.</p>
      </div> */}
      <div className="mt-auto px-4 text-sm text-gray-400 pt-4">
        <p>
          This model is not stable and may not be suitable for production use.{" "}
          <a
            href="https://ai.google.dev/gemini-api/docs/models#model-versions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6497d0] hover:underline"
          >
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;


