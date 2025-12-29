import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
    </main>
  );
}

export default App;
