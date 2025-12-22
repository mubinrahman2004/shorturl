import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Shortner
          </Link>

          {/* Right Menu */}
          <div>
            <Link
              to="/signin"
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
