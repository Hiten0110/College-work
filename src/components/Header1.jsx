import { Link } from "react-router-dom";
import { Menu } from "react-feather";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <Link
          to="/home"
          className="text-4xl font-bold tracking-wide"
        >
          <span className="text-blue-600">Hire</span>
          <span className="text-gray-900">Karo</span>
        </Link>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
{/* 
          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a> */}

          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>

          {/* <a href="#modules" className="hover:text-blue-600 transition">
            Modules
          </a> */}

          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>

          <a href="#reviews" className="hover:text-blue-600 transition">
            Reviews
          </a>

          <a href="#faq" className="hover:text-blue-600 transition">
            FAQ
          </a>

          {/* <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a> */}

        </nav>

        {/* Right Side */}

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

        {/* Mobile Menu */}

        <button className="lg:hidden">

          <Menu size={30} />

        </button>

      </div>

    </header>
  );
}

export default Header; 