import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-srceen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Meteor Shower */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
