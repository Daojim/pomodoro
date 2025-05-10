import { useState, useRef, useEffect } from "react";

function Timer() {
  const [timeText, setTimeText] = useState("25:00");
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [count, setCount] = useState(1000);
  let startingMinutes = 25;
  let time = startingMinutes * 60;

  function onStartPauseClick() {
    setIsCountingDown((prevState) => !prevState);
  }

  useEffect(() => {
    console.log("useEffect runs");

    const interval = setInterval(() => {
      time--;
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      setCount((prevCount) => prevCount - 1);
      setTimeText(`${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timerCard">
      <h1>{count}</h1>
      <div className="timerSection">
        <h1 className="countdown">{timeText}</h1>
        <div className="startPause">
          <button className="startPause-btn" onClick={onStartPauseClick}>
            {isCountingDown ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
