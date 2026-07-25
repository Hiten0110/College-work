import {Facebook,Instagram,Linkedin,Youtube,ArrowUp} from "react-feather";

function Footer() {
  return (
    <footer className="bg-[#F8F9FC] pt-12 sm:pt-20 pb-8 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}

          <div data-aos="fade-right">

            <h1 className="text-3xl sm:text-5xl font-bold">
              <span className="text-blue-600">Hire</span>
              <span className="text-gray-900">Karo</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-8 leading-7 sm:leading-9 max-w-xl">

              HireKaro powers today's fast-growing businesses.
              It simplifies recruitment, attendance, payroll,
              employee management and performance tracking—
              all from one intelligent HR platform.

            </p>

            {/* Social Icons */}

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-10">

              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/hirekaro.own/"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition duration-300"
                aria-label="Linkedin"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-300"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>

            </div>

          </div>

          {/* Right */}

          <div
            className="flex justify-start lg:justify-end"
            data-aos="fade-left"
          >

            <div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-gray-900">

                Quick Links

              </h3>

              <ul className="space-y-3 sm:space-y-5 text-base sm:text-lg text-gray-700">

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

        <div className="border-t border-gray-300 mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col lg:flex-row justify-between items-center text-sm sm:text-base">

          <p className="text-gray-600 text-center lg:text-left">

            Copyright © 2026 HireKaro HRMS. All Rights Reserved.

          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-4 lg:mt-0">

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
        className="fixed bottom-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#111827] text-white shadow-xl flex items-center justify-center hover:bg-blue-600 transition duration-300 z-50"
        aria-label="Back to Top"
      >

        <ArrowUp size={20} />

      </a>

    </footer>
  );
}

export default Footer;