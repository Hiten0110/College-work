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
    <div className="bg-[#111827] text-white text-xs sm:text-sm">

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 sm:py-3 gap-2 sm:gap-4">

        {/* Left Side */}

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">

          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <Phone size={14} className="shrink-0" />
            <span className="break-all">+91 8860336028, +91 88226862201</span>
          </div>

          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <Mail size={14} className="shrink-0" />
            <a href="mailto:supporthirekaro22@gmail.com" className="break-all"><span>supporthirekaro22@gmail.com</span></a>
          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4 sm:gap-5">
          <a href="https://www.facebook.com/profile.php?id=61591874885626">
            <Facebook
              size={18}
              className="cursor-pointer hover:text-blue-500 transition hover:scale-110"
            />
          </a>

          {/* <Twitter
            size={18}
            className="cursor-pointer hover:text-sky-400 transition hover:scale-110"
          /> */}

          <a href="https://www.instagram.com/hirekaro.own/"><Instagram
            size={18}
            className="cursor-pointer hover:text-pink-500 transition hover:scale-110"
          /></a>

          <a href="https://www.linkedin.com/in/hire-karo-829012423/">
            <Linkedin
              size={18}
              className="cursor-pointer hover:text-blue-400 transition hover:scale-110"
            />
          </a>
          {/* <Youtube
            size={18}
            className="cursor-pointer hover:text-red-500 transition hover:scale-110"
          /> */}

        </div>

      </div>

    </div>
  );
}

export default TopBox;