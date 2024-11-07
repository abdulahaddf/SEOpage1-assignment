import React from "react";

export default function Warper({ children }) {
  return <div className="flex gap-1 items-center">
    {children}
    </div>;
}
