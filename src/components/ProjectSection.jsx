import React from "react";

const projects = [
  {
    id: 1,
    title: "Resumatch",
    desc: "Built with React & Tailwind CSS, Resumatch analyzes resumes against job descriptions using AI. Features real-time API integration, semantic scoring, and a sleek dark teal gradient UI. Helps job seekers identify missing keywords and improve their ATS match rate",
    tags: ["⚛️ React.js", "🎨 Tailwind ", "🟢 Node.js", "🎯 UI/UX "],
    image: "/projects/project1.png",
  },
  {
    id: 2,
    title: "SocketChat",
    desc: "Real-time chat app using MERN stack with Socket.io. Features instant messaging, typing indicators, online status, and responsive Tailwind UI with dark mode. Demonstrates full-stack development with WebSocket integration and React hooks.",
    tags: ["🍃 MongoDB", "🎨 Tailwind ", "🟢 Node.js", " 🔌 Socket.io "],
    image: "/projects/project2.png",
  },
  // {
  //   id: 3,
  //   title: "SocketChat",
  //   desc: "Realtime chat app",
  //   tags: ["react", "tailwindcss", "nodejs", "socket.io"],
  //   // image:,
  // },
];
const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, labore.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card/50 rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image}></img>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary capitalize">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-foreground text-sm mb-4">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
