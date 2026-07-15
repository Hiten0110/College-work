import React, { useState, useEffect } from "react";
import img from "../assets/images.jpeg";
import { Vortex } from "react-loader-spinner";

function Error() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111827]">
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111827]">
      <img src={img} alt="404" className="w-[500px]" />

      <h1 className="text-white text-5xl font-bold mt-8">
        Error 404
      </h1>

      <p className="text-gray-300 mt-3">
        Page Not Found
      </p>
    </div>
  );
}

export default Error;