import React from "react";

const NavBar = ({
  isTextChanged = true,
  children,
}: {
  isTextChanged: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <nav className="bg-[#043C6B]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between w-full">
            <a href="/" className="text-2xl">
              Protected Text
            </a>
            <div className="flex gap-5">
              <button className="bg-gray-800 text-white hover:bg-gray-700 rounded px-4 py-1">
                Reload
              </button>
              <button
                className="bg-gray-800 text-white hover:bg-gray-700 rounded px-4 py-1"
                disabled={isTextChanged}
              >
                Save
              </button>
              <button className="bg-gray-800 text-white hover:bg-gray-700 rounded px-4 py-1">
                Password Change
              </button>
              <button className="bg-gray-800 text-white hover:bg-gray-700 rounded px-4 py-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default NavBar;
