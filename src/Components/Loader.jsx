import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 mx-auto  rounded-full animate-spin border-8 border-dashed border-[#13b4be] border-t-transparent"></div>
    </div>
  );
}
