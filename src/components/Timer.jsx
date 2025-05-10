import { useState, useRef, useEffect } from "react";

function Timer() {
  const [timeText, setTimeText] = useState("25:00");
  const [isCountingDown, setIsCountingDown] = useState(false);

  function onStartPauseClick() {
    setIsCountingDown((prevState) => !prevState);
  }

  return (
    <div className="timerCard">
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
