import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureMarquee from "./components/FeatureMarquee";
import ComparisonSection from "./components/ComparisonSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SalesSolutionsSection from "./components/SalesSolutionsSection";
import SupportedCRMSection from "./components/SupportedCRMSection";
import JoinProfessionalsSection from "./components/JoinProfessionalsSection";
import BottomCTABanner from "./components/BottomCTABanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureMarquee />
      <ComparisonSection />
      <div className="bg-[#EAEFFA]">
        <HowItWorksSection />
      </div>
      <TestimonialsSection />
      <SalesSolutionsSection />
      <SupportedCRMSection />
      <JoinProfessionalsSection />
      <Footer />
      <BottomCTABanner />
    </div>
  );
}

export default App;
