import React from "react";
import { Vortex } from "react-loader-spinner";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#111827] z-[9999]">
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="loading"
        colors={[
          "#2563EB",
          "#60A5FA",
          "#1D4ED8",
          "#93C5FD",
          "#3B82F6",
          "#1E40AF",
        ]}
      />
    </div>
  );
}

export default Loader;