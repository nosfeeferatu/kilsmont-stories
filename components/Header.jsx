import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="container m-auto">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="font-extrabold text-xl">Kilsmont Stories</h1>
          </div>
          <div>
            <p className="px-2 py-1 border-black border-2 rounded-md">
              Get Started
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
