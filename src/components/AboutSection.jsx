import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & AI-Enabled Web Creator
            </h3>
            <p className="text-foreground">
              I craft immersive web experiences with modern technologies.
              Specializing in full-stack development, I bring ideas to life with
              React and Tailwind CSS on the frontend, and power them with
              Node.js, Express, and MongoDB on the backend. Clean code,
              responsive design, and seamless user experiences are what I aim
              for in every project.
            </p>

            <p className="text-foreground">
              Always exploring, always building.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="./resume.pdf"
                download="AbhinandanSethi_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">
                    Web Development
                  </h4>
                  <p>
                    Building full-stack applications with React, Node.js,
                    Express, and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">
                    UI/UX Design
                  </h4>
                  <p>
                    Designing clean, modern interfaces focused on creating a
                    seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">
                    AI/ML Integration
                  </h4>
                  <p>
                    Bridging the gap between complex machine learning models and
                    user-friendly applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
