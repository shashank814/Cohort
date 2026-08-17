// components/ComponentPreview/ComponentPreview.tsx

import { useState, type ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
  code: string;
}

export const ComponentPreview = ({
  children,
  code,
}: ComponentPreviewProps) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">

        <span className="text-sm font-medium text-gray-700">
          {showCode ? "Code" : "Preview"}
        </span>

        <button
          onClick={() => setShowCode(!showCode)}
          className="px-3 py-1.5 text-sm rounded-md border border-gray-200 bg-white hover:bg-gray-100 transition"
        >
          {showCode ? "Preview" : "</> Code"}
        </button>

      </div>

      {/* Preview */}
      {!showCode && (
        <div className="p-10 flex items-center justify-center min-h-48">
          {children}
        </div>
      )}

      {/* Code */}
      {showCode && (
        <div className="relative bg-slate-950">

          <button
            onClick={handleCopy}
            className="absolute right-4 top-4 px-3 py-1.5 text-sm rounded-md bg-white/10 text-white hover:bg-white/20 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          <pre className="p-6 pr-24 overflow-x-auto text-sm text-gray-200">
            <code>{code}</code>
          </pre>

        </div>
      )}

    </div>
  );
};