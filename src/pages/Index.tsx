import { motion, useScroll, useSpring } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { MessageSection } from "../components/MessageSection";
import { EventDetails } from "../components/EventDetails";
import { RSVPSection } from "../components/RSVPSection";
import { Footer } from "../components/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-blush origin-left z-50"
      />

      {/* Main content */}
      <main>
        <HeroSection />
        <MessageSection />
        <EventDetails />
        <RSVPSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
