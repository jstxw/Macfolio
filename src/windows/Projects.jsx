import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";

const Projects = ({ closeWindow, minimizeWindow }) => {
  const projects = [
    {
      id: 1,
      name: "Pluma",
      description:
        "A badminton training app helping players improve through structured drills, shot techniques, and interactive 3D visualizations.",
      tech: ["React Native", "Expo", "Three.js"],
      link: "https://github.com/jstxw/Pluma",
      image: "/images/project-1.png",
      year: "2024",
    },
    {
      id: 2,
      name: "rainbolt.ai",
      description:
        "An AI-powered geolocation game that challenges players to identify locations from street view images using machine learning.",
      tech: ["Next.js", "Python", "TensorFlow"],
      link: "https://github.com/jstxw",
      image: "/images/project-2.png",
      year: "2024",
    },
    {
      id: 3,
      name: "RouteTO",
      description:
        "Smart transit companion for Toronto commuters with real-time TTC updates, route optimization, and delay predictions.",
      tech: ["React Native", "Node.js", "MongoDB"],
      link: "https://github.com/jstxw",
      image: "/images/project-3.png",
      year: "2023",
    },
    {
      id: 4,
      name: "VibeTrade",
      description:
        "Social trading platform connecting investors to share strategies, track portfolios, and discover market insights together.",
      tech: ["React", "FastAPI", "PostgreSQL"],
      link: "https://github.com/jstxw",
      image: "/images/project-4.png",
      year: "2023",
    },
  ];

  return (
    <div id="projects-window">
      <div id="window-header">
        <WindowControls
          closeWindow={closeWindow}
          minimizeWindow={minimizeWindow}
        />
        <div className="flex-1" />
        <div className="w-14" />
      </div>

      <div className="portfolio-container">
        {/* Header Section */}
        <header className="portfolio-header">
          <h1>PORTFOLIO</h1>
          <div className="header-line" />
        </header>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="card-image">
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  <div className="image-placeholder">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                )}
              </div>
              <div className="card-content">
                <span className="project-year">{project.year}</span>
                <h2 className="project-title">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="view-project">
                  <span>View Project</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsWindow = WindowWrapper(Projects, "Projects");

export default ProjectsWindow;
