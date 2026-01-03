import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";

const Projects = ({ closeWindow, minimizeWindow }) => {
  const projects = [
    {
      id: 1,
      name: "Pluma",
      description:
        "Helping badminton players improve through structured drills, shot techniques, and interactive 3D training visualizations. Built with a focus on smooth animations and intuitive user experience.",
      tech: ["React Native", "Expo", "Three.js"],
      link: "https://github.com/jstxw/Pluma",
      image: "/images/project-1.png",
    },
    {
      id: 2,
      name: "rainbolt.ai",
      description:
        "A smart tool that helps perfect resumes with instant AI-powered feedback on keywords, formatting, and overall impact. Leverages OpenAI to provide actionable suggestions.",
      tech: ["Next.js", "Tailwind", "OpenAI"],
      link: "https://github.com/jstxw",
      image: "/images/project-2.png",
    },
    {
      id: 3,
      name: "RouteTO",
      description:
        "A fast and convenient mobile app to order meals from favorite restaurants with real-time tracking. Features seamless payment integration and live order updates.",
      tech: ["React Native", "Firebase", "Stripe"],
      link: "https://github.com/jstxw",
      image: "/images/project-3.png",
    },
  ];

  return (
    <div id="projects-window">
      <div id="window-header">
        <WindowControls
          closeWindow={closeWindow}
          minimizeWindow={minimizeWindow}
        />
        <h2>Projects</h2>
        <div className="w-14" />
      </div>

      <div className="projects-content">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.name} />
              ) : (
                <div className="placeholder">No Image</div>
              )}
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-footer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  VIEW PROJECT
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsWindow = WindowWrapper(Projects, "Projects");

export default ProjectsWindow;
