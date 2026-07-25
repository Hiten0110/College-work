import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function Adheader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white py-3 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link to='/home' className="text-[#5996FF] text-2xl sm:text-3xl lg:text-4xl font-semibold flex items-center">
          <span className="text-3xl sm:text-4xl text-[#1B4EF5]">Hire</span>Karo
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-base xl:text-lg font-medium text-gray-700">
          <Link to='/products' className="hover:text-blue-600 transition">Products</Link>
          <Link to='/industries' className="hover:text-blue-600 transition">Industries</Link>
          <Link to='/learning' className="hover:text-blue-600 transition">Learning</Link>
          <Link to='/support' className="hover:text-blue-600 transition">Support</Link>
          <Link to='/partners' className="hover:text-blue-600 transition">Partners</Link>
          <Link to='/company' className="hover:text-blue-600 transition">Company</Link>
        </div>

        {/* Desktop Admin Badge */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="cursor-pointer text-gray-700 hover:text-blue-600">
            <FaSearch size={20} />
          </div>
          <div className="cursor-pointer text-gray-700 hover:text-blue-600">
            <CiGlobe size={24} />
          </div>
          <h2 className="flex items-center gap-2 font-bold text-gray-800">
            Admin <MdOutlineAdminPanelSettings size={26} className="text-blue-600" />
          </h2>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-600 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 shadow-lg">
          <Link to='/products' onClick={() => setIsOpen(false)} className="block py-1 font-medium hover:text-blue-600">Products</Link>
          <Link to='/industries' onClick={() => setIsOpen(false)} className="block py-1 font-medium hover:text-blue-600">Industries</Link>
          <Link to='/learning' onClick={() => setIsOpen(false)} className="block py-1 font-medium hover:text-blue-600">Learning</Link>
          <Link to='/support' onClick={() => setIsOpen(false)} className="block py-1 font-medium hover:text-blue-600">Support</Link>
          <Link to='/partners' onClick={() => setIsOpen(false)} className="block py-1 font-medium hover:text-blue-600">Partners</Link>
          <Link to='/company' onClick={() => setIsOpen(false)} className="block py-1 font-medium hover:text-blue-600">Company</Link>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-bold text-gray-800">
              Admin <MdOutlineAdminPanelSettings size={24} className="text-blue-600" />
            </h2>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Adheader;