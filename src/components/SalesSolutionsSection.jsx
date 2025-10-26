import { useState } from "react";

const SalesSolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("CRM Data Enrichment");

  const tabs = [
    {
      name: "CRM Data Enrichment",
      icon: "/tab-icon-1.webp",
    },
    {
      name: "CRM Data Sync",
      icon: "/tab-icon-2.webp",
    },
    {
      name: "Bulk Export & Enrichment",
      icon: "/tab-icon-3.webp",
    },
    {
      name: "AI Productivity",
      icon: "/feature-leadcrm-7.webp",
    },
  ];

  const tabContent = {
    "CRM Data Enrichment": {
      section1: {
        title: "Here is how LeadCRM tackles that situation.",
        description: "Try LeadCRM Data Enrichment",
        image: "/CRM-Tab-1.png",
      },
      section2: {
        title: "If it does not works for you ! try our",
        description: "Advanced Waterfall Enrichment",
        image: "/CRM-Tab-2.webp",
      },
    },
    "CRM Data Sync": {
      section1: {
        title: "Seamless CRM Integration",
        description: "Try LeadCRM Data Sync",
        image: "/CRM-Tab-1.png",
      },
      section2: {
        title: "Real-time synchronization made easy",
        description: "Auto-Sync Features",
        image: "/CRM-Tab-2.webp",
      },
    },
    "Bulk Export & Enrichment": {
      section1: {
        title: "Export thousands of contacts at once",
        description: "Try Bulk Export & Enrichment",
        image: "/CRM-Tab-1.png",
      },
      section2: {
        title: "Scale your outreach effortlessly",
        description: "Advanced Export Options",
        image: "/CRM-Tab-2.webp",
      },
    },
    "AI Productivity": {
      section1: {
        title: "AI-powered sales automation",
        description: "Try AI Productivity Tools",
        image: "/CRM-Tab-1.png",
      },
      section2: {
        title: "Smart insights for better results",
        description: "Advanced AI Features",
        image: "/CRM-Tab-2.webp",
      },
    },
  };

  return (
    <section className="relative py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="absolute z-10 hidden opacity-60 lg:top-12 lg:left-0 lg:block">
        <img
          src="/robort.png"
          alt="Robot"
          className="object-contain lg:w-20 lg:h-40 "
        />
      </div>

      <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-[90%]  w-full">
        <div className="mb-8 text-center md:mb-10 lg:mb-12">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl lg:text-4xl md:mb-6">
            Complete LinkedIn Sales Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-base text-gray-600 sm:text-lg md:text-xl">
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>

        <div className="mb-8 md:mb-12 lg:mb-16">
          {/* Tabs Container */}
          <div className="relative flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`group relative px-4 py-3 md:px-6 md:py-3.5 lg:px-8 lg:py-4 font-medium text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out ${
                  activeTab === tab.name ? "text-gray-900" : "text-gray-600"
                }`}
              >
                <span className="flex items-center gap-2 md:gap-3">
                  <img
                    src={tab.icon}
                    alt={tab.name}
                    className="object-contain w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                  />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">
                    {tab.name === "CRM Data Enrichment" && "Enrichment"}
                    {tab.name === "CRM Data Sync" && "Sync"}
                    {tab.name === "Bulk Export & Enrichment" && "Export"}
                    {tab.name === "AI Productivity" && "AI"}
                  </span>
                </span>
                {/* Active tab indicator  */}
                {activeTab === tab.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 bg-gray-800"></span>
                )}
              </button>
            ))}
          </div>

          <div className="w-full h-[2px] bg-gray-300 -mt-[2px]"></div>
        </div>

        <div className="mb-4 text-left">
          <p className="text-sm text-gray-700 md:text-lg">
            It's hard to find the accurate contact data for every prospects by{" "}
            <span className="inline-block px-2 py-1 text-xs text-red-500 bg-red-100 rounded-full md:text-sm md:px-3">
              Incomplete Data
            </span>
          </p>
        </div>

        <div className="relative">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`transition-all duration-500 ease-in-out ${
                activeTab === tab.name
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                <div
                  className="p-6 transition-shadow duration-300 shadow-lg rounded-3xl lg:p-6 "
                  style={{ backgroundColor: "#F0F4FD" }}
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 sm:text-lg md:text-xl">
                      {tabContent[tab.name].section1.title}
                    </h3>
                    <div className="flex items-center gap-2 text-base font-semibold text-green-600 cursor-pointer group md:text-lg">
                      <span>{tabContent[tab.name].section1.description}</span>
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="relative p-4 mt-6 overflow-hidden bg-white shadow-md rounded-2xl">
                      <img
                        src={tabContent[tab.name].section1.image}
                        alt={tabContent[tab.name].section1.title}
                        className="object-contain w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="p-6 transition-shadow duration-300 shadow-lg rounded-3xl lg:p-6 "
                  style={{ backgroundColor: "#F0F4FD" }}
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 sm:text-lg md:text-xl">
                      {tabContent[tab.name].section2.title}
                    </h3>
                    <div className="flex items-center gap-2 text-base font-semibold text-green-600 cursor-pointer group md:text-lg">
                      <span>{tabContent[tab.name].section2.description}</span>
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="relative p-4 mt-6 overflow-hidden bg-white shadow-md rounded-2xl">
                      <img
                        src={tabContent[tab.name].section2.image}
                        alt={tabContent[tab.name].section2.title}
                        className="object-contain w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesSolutionsSection;
