import Marquee from "react-fast-marquee";

const FeatureMarquee = () => {
  const features = [
    {
      icon: "/feature-leadcrm-1.webp",
      title: "One click push",
      subtitle: "to CRM",
    },
    {
      icon: "/feature-leadcrm-2.webp",
      title: "Custom Field",
      subtitle: "Mapping",
    },
    {
      icon: "/feature-leadcrm-4.webp",
      title: "Advanced Waterfall",
      subtitle: "Enrichment",
    },
    {
      icon: "/feature-leadcrm-3.webp",
      title: "Instant Mail",
      subtitle: "Finder",
    },
    {
      icon: "/feature-leadcrm-5.webp",
      title: "Seamless Deal",
      subtitle: "Management",
    },
    {
      icon: "/feature-leadcrm-6.webp",
      title: "Access to 700M+",
      subtitle: "Contacts",
    },
    {
      icon: "/feature-leadcrm-7.webp",
      title: "Advanced AI",
      subtitle: "Productivity",
    },
  ];

  return (
    <div
      id="feature-marquee"
      className="relative w-full py-8 overflow-hidden bg-white md:py-12 lg:py-16"
    >
      {/* Gradient overlays effect*/}
      <div className="absolute top-0 bottom-0 left-0 z-10 w-16 pointer-events-none md:w-24 lg:w-32 bg-gradient-to-r from-white via-white to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 z-10 w-16 pointer-events-none md:w-24 lg:w-32 bg-gradient-to-l from-white via-white to-transparent"></div>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 mx-8 md:mx-12 lg:mx-16"
          >
            <div className="flex-shrink-0 ">
              <img
                src={feature.icon}
                alt={feature.title}
                className="object-contain w-8 h-8"
              />
            </div>

            <div className="flex items-start whitespace-nowrap">
              <span className="mr-1 text-base font-semibold text-gray-900 md:text-lg ">
                {feature.title}
              </span>
              {feature.subtitle && (
                <span className="text-base font-semibold text-gray-500 md:text-lg ">
                  {feature.subtitle}
                </span>
              )}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeatureMarquee;
