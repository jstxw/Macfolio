import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { techStack } from "../constants";

const Terminal = ({ closeWindow, minimizeWindow }) => {
  return (
    <div id="terminal">
      <div id="window-header">
        <WindowControls
          closeWindow={closeWindow}
          minimizeWindow={minimizeWindow}
        />
        <h2>Tech Stack</h2>
        <div className="w-14" />
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@justin % </span>
          cd tech_stack
        </p>
        <div className="label">
          <p className="w-6" />
          <p>Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map((item, index) => (
            <li key={index}>
              <span className="check">✓</span>
              <h3>{item.category}</h3>
              <ul>
                {item.items.map((tech, i) => (
                  <li key={i}>
                    {tech}
                    {i < item.items.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "Technology");

export default TerminalWindow;
