const WindowControls = ({ closeWindow, minimizeWindow }) => {
  return (
    <div id="window-controls">
      <button className="close" onClick={closeWindow} />
      <button className="minimize" onClick={minimizeWindow} />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;
