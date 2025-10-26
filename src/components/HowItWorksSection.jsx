const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Install the Extension",
      description:
        "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      image: "/Step 1.svg",
    },
    {
      number: "2",
      title: "Browse LinkedIn",
      description:
        "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      image: "/Step 2.svg",
    },
    {
      number: "3",
      title: "Get Enriched Data",
      description:
        "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      image: "/Step 3.svg",
    },
    {
      number: "4",
      title: "Sync to CRM Instantly",
      description:
        "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
      image: "/Step 4.svg",
    },
  ];

  return (
    <section className="relative px-4 py-12 overflow-hidden md:py-16 lg:py-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            How it Works
          </h2>
          <p className="text-base text-gray-600 md:text-lg lg:text-xl">
            From setup to success in{" "}
            <span className="font-bold">4 simple steps</span>
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 hidden pointer-events-none top-16 lg:block">
            <svg
              className="w-full h-24"
              viewBox="0 0 1200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 150 50 Q 250 20, 350 50"
                stroke="#2D96BC"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M 450 50 Q 550 80, 650 50"
                stroke="#2D96BC"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M 750 50 Q 850 20, 950 50"
                stroke="#2D96BC"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {index < steps.length - 1 && (
                  <div className="absolute hidden w-24 h-16 pointer-events-none left-1/2 -bottom-8 lg:hidden">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 50 0 Q 30 50, 50 100"
                        stroke="#2D96BC"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}

                <div className="w-full pt-4 pb-2 bg-white border border-gray-200 shadow-md rounded-2xl transition-all duration-300 ease-in-out hover:scale-100 hover:border-[#2D96BC] hover:rounded-2xl hover:border-2">
                  <div className="relative z-10 flex items-center justify-center mb-4 text-3xl font-semibold md:text-5xl text-[#2D96BC] xl:text-8xl italic font-sriracha">
                    {step.number}
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">
                    {step.title}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600 md:text-base">
                    {step.description}
                  </p>

                  <div className="flex items-center justify-center w-full h-48 overflow-hidden rounded-lg bg-gray-50">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-contain w-full h-full p-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <button className="px-8 py-4 bg-[#B3FC6A] text-gray-900 rounded-lg font-bold text-base md:text-lg hover:shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300 transform  flex items-center gap-2">
            Try LeadCRM Now
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
