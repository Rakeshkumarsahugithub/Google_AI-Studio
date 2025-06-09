// import { useState } from "react";
// import { FiCopy, FiDownload, FiPlus } from "react-icons/fi";

// const Dashboard = () => {
//   const [copied, setCopied] = useState(false);

//   const codeText = `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \\
// -H "Content-Type: application/json" \\
// -X POST \\
// -d '{
//   "contents": [
//     {
//       "parts": [
//         {
//           "text": "Explain how AI works in a few words"
//         }
//       ]
//     }
//   ]
// }'`;

//   const handleCopy = () => {
//     navigator.clipboard.writeText(codeText).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   const handleDownload = () => {
//     const blob = new Blob([codeText], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "copy.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="bg-[#1a1a1a] min-h-screen text-white p-4 sm:p-6 relative">
//   <div className="max-w-6xl mx-auto px-4 sm:px-6">

//     {/* Header */}
//     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//       <h1 className="text-2xl font-semibold">API Keys</h1>
//       <button className="flex items-center gap-2 cursor-pointer bg-[#7a9fe3] hover:bg-[#688fd0] border border-[#3c4043] text-[#1e3a8a] font-semibold px-4 py-2 rounded-3xl">
//         <FiPlus className="text-[#1e3a8a]" />
//         Create API key
//       </button>
//     </div>

//     {/* Subheading */}
//     <p className="text-gray-400 mb-6 font-semibold">Quickly test the Gemini API</p>

//     <div className="w-full">
//       <a href="https://ai.google.dev/gemini-api/docs/quickstart?lang=python" className="text-sm text-[#8ab4f8] mb-4 inline-block hover:underline">
//         API quickstart guide
//       </a>

//       {/* Code Box */}
//       <div className="mt-4 bg-[#1e1f20] rounded-lg w-full overflow-auto font-mono text-sm text-blue-400">
//         <pre className="whitespace-pre-wrap leading-relaxed p-6 min-w-[300px]">
//           <code>
//             <span className="text-white">curl</span> "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \<br />
//             <span className="text-white">-H</span> "Content-Type: application/json" \<br />
//             <span className="text-white">-X POST</span> \<br />
//             <span className="text-white">-d</span> &#123; <br />
//             {"  \"contents\": [\n    {\n      \"parts\": [\n        {\n          \"text\": \"Explain how AI works in a few words\"\n        }\n      ]\n    }\n  ]"} <br />
//             &#125;
//           </code>
//         </pre>

//         <div className="w-full flex flex-wrap items-center justify-between px-6 py-3 bg-[#4B4B4B] border-t border-[#2a2a2a] rounded-b-lg">
//           <div className="flex gap-4 items-center">
//             <button onClick={handleCopy} className="text-gray-300 hover:text-white flex items-center text-sm">
//               <FiCopy className="mr-1 cursor-pointer" />
              
//             </button>

//             <button onClick={handleDownload} className="text-gray-300 hover:text-white flex items-center text-sm">
//               <FiDownload className="mr-1 cursor-pointer" />
              
//             </button>

//             <div className="text-xs text-gray-400 ml-2">
//               Use code{" "}
//               <a href="https://support.google.com/legal/answer/13505487" target="_blank" rel="noopener noreferrer" className="text-[#8ab4f8] hover:underline">
//                 with caution
//               </a>.
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Info Section */}
//       <div className="mt-6 text-xs text-gray-400 leading-relaxed max-w-sm sm:max-w-full">
//         <p className="mb-2">
//           Your API keys are listed below. You can also view and manage your project and API keys in Google Cloud.
//         </p>
//       </div>

//       {/* Table */}
//       <div className="mt-6 w-full border border-[#2a2a2a] rounded-lg overflow-auto">
//         <div className="min-w-[600px]">
//           <div className="bg-[#4B4B4B] text-left grid grid-cols-5 px-4 py-3 text-gray-300 font-medium text-sm">
//             <div>Project number</div>
//             <div>Project name</div>
//             <div>API key</div>
//             <div>Created</div>
//             <div>Plan</div>
//           </div>
//           <div className="bg-[#151617] px-4 py-8 text-center">
//             <div className="flex flex-col items-center justify-center">
//               <div className="text-gray-500 mb-4">Create an API key to see your projects</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Note */}
//        <div className="mt-6 text-xs text-gray-400 leading-relaxed max-w-sm sm:max-w-full">
//           Remember to use API keys securely. Don't share or embed them in public code.
//           Use of Gemini API from a billing-enabled project is subject to{" "}
//           <a
//             href="https://ai.google.dev/gemini-api/docs/pricing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#8ab4f8] hover:underline"
//           >
//             pay-as-you-go pricing
//           </a>.
//         </div>
//     </div>
//   </div>

//   {/* Copy Notification */}
//   {copied && (
//     <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#2f2f2f] text-white text-sm px-6 py-2 rounded-xl shadow-lg flex items-center gap-2 z-50 transition-all duration-300">
//       <FiCopy className="text-white" />
//       <span>Copied to clipboard</span>
//     </div>
//   )}
// </div>

//   );
// };

// export default Dashboard;


curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \
-H "Content-Type: application/json" \
-X POST \
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
}'
