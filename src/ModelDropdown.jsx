import { useState, useRef } from "react";

const modelGroups = [
  {
    label: "GEMINI 2.5",
    options: [
      { label: "Gemini 2.5 Pro", value: "gemini-2.5-pro", subtitle: "gemini-2.5-pro", isNew: true },
      { label: "Gemini 2.5 Flash", value: "gemini-2.5-flash", subtitle: "gemini-2.5-flash", isNew: true },
      { label: "Gemini 2.5 Flash-Lite Preview 06-17", value: "gemini-2.5-flash-lite-preview-06-17", subtitle: "gemini-2.5-flash-lite-preview-06-17", isNew: true },
    ],
  },
  {
    label: "GEMINI 2.0",
    options: [
      { label: "Gemini 2.0 Flash", value: "gemini-2.0-flash", subtitle: "gemini-2.0-flash", isNew: true },
      { label: "Gemini 2.0 Pro", value: "gemini-2.0-pro", subtitle: "gemini-2.0-pro", isNew: false },
    ],
  },
];

export default function ModelDropdown({ value, onChange, width }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();
  const selected = modelGroups.flatMap(g => g.options).find(o => o.value === value) || modelGroups[0].options[0];

  return (
    <div className="relative mb-2" style={width ? { width } : {}}>
      <button
        ref={buttonRef}
        className={`w-full flex items-center justify-between px-2 py-2 rounded-md border ${open ? 'border-[#8ab4f8]' : 'border-[#2F2F33]'} bg-[#232525] text-[13px] text-[#E3E3E3] font-medium focus:outline-none focus:ring-2 focus:ring-[#8ab4f8] min-h-[36px]`}
        onClick={() => setOpen(o => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        type="button"
        style={{ minHeight: 36 }}
      >
        <span className="truncate">{selected.label}</span>
        <svg className={`ml-2 w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-1 w-full rounded-lg bg-[#18191c] border border-[#2F2F33] shadow-lg z-50 max-h-64 overflow-y-auto">
          {modelGroups.map((group, i) => (
            <div key={group.label}>
              <div className="px-3 pt-2 pb-1 text-xs text-[#8ab4f8] font-bold tracking-wide">{group.label}</div>
              {group.options.map(option => (
                <button
                  key={option.value}
                  className={`w-full flex flex-col items-start px-3 py-1.5 text-left hover:bg-[#232525] focus:bg-[#232525] ${selected.value === option.value ? 'bg-[#232525]' : ''}`}
                  onClick={() => { onChange(option.value); setOpen(false); }}
                  tabIndex={0}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-[13px] ${selected.value === option.value ? 'text-[#8ab4f8]' : 'text-[#E3E3E3]'}`}>{option.label}</span>
                    {option.isNew && <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded border border-[#8ab4f8] text-[#8ab4f8] bg-[#18191c]">NEW</span>}
                  </div>
                  <span className="text-[11px] text-[#B0B0B0] mt-0.5">{option.subtitle}</span>
                </button>
              ))}
              {i < modelGroups.length - 1 && <div className="my-1 border-b border-[#232525]" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 