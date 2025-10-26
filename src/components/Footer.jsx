const Footer = () => {
  return (
    <footer
      className="py-6"
      style={{ background: "linear-gradient(to left, #01B2D838, #01B2D812)" }}
    >
      <div className="px-4 mx-auto max-w-[95%] w-full sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          <div>
            <div className="mb-6">
              <img src="/Logo.svg" alt="LeadCRM.IO" className="h-10 md:h-12" />
            </div>
            <p className="mb-6 text-sm text-gray-700 md:text-base">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-[#06B2D8] rounded-full hover:bg-[#314381]"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-[#06B2D8] rounded-full hover:bg-[#314381]"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-[#06B2D8] rounded-full hover:bg-[#314381]"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-[#06B2D8] rounded-full hover:bg-[#314381]"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-900 md:text-lg">
              Integrations
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  HubSpot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  Salesforce
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  Pipedrive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  Close.io
                  <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
                    Coming Soon
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  Insightly
                  <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
                    Coming Soon
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Alternative */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-900 md:text-lg">
              Alternative
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  Surfe VS LeadCRM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  Linkmatch Alternative
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-900 md:text-lg">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-900 md:text-lg">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@leadcrm.io"
                  className="flex items-center gap-2 text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  <img src="/mail.png" alt="Email" className="w-5 h-5" />
                  support@leadcrm.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+12315387466"
                  className="flex items-center gap-2 text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  <img src="/call.png" alt="Phone" className="w-5 h-5" />
                  +1 231-538-7466
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-700 transition-colors duration-200 hover:text-[#00BBE4] md:text-base"
                >
                  <img src="/help.png" alt="Help" className="w-5 h-5" />
                  Help Center
                </a>
              </li>
            </ul>
            {/* Chrome Extension Button */}
            <div className="flex mt-8 md:justify-end md:mt-12">
              <button className="flex items-center w-40 gap-2 px-4 py-1 text-sm font-medium text-left text-white transition-all duration-300 bg-[#242424] rounded-2xl hover:bg-gray-800 md:text-base">
                Available in Chrome
                <img src="/ChromeLogo.svg" alt="Chrome" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="pt-6">
          <p className="pb-2 text-xs text-center text-gray-600 border-b border-gray-300 md:text-sm">
            Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
            LinkedIn(tm) logos and trademarks displayed on this tool are
            property of LinkedIn. LeadCRM is distributed AS IS. Your use of
            LeadCRM is at your own risk.
          </p>
          <p className="pt-2 text-xs text-center text-gray-600 md:text-sm">
            Copyright © 2025 LeadCRM. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
