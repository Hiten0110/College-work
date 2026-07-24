import {Facebook,Instagram,Linkedin,Youtube,ArrowUp} from "react-feather";

function Footer() {
  return (
    <footer className="bg-[#F8F9FC] pt-20 pb-8 relative">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}

          <div data-aos="fade-right">

            <h1 className="text-5xl font-bold">
              <span className="text-blue-600">Hire</span>
              <span className="text-gray-900">Karo</span>
            </h1>

            <p className="text-gray-600 text-lg mt-8 leading-9 max-w-xl">

              HireKaro powers today's fast-growing businesses.
              It simplifies recruitment, attendance, payroll,
              employee management and performance tracking—
              all from one intelligent HR platform.

            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-10">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/hirekaro.own/"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition duration-300"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-300"
              >
                <Youtube size={20} />
              </a>

            </div>

          </div>

          {/* Right */}

          <div
            className="flex justify-center lg:justify-end"
            data-aos="fade-left"
          >

            <div>

              <h3 className="text-2xl font-bold mb-8 text-gray-900">

                Quick Links

              </h3>

              <ul className="space-y-5 text-lg text-gray-700">

                <li>
                  <a
                    href="#features"
                    className="hover:text-blue-600 transition"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#pricing"
                    className="hover:text-blue-600 transition"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    href="#reviews"
                    className="hover:text-blue-600 transition"
                  >
                    Reviews
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    className="hover:text-blue-600 transition"
                  >
                    FAQs
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center">

          <p className="text-gray-600 text-center lg:text-left">

            Copyright © 2026 HireKaro HRMS. All Rights Reserved.

          </p>

          <div className="flex gap-8 mt-5 lg:mt-0">

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

      {/* Back To Top */}

      <a
        href="#home"
        className="fixed bottom-8 left-6 w-12 h-12 rounded-xl bg-[#111827] text-white shadow-xl flex items-center justify-center hover:bg-blue-600 transition duration-300 z-50"
      >

        <ArrowUp size={22} />

      </a>

    </footer>
  );
}

export default Footer;