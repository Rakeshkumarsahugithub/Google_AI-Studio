import { useState } from "react";
import { FiCopy, FiDownload, FiPlus } from "react-icons/fi";
import useIsMobile from "../UseIsMobile";

const Dashboard = () => {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();

  const codeText = `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \\
-H "Content-Type: application/json" \\
-X POST \\
-d '{
  "contents": [
    {
      "parts": [
        {
          "text": "Explain how AI works in a few words"
        }
      ]
    }
  ]
}'`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = () => {
    const blob = new Blob([codeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "copy.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`bg-[#1a1a1a] min-h-screen text-white ${isMobile ? 'p-1' : 'p-4 sm:p-6'} relative`}>
  <div className={`mx-auto ${isMobile ? 'px-1' : 'max-w-6xl px-4 sm:px-6'}`}>

    {/* Header */}
    <div className={`flex flex-col ${isMobile ? 'gap-1' : 'sm:flex-row justify-between items-start sm:items-center gap-4'} ${isMobile ? 'mb-2' : 'mb-4'}`}>
      <h1 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-semibold`}>API Keys</h1>
      <button className={`flex items-center gap-2 cursor-pointer bg-[#7a9fe3] hover:bg-[#688fd0] border border-[#3c4043] text-[#1e3a8a] font-semibold ${isMobile ? 'px-2 py-1 text-xs self-start' : 'px-4 py-2'} rounded-3xl`}>
        <FiPlus className="text-[#1e3a8a]" />
        <span className={isMobile ? 'whitespace-nowrap' : ''}>Create API key</span>
      </button>
    </div>

    {/* Subheading */}
    <p className={`text-gray-400 ${isMobile ? 'mb-2 text-xs' : 'mb-4'} font-semibold`}>Quickly test the Gemini API</p>

    <div className="w-full">
      <a href="https://ai.google.dev/gemini-api/docs/quickstart?lang=python" className={`text-[#8ab4f8] ${isMobile ? 'mb-2 text-xs' : 'mb-3 text-sm'} inline-block hover:underline`}>
        API quickstart guide
      </a>

      {/* Code Box */}
      <div className={`${isMobile ? 'mt-2' : 'mt-3'} bg-[#1e1f20] rounded-lg w-full overflow-auto font-mono ${isMobile ? 'text-xs' : 'text-sm'} text-blue-400`}>
        <pre className={`whitespace-pre-wrap leading-relaxed ${isMobile ? 'p-2' : 'p-6'} min-w-[300px]`}>
          <code>
            <span className="text-white">curl</span> "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \<br />
            <span className="text-white">-H</span> "Content-Type: application/json" \<br />
            <span className="text-white">-X POST</span> \<br />
            <span className="text-white">-d</span> &#123; <br />
            {"  \"contents\": [\n    {\n      \"parts\": [\n        {\n          \"text\": \"Explain how AI works in a few words\"\n        }\n      ]\n    }\n  ]"} <br />
            &#125;
          </code>
        </pre>

        <div className={`w-full flex flex-wrap items-center justify-between ${isMobile ? 'px-2 py-1' : 'px-6 py-3'} bg-[#4B4B4B] border-t border-[#2a2a2a] rounded-b-lg`}>
          <div className={`flex gap-4 items-center ${isMobile ? 'gap-1' : ''}`}>
            <button onClick={handleCopy} className={`text-gray-300 hover:text-white flex items-center ${isMobile ? 'text-xs' : 'text-sm'}`}>
              <FiCopy className={`${isMobile ? 'mr-0.5' : 'mr-1'} cursor-pointer`} />
              Copy
            </button>

            <button onClick={handleDownload} className={`text-gray-300 hover:text-white flex items-center ${isMobile ? 'text-xs' : 'text-sm'}`}>
              <FiDownload className={`${isMobile ? 'mr-0.5' : 'mr-1'} cursor-pointer`} />
              Download
            </button>

            <div className={`text-gray-400 ${isMobile ? 'text-xs ml-1' : 'text-xs ml-2'}`}>
              Use code{" "}
              <a href="https://support.google.com/legal/answer/13505487" target="_blank" rel="noopener noreferrer" className="text-[#8ab4f8] hover:underline">
                with caution
              </a>.
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className={`${isMobile ? 'mt-3' : 'mt-6'} text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>
        <p className="mb-2">
          Your API keys are listed below. You can also view and manage your project and API keys in Google Cloud.
        </p>
      </div>

      {/* Table */}
      <div className={`${isMobile ? 'mt-2' : 'mt-4'} w-full border border-[#2a2a2a] rounded-lg overflow-auto ${isMobile ? 'text-xs' : ''}`}>
        <div className={`${isMobile ? 'min-w-[350px]' : 'min-w-[600px]'}`}>
          <div className={`bg-[#4B4B4B] text-left grid grid-cols-5 ${isMobile ? 'px-1 py-1' : 'px-4 py-3'} text-gray-300 font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>
            <div>Project number</div>
            <div>Project name</div>
            <div>API key</div>
            <div>Created</div>
            <div>Plan</div>
          </div>
          <div className={`bg-[#151617] ${isMobile ? 'px-1 py-4' : 'px-4 py-8'} text-center`}>
            <div className="flex flex-col items-center justify-center">
              <div className={`text-gray-500 mb-4 ${isMobile ? 'text-xs' : ''}`}>Create an API key to see your projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className={`${isMobile ? 'mt-2' : 'mt-4'} text-gray-400 ${isMobile ? 'text-xs' : 'text-xs'}`}>
        Remember to use API keys securely. Don't share or embed them in public code. Use of Gemini API from a billing-enabled project is subject to{" "}
        <a
          href="https://ai.google.dev/gemini-api/docs/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8ab4f8] hover:underline"
        >
          pay-as-you-go pricing
        </a>.
      </div>
    </div>
  </div>

  {/* Copy Notification */}
  {copied && (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#2f2f2f] text-white ${isMobile ? 'text-xs px-3 py-1' : 'text-sm px-6 py-2'} rounded-xl shadow-lg flex items-center gap-2 z-50 transition-all duration-300`}>
      <FiCopy className="text-white" />
      <span>Copied to clipboard</span>
    </div>
  )}
</div>

  );
};

export default Dashboard;
