import { useEffect, useState } from "react";

const BottomCTABanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the FeatureMarquee and JoinProfessionalsSection elements
      const featureMarquee = document.querySelector("#feature-marquee");
      const joinProfessionalsSection = document.querySelector(
        "#join-professionals-section"
      );

      if (featureMarquee && joinProfessionalsSection) {
        const featureMarqueeRect = featureMarquee.getBoundingClientRect();
        const joinProfessionalsRect =
          joinProfessionalsSection.getBoundingClientRect();

        // Show banner when FeatureMarquee reaches the top
        // Hide banner when JoinProfessionalsSection reaches the top
        if (featureMarqueeRect.top <= 0 && joinProfessionalsRect.top > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:block fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 pb-6 ${
        isVisible ? "translate-y-0" : "translate-y-[calc(100%+2rem)]"
      }`}
    >
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-6">
        <div className="relative p-4 overflow-hidden bg-white shadow-2xl rounded-3xl ">
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 p-4 rounded-xl md:flex-row md:gap-8 bg-gradient-to-r from-purple-100 to-pink-50">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex -space-x-6">
                <img
                  src="/user1.png"
                  alt="User 1"
                  className="w-12 h-12 border border-white rounded-full md:w-10 md:h-10"
                />
                <img
                  src="/user2.png"
                  alt="User 2"
                  className="w-12 h-12 border border-white rounded-full md:w-10 md:h-10"
                />
                <img
                  src="/user3.png"
                  alt="User 3"
                  className="w-12 h-12 border border-white rounded-full md:w-10 md:h-10"
                />
              </div>

              <h2 className="text-xl font-semibold text-gray-900">
                Join with our Thousands of professionals Now !
              </h2>
            </div>

            <div className="flex-shrink-0">
              <button className="px-4 py-3 bg-[#C8FF3D] text-gray-900 rounded-xl font-bold text-base md:text-lg hover:bg-[#b8ef2d] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                Get a Free Trial Now!
              </button>
            </div>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 mt-3 md:gap-12 md:mt-4">
            <div className="flex items-center gap-2">
              <img
                src="/credit-card.svg"
                alt="No Credit Card"
                className="w-6 h-6"
              />
              <span className="text-sm font-medium text-gray-700 md:text-base">
                No Credit Card <span className="text-gray-500">Required</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/clock.svg" alt="Free Trial" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-700 md:text-base">
                14 Days Free <span className="text-gray-500">Trial</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCTABanner;
