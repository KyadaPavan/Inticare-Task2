const ComparisonSection = () => {
  const withoutLeadCRM = [
    {
      title: "Manual Data Entry",
      badge: "8+ Hours wasted daily",
      description:
        "Copying LinkedIn contacts to CRM manually plus losing conversation history",
      icon: "❌",
    },
    {
      title: "Incomplete Data",
      badge: "60% Data Incomplete",
      description:
        "LinkedIn profiles missing Email and Phones from 700M+ Database",
      icon: "❌",
    },
    {
      title: "No CRM Visibility",
      badge: "Zero context available",
      description:
        "Can't see existing CRM contacts when browsing LinkedIn profiles",
      icon: "❌",
    },
    {
      title: "Limited Productivity",
      badge: "No smart assistance",
      description:
        "Writing messages manually plus no AI assistant for reply, Invite or comments.",
      icon: "❌",
    },
  ];

  const withLeadCRM = [
    {
      title: "Complete Bi-Directional Sync",
      description:
        "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
      icon: "/WithLeadCRM1.svg",
      badge: "4+ Hours/day Saved",
    },
    {
      title: "700M+ Contacts + Enrichment",
      description:
        "Get verified emails and phone numbers from a vast global database.",
      icon: "/WithLeadCRM2.svg",
    },
    {
      title: "CRM Overlay on LinkedIn",
      description:
        "See full CRM insights directly on LinkedIn profiles without switching tabs.",
      icon: "/WithLeadCRM3.svg",
    },
    {
      title: "AI Response + Templates + Bulk Exports",
      description:
        "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
      icon: "/WithLeadCRM4.svg",
    },
  ];

  return (
    <section className="relative px-4 py-12 bg-gray-50 sm:px-6 lg:px-8 md:py-16 lg:py-20">
      {/* Multiplication image at top left */}
      <div className="absolute w-16 h-16 -left-6 bottom-20 md:w-40 md:h-40 opacity-60">
        <img
          src="/Multiplication.svg"
          alt="Multiplication"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="mb-12 text-3xl font-semibold text-center text-gray-900 md:text-4xl lg:text-4xl md:mb-16">
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        {/* Comparison Container */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Without LeadCRM */}
          <div className="relative">
            <div className="relative p-6 border-2 border-red-100 shadow-lg bg-red-50 md:p-8 rounded-2xl">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src="/withoutLeadCRM.svg"
                  alt="Without LeadCRM"
                  className="object-cover w-full h-auto"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-red-500 md:text-2xl">
                  Without LeadCRM
                </h3>
              </div>
              <div className="space-y-4">
                {withoutLeadCRM.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-sm">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-base font-semibold text-gray-900 ">
                          {item.title}
                        </h4>
                        <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VS Divider - Desktop */}
          <div className="items-center justify-center hidden lg:flex lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-px bg-gray-300 h-72"></div>
              <div className="flex items-center justify-center text-xl font-medium text-gray-900 ">
                VS
              </div>
              <div className="w-px bg-gray-300 h-72"></div>
            </div>
          </div>

          {/* VS Divider - Mobile */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="flex items-center w-full gap-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex items-center justify-center font-bold text-gray-900">
                VS
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          </div>

          {/* With LeadCRM */}
          <div className="relative">
            <div className="relative p-6 bg-white shadow-lg md:p-8 rounded-2xl">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src="/withLeadCRM.svg"
                  alt="With LeadCRM"
                  className="object-cover w-full h-auto"
                />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-semibold text-green-600 md:text-2xl">
                  With LeadCRM
                </h3>
                <div className="flex items-center gap-2">
                  <img src="./symbol Logo.svg" alt="Lead CRM" />
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    4+ Hours/day Saved
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {withLeadCRM.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="flex-shrink-0 ">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="object-contain w-8 h-8"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-base font-semibold text-gray-900 ">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center mx-auto mt-12 md:flex-row md:mt-16 w-fit">
          <button className="px-8 py-4 bg-[#B3FC6A] text-gray-900 rounded-lg font-bold text-base md:text-lg hover:shadow-[0_1px_16px_rgba(0,0,0,0.1)] transition-all duration-300 transform  relative">
            Start Using LeadCRM Now
          </button>

          <div className="absolute hidden right-44 -bottom-24 md:block">
            <img
              src="/save.svg"
              alt="Arrow"
              className="w-12 h-12 md:w-72 md:h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
