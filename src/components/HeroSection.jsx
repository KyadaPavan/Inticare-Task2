import { INTEGRATIONS, RATINGS, HERO_CONTENT } from "../utils/constants";
import IntegrationBadge from "./IntegrationBadge";
import RatingCard from "./RatingCard";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen px-4 pt-20 pb-12 overflow-hidden md:pt-24 md:pb-20 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/HeroBGImage.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/30 "></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-6 text-center md:space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#2D96BC] rounded-full animate-fade-in">
            <span className="text-lg">{HERO_CONTENT.badge.emoji}</span>
            <span className="text-sm font-medium text-gray-700 md:text-base">
              {HERO_CONTENT.badge.text}
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="px-4 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              {HERO_CONTENT.title.line1}
              <br />
              {HERO_CONTENT.title.line2}
              <span className="text-[#2D96BC] ml-2 relative inline-block">
                {HERO_CONTENT.title.highlight}
                <img
                  src="/YellowLine.svg"
                  alt="LeadCRM"
                  className="absolute left-0 w-full h-auto -bottom-2 md:-bottom-3"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-4xl text-base font-semibold leading-relaxed text-gray-900 sm:text-lg md:text-xl">
            {HERO_CONTENT.description}
          </p>

          {/* Works With Section */}
          <div className="flex flex-col items-center gap-4 mt-6 md:mt-8">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 shadow-lg md:gap-4 md:px-6 md:py-5 rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, #5ED3FF 0%, #6EC6FE 2%, #EB65F4 66%, #FD58F2 100%)",
              }}
            >
              <span className="text-sm font-semibold text-black md:text-base lg:text-xl">
                Works with
              </span>

              {/* Integration Logos */}
              <div className="flex items-center gap-2 md:gap-3">
                {INTEGRATIONS.map((integration) => (
                  <IntegrationBadge key={integration.name} {...integration} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex-row md:gap-8 md:mt-8">
            {RATINGS.map((rating) => (
              <RatingCard key={rating.name} {...rating} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 px-4 mt-8 md:w-full w-fit sm:flex-row md:gap-6 md:mt-10 sm:w-auto sm:px-0">
            <button className="w-full sm:w-auto flex items-center justify-center gap-6 px-6 md:px-4 py-3 md:py-2 bg-[#373737] text-white rounded-xl  hover:shadow-[0_1px_16px_rgba(0,0,0,0.3)] transition-all duration-300 transform group">
              <div className="text-left">
                <p className="text-xs text-gray-300">Available in</p>
                <p className="text-sm font-semibold md:text-base">
                  {HERO_CONTENT.cta.secondary}
                </p>
              </div>
              <img src="./ChromeLogo.svg" alt="LeadCRM" />
            </button>

            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#B3FC6A] text-gray-900  font-semibold text-sm md:text-base hover:shadow-[0_1px_6px_rgba(0,0,0,0.1)] transition-all duration-300 transform  rounded-xl">
              {HERO_CONTENT.cta.primary}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 w-64 h-64 bg-blue-200 rounded-full top-1/4 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute right-0 w-64 h-64 bg-purple-200 rounded-full top-1/3 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute w-64 h-64 bg-pink-200 rounded-full bottom-1/4 left-1/3 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default HeroSection;
