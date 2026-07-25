import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white py-3 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link to='/home' className="text-[#5996FF] text-2xl sm:text-3xl lg:text-4xl font-semibold flex items-center">
          <span className="text-3xl sm:text-4xl text-[#1B4EF5]">Hire</span>Karo
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-base xl:text-lg">
          <Link to='/products' className="hover:text-blue-600 transition">Products</Link>
          <Link to='/industries' className="hover:text-blue-600 transition">Industries</Link>
          <Link to='/learning' className="hover:text-blue-600 transition">Learning</Link>
          <Link to='/support' className="hover:text-blue-600 transition">Support</Link>
          <Link to='/partners' className="hover:text-blue-600 transition">Partners</Link>
          <Link to='/company' className="hover:text-blue-600 transition">Company</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="cursor-pointer text-gray-700 hover:text-blue-600">
            <FaSearch size={20} />
          </div>
          <div className="cursor-pointer text-gray-700 hover:text-blue-600">
            <CiGlobe size={24} />
          </div>
          <Link to='/signin' className="text-blue-600 font-medium hover:underline">Sign In</Link>
          <Link to='/get-started'>
            <button className="px-4 py-2 rounded-full bg-lime-400 hover:bg-lime-300 transition font-medium text-sm lg:text-base">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-600 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3 font-medium text-gray-800">
            <Link to='/products' onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-1">Products</Link>
            <Link to='/industries' onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-1">Industries</Link>
            <Link to='/learning' onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-1">Learning</Link>
            <Link to='/support' onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-1">Support</Link>
            <Link to='/partners' onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-1">Partners</Link>
            <Link to='/company' onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-1">Company</Link>
          </div>
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <Link to='/signin' onClick={() => setIsOpen(false)} className="text-center py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg">
              Sign In
            </Link>
            <Link to='/get-started' onClick={() => setIsOpen(false)}>
              <button className="w-full py-2.5 rounded-lg bg-lime-400 hover:bg-lime-300 font-semibold text-center">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;