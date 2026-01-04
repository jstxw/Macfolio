import { useRef, useEffect } from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";
import TimeDSS from "../assets/Project_Pictures/TImeDSS.png";

// Video player component with localStorage persistence
const ProjectVideo = ({ src, projectId }) => {
  const videoRef = useRef(null);
  const storageKey = `project-video-${projectId}`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Restore saved position
    const savedTime = localStorage.getItem(storageKey);
    if (savedTime) {
      video.currentTime = parseFloat(savedTime);
    }

    // Save position periodically and on pause
    const saveTime = () => {
      localStorage.setItem(storageKey, video.currentTime.toString());
    };

    const interval = setInterval(saveTime, 1000);
    video.addEventListener("pause", saveTime);
    video.addEventListener("ended", () => {
      localStorage.setItem(storageKey, "0");
    });

    return () => {
      clearInterval(interval);
      video.removeEventListener("pause", saveTime);
    };
  }, [storageKey]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      autoPlay
      playsInline
      className="w-full h-full object-cover"
    />
  );
};

const Projects = ({ closeWindow, minimizeWindow }) => {
  const projects = [
    {
      id: 1,
      name: "rainbolt.ai",
      description:
        "Built a geolocation inference platform using a multi-stage RAG pipeline with CLIP-based image embeddings leveraging 900K+ entries in Pinecone.  Best UI @ Hack the Valley 2025.",
      tech: [
        "Next.js",
        "FastAPI",
        "Langchain",
        "OpenAI CLIP",
        "Firebase",
        "Auth0",
        "Pinecone",
      ],
      github: "https://github.com/jstxw/rainbolt.ai",
      devpost: "https://devpost.com/software/rainbolt-ai",
      live: "https://rainboltai.vercel.app/",
      video: "/videos/rainboltai.mp4",
    },
    {
      id: 2,
      name: "RouteTO",
      description:
        "RouteTO is a geospatial crime-avoidance routing platform that automatically finds the safest and crime-minimal route between two locations based on 441k+ incident reports across the GTA. Leverages R-tree spatial indexing for O(log n) bounding-box queries, and OSRM-based routing augmented by spatial buffers and crime-density scoring, placing 3rd @ Ignition Hacks 2025.",
      tech: ["React.js", "NumPY", "Pandas", "Redis", "Leaflet.js"],
      github: "https://github.com/jstxw/RouteTO",
      devpost: "https://devpost.com/software/routeto",
      live: "https://routeto.vercel.app/",
      video: "/videos/RouteTO.mp4",
    },
    {
      id: 3,
      name: "VibeTrade",
      description:
        "Realistic paper trading platform with risk management analysis leveraging Alpaca, Finnhub and Polymarket/Reddit. Real-time dealer agent to prevent impulsive trading; featuring anomaly detection, emergency account lockouts, and a weighted risk scoring system.",
      tech: ["Websockets", "PostgreSQL", "ElevenLabs", "LangGraph", "OpenAI"],
      github: "https://github.com/jstxw/VibeTrade",
      devpost: "https://devpost.com/software/vibetrade",
      video: "/videos/VibeTrade.mp4",
    },
    {
      id: 4,
      name: "TimeDSS",
      description:
        "Excel-based Decision Support System (DSS) to help users plan, track, and optimize how they allocate time across work, study, and personal tasks through VBA. Tools used: XLOOKUP, INDEX-MATCH, SUMIFS, COUNTIFS, IFERROR, OFFSET, dynamic arrays, and pivot tables.",
      tech: ["VBA", "Excel"],
      github: "https://github.com/jstxw/TimeDSS",
      live: "https://jstxw.github.io/TimeDSS/",
      image: TimeDSS,
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
              {project.video ? (
                <ProjectVideo src={project.video} projectId={project.id} />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  style={
                    project.id === 4
                      ? {
                          objectPosition: "center",
                          objectFit: "cover",
                        }
                      : {}
                  }
                />
              ) : (
                <div className="placeholder">No Image</div>
              )}
            </div>
            <div className="project-info text-black">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-footer">
                <div className="project-icons">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.devpost && (
                    <a
                      href={project.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Devpost"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853H10.112z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  )}
                </div>
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
