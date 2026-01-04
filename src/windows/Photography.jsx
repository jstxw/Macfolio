import { useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { gallery } from "../constants";

const PhotoViewer = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Photo Window */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[90vw] max-h-[90vh]">
        <div id="window-header">
          <WindowControls closeWindow={onClose} />
          <h2>Photo {photo.id}</h2>
          <div className="w-14" />
        </div>

        <div className="bg-stone-100 p-4">
          <img
            src={photo.img}
            alt={`Photo ${photo.id}`}
            className="max-w-[85vw] max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const Photography = ({ closeWindow, minimizeWindow }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
                className={`photo-item ${
                  photo.orientation === "vertical" ? "vertical" : "horizontal"
                }`}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.img}
                  alt={`Photo ${photo.id}`}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Coming soon...</p>
          </div>
        )}
      </div>

      <PhotoViewer
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
};

const PhotographyWindow = WindowWrapper(Photography, "Photography");

export default PhotographyWindow;
