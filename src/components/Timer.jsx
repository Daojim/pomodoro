import { useState } from "react";

function Timer() {
  const startingMinutes = 25;
  let time = startingMinutes * 60;
  const [timeText, setTimeText] = useState("25:00");

  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    setTimeText(`${minutes}:${seconds}`);
    time--;
  }

  return (
    <div className="timerCard">
      <div className="timerSection">
        <h1 className="countdown">{timeText}</h1>
        <div className="startPause">
          <button className="startPause-btn" onClick={updateCountdown}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
