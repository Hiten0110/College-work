import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "react-feather";

function Header1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">

        {/* Logo */}
        <Link to="/" className="text-3xl sm:text-4xl font-bold tracking-wide">
          <span className="text-blue-600">Hire</span>
          <span className="text-gray-900">Karo</span>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/signin"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Sign In
          </Link>
          <Link to="/get-started">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-semibold shadow-lg hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-600 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3 font-medium text-gray-800">
            <Link to="/signin" onClick={() => setIsOpen(false)} className="text-center py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg">
              Sign In
            </Link>
            <Link to="/get-started" onClick={() => setIsOpen(false)}>
              <button className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header1; 