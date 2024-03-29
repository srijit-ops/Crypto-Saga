import React from "react";

function Header() {
  return (
    <div className="bg-white lg:px-8 sm:px-5 px-4 py-4 flex justify-start items-center shadow sticky top-0 z-[2000] w-full">
      <img
        src="/logo.png"
        alt="logo"
        className="h-auto sm:w-40 w-32"
      />
    </div>
  );
}

export default Header;
