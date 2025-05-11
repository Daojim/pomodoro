import "./App.css";
import Timer from "./components/Timer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <h1>Jimmy's Simple Pomodoro App</h1>
      <Timer />
      <div className="socialLinks">
        <a
          href="https://github.com/Daojim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/jimmy-d-9a0156130/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </>
  );
}

export default App;
