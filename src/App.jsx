import "./App.css";
import Timer from "./components/Timer";

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
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jimmy-d-9a0156130/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}

export default App;
