import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonailCards from "@/components/TestimonailCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen antialiased">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonailCards />
        <UpcomingWebinars />
        <Instructors />
        <Footer />
      </div>
    </main>
  );
}
