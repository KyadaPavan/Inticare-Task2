const SupportedCRMSection = () => {
  return (
    <section className="relative py-12 overflow-hidden md:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="relative mb-8 text-center md:mb-12 lg:mb-16">
          <div className="absolute right-0 flex items-center justify-center -top-20 md:right-8 lg:right-72">
            <img
              src="/message-icon.png"
              alt="Message Icon"
              className="object-contain w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 "
            />
          </div>

          <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
            Our Supported LeadCRM
          </h2>

          <p className="max-w-5xl mx-auto text-sm text-gray-600 sm:text-base md:text-lg ">
            LeadCRM provides Native Integrations with popular CRM tools to make
            the most out of your LinkedIn prospecting. We don't want you to miss
            any revenue opportunity on the internet!
          </p>
        </div>

        <div className="relative mb-8 md:mb-12 lg:mb-16">
          <div className="relative flex items-center justify-center p-4 md:p-6 lg:p-8">
            <img
              src="/Support-CRM-image.png"
              alt="LeadCRM Integration Diagram"
              className="object-contain w-full h-auto rounded-lg max-w-7xl"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <button className="px-8 py-4 bg-[#B3FC6A] text-gray-900 rounded-lg font-bold text-base md:text-lg hover:shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300 transform  flex items-center gap-2">
            Lets Integrate your CRM Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportedCRMSection;
