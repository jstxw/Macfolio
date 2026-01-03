import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { gallery } from "../constants";

const Photography = ({ closeWindow, minimizeWindow }) => {
  return (
    <div id="photography-window">
      <div id="window-header">
        <WindowControls
          closeWindow={closeWindow}
          minimizeWindow={minimizeWindow}
        />
        <h2>Photography</h2>
        <div className="w-14" />
      </div>

      <div className="photography-content">
        {gallery.length > 0 ? (
          <div className="photography-grid">
            {gallery.map((photo) => (
              <div
                key={photo.id}
                className={`photo-item ${photo.orientation === "vertical" ? "vertical" : "horizontal"}`}
              >
                <img src={photo.img} alt={`Photo ${photo.id}`} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const PhotographyWindow = WindowWrapper(Photography, "Photography");

export default PhotographyWindow;
