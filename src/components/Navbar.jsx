import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/Logo.svg"
              alt="LeadCRM Logo"
              className="w-auto h-8 md:h-16"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-1 md:flex lg:space-x-4">
            <div className="relative group">
              <button className="px-3 lg:px-4 py-2 text-gray-700 hover:text-[#1A3E62] transition-colors duration-200 flex items-center gap-1 text-sm lg:text-base font-medium">
                Product
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <a
              href="#pricing"
              className="px-3 lg:px-4 py-2 text-gray-700 hover:text-[#1A3E62] transition-colors duration-200 text-sm lg:text-base font-medium"
            >
              Pricing
            </a>

            <div className="relative group">
              <button className="px-3 lg:px-4 py-2 text-gray-700 hover:text-[#1A3E62] transition-colors duration-200 flex items-center gap-1 text-sm lg:text-base font-medium">
                Resources
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="px-3 lg:px-4 py-2 text-gray-700 hover:text-[#1A3E62] transition-colors duration-200 flex items-center gap-1 text-sm lg:text-base font-medium">
                Company
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="items-center hidden space-x-3 md:flex lg:space-x-4">
            <button className="relative px-4 lg:px-6 py-2 lg:py-2.5 bg-[#1A3E62] text-white rounded-md overflow-hidden group transition-all duration-300 text-sm lg:text-base font-medium">
              <span className="relative z-10">Get Your Free Account</span>
              <div className="absolute inset-0 bg-[#2D96BC] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>

            <button className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 border-2 border-[#1A3E62] text-[#1A3E62] rounded-md hover:bg-[#DFF0FF] transition-colors duration-300 text-sm lg:text-base font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-[#1A3E62] hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100">
          <div className="py-2">
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#1A3E62] hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-between font-medium">
              Product
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <a
            href="#pricing"
            className="block px-3 py-2 text-gray-700 hover:text-[#1A3E62] hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
          >
            Pricing
          </a>

          <div className="py-2">
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#1A3E62] hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-between font-medium">
              Resources
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div className="py-2">
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#1A3E62] hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-between font-medium">
              Company
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div className="pt-4 space-y-3">
            <button className="w-full relative px-4 py-3 bg-[#1A3E62] text-white rounded-md overflow-hidden group transition-all duration-300 font-medium">
              <span className="relative z-10">Get Your Free Account</span>
              <div className="absolute inset-0 bg-[#2D96BC] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#1A3E62] text-[#1A3E62] rounded-md hover:bg-[#DFF0FF] transition-colors duration-300 font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
