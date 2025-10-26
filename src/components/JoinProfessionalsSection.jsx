const JoinProfessionalsSection = () => {
  return (
    <section
      id="join-professionals-section"
      className="relative py-12 overflow-hidden md:py-16 "
    >
      <div className="absolute top-0 right-0 hidden lg:block">
        <img
          src="/Collaboration.png"
          alt="Oval Decoration"
          className="object-contain xl:w-24 xl:h-32"
        />
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-8 text-left lg:mx-10">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-3xl md:text-3xl">
            Join Thousands of Professionals Using LeadCRM
          </h2>
        </div>

        <div className="relative mb-8 ">
          <div className="relative flex items-center justify-center p-4 md:p-6 lg:p-8">
            <img
              src="/Product hunt banner image.png"
              alt="Your LinkedIn Powerhouse for Smarter Lead Management"
              className="object-contain w-full h-auto "
            />
          </div>
        </div>

        <div className="flex justify-center mt-8 ">
          <button className="px-8 py-4 bg-[#B3FC6A] text-gray-900 rounded-lg font-bold text-base md:text-lg hover:shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300 transform  flex items-center gap-2">
            Get Started Today
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

export default JoinProfessionalsSection;
