import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function Header() {
  return (
    <>

      <nav className="sticky top-0 bg-white py-2 shadow-sm z-50">

        <div className="flex items-center px-6 list-none">

          <Link to='/home' className="text-[#5996FF] text-4xl font-semibold"><span className="text-[40px] text-[#1B4EF5]">Hire</span>Karo</Link>

          <Link to='/products' className="ml-8 text-lg hover:text-blue-600 transition">Products</Link>

          <Link to='/industries' className="ml-6 text-lg hover:text-blue-600 transition">Industries</Link>

          <Link to='/learning' className="ml-6 text-lg hover:text-blue-600 transition">Learning</Link>

          <Link to='/support' className="ml-6 text-lg hover:text-blue-600 transition">Support</Link>

          <Link to='/partners' className="ml-6 text-lg hover:text-blue-600 transition">Partners</Link>

          <Link to='/company' className="ml-6 text-lg hover:text-blue-600 transition">Company</Link>

          <div className="ml-auto cursor-pointer">
            <FaSearch size={22} />
          </div>

          <div className="ml-5 cursor-pointer">
            <CiGlobe size={28} />
          </div>

          <Link to='/signin' className="ml-5 text-blue-600 hover:underline">Sign In</Link>

          <Link to='/get-started'>
            <button className="ml-5 px-5 py-2 rounded-full bg-lime-400 hover:bg-lime-300 transition font-medium">
              Get Started
            </button>
          </Link>

        </div>
      </nav>
    </>
  );
}
export default Header