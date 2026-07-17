import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter
} from "react-feather";

function TopBox() {
  return (
    <div className="bg-[#111827] text-white text-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Left Side */}

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <Phone size={16} />
            <span>+91 8860336028,+91 88226862201</span>
          </div>

          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <Mail size={16} />
            <a href="mailto:supporthirekaro@gmail.com"><span>supporthirekaro@gmail.com</span></a>
          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <Facebook
            size={18}
            className="cursor-pointer hover:text-blue-500 transition hover:scale-110"
          />

          <Twitter
            size={18}
            className="cursor-pointer hover:text-sky-400 transition hover:scale-110"
          />

          <a href="https://www.instagram.com/hirekaro.own/"><Instagram
            size={18}
            className="cursor-pointer hover:text-pink-500 transition hover:scale-110"
          /></a>

          <Linkedin
            size={18}
            className="cursor-pointer hover:text-blue-400 transition hover:scale-110"
          />

          <Youtube
            size={18}
            className="cursor-pointer hover:text-red-500 transition hover:scale-110"
          />

        </div>

      </div>

    </div>
  );
}

export default TopBox;