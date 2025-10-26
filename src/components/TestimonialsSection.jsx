import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      review:
        '"Reliable Data Sync I\'ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive."',
      rating: 5,
      name: "David Fincher",
      platform: "On Capterra",
      avatar: "/User 1.svg",
      logo: "/Rating2.png",
    },
    {
      id: 2,
      review:
        '"My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!"',
      rating: 5,
      name: "Lillian Williams",
      platform: "On Capterra",
      avatar: "/User 2.svg",
      logo: "/Rating2.png",
    },
    {
      id: 3,
      review:
        '"Reliable Data Sync I\'ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive."',
      rating: 5,
      name: "Michael",
      platform: "On Capterra",
      avatar: "/User 2.svg",
      logo: "/Rating2.png",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="relative px-4 py-12 overflow-hidden bg-white sm:px-6 lg:px-8 md:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            What people are saying about LeadCRM
          </h2>

          <div className="flex gap-2 md:gap-3">
            <button
              onClick={handlePrevious}
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-white border-2 border-gray-300 rounded-full hover:bg-gray-100 hover:border-[#2D96BC] md:w-12 md:h-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-[#090F4E] border-2 border-[#090F4E] rounded-full hover:bg-[#1a2570] md:w-12 md:h-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Testimonials  */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex flex-col bg-[#F9F0F8] justify-between rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 "
            >
              <div>
                <div>
                  <p className="flex-1 mb-2 text-sm leading-relaxed text-gray-800 md:text-base">
                    {testimonial.review}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.platform}
                        className="object-contain w-6 h-6"
                      />

                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5"
                            viewBox="0 0 20 20"
                            fill="#090F4E"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-full h-px bg-gray-300"></div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-full md:w-14 md:h-14">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          testimonial.name
                        )}&background=2D96BC&color=fff`;
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="text-base font-bold text-gray-900 md:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.platform}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#2D96BC] w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute w-64 h-64 bg-purple-100 rounded-full -left-32 top-1/4 mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute w-64 h-64 bg-pink-100 rounded-full -right-32 bottom-1/4 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default TestimonialsSection;
