import React from "react";

const SplashScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <img
          src="/logo.png"
          alt="Splash Screen Image"
          className="w-64 mx-auto mb-4"
        />
        <p className="">created by yours truly</p>
      </div>
    </div>
  );
};

export default SplashScreen;
