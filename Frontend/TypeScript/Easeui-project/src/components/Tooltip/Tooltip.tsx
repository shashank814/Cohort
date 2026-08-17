// components/ui/Tooltip.tsx
import React from "react";
import type { ReactNode } from "react";

type Position = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  text: string;
  position?: Position;
  children: ReactNode;
}

const positionStyles: Record<Position, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  children,
}) => {
  return (
    <div className="relative group inline-block">
      {children}

      <div
        className={`absolute z-50 hidden group-hover:block px-3 py-2 text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg whitespace-nowrap ${positionStyles[position]}`}
      >
        {text}
      </div>
    </div>
  );
};